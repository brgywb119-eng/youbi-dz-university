const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "15mb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/api/ai", async (req, res) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "مفتاح الذكاء الاصطناعي غير مضبوط في السيرفر."
      });
    }

    const type = req.body?.type;
    const text = String(req.body?.text || "").trim();
    const image = req.body?.image;

    if (!text && !image) {
      return res.status(400).json({
        error: "أدخل نص الدرس أو أضف صورة."
      });
    }

    let input;

    if (image) {
      if (!image.startsWith("data:image/")) {
        return res.status(400).json({
          error: "صيغة الصورة غير صحيحة."
        });
      }

      const instruction =
        type === "map"
          ? `أنت مساعد تعليمي.
حلل الصورة التعليمية المرفقة، واقرأ النص الموجود فيها.
حوّل محتوى الدرس إلى خريطة فهم منظمة.
أرجع JSON فقط بهذا الشكل:
{"title":"عنوان الدرس","nodes":[{"title":"المحور الأول","points":["النقطة الأولى","النقطة الثانية"]}]}

استخرج المعلومات الموجودة في الصورة فقط.
لا تخترع معلومات.
رتب الأفكار من العام إلى الخاص.
إذا كانت الصورة تحتوي على أكثر من صفحة أو أكثر من فكرة، اجمعها في خريطة واحدة.`
          : `أنت مساعد تعليمي.
اقرأ الصورة التعليمية المرفقة واستخرج محتواها.
أنشئ ملخصا واضحا بالعربية.
قسمه إلى عناوين ونقاط.
استخرج التعاريف والقوانين والمفاهيم المهمة.
لا تخترع معلومات غير موجودة في الصورة.`;

      input = [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: instruction
            },
            {
              type: "input_image",
              image_url: image
            }
          ]
        }
      ];
    } else {
      if (text.length > 50000) {
        return res.status(400).json({
          error: "الدرس طويل جدا."
        });
      }

      const instruction =
        type === "summary"
          ? `أنت مساعد تعليمي جزائري.
لخص الدرس التالي بالعربية الواضحة.
حافظ على المعلومات المهمة ولا تخترع معلومات.
قسم الملخص إلى عناوين واستخرج التعاريف والقوانين والمفاهيم المهمة.

نص الدرس:
${text}`
          : `أنت مساعد تعليمي.
حول الدرس التالي إلى خريطة فهم.
أرجع JSON فقط بهذا الشكل:
{"title":"عنوان الدرس","nodes":[{"title":"المحور الأول","points":["النقطة الأولى","النقطة الثانية"]}]}

لا تخترع معلومات ورتب الأفكار من العام إلى الخاص.

نص الدرس:
${text}`;

      input = instruction;
    }

    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + apiKey
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL || "gpt-6-luna",
          input,
          max_output_tokens: 4000
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error(data);

      return res.status(500).json({
        error:
          data?.error?.message ||
          "تعذر الاتصال بالذكاء الاصطناعي."
      });
    }

    const output =
      data.output_text ||
      (data.output || [])
        .flatMap(x => x.content || [])
        .map(x => x.text || "")
        .join("") ||
      "";

    if (!output) {
      return res.status(500).json({
        error: "لم يرجع الذكاء الاصطناعي نتيجة."
      });
    }

    res.json({
      result: output
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "حدث خطأ في السيرفر."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Youbi DZ University: http://localhost:${PORT}`);
});
