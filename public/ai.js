(function () {
  const old = document.getElementById("youbiAI");
  if (old) old.remove();

  const section = document.createElement("section");
  section.id = "youbiAI";

  section.innerHTML = `
    <div class="ai-box">
      <h2>🧠 خريطة فهم الدرس</h2>
      <p>أضف صورة الدرس وسيتم استخراج النص منها مجاناً.</p>

      <label class="ai-upload">
        🖼️ إضافة صورة الدرس
        <input id="aiImage" type="file" accept="image/*" hidden>
      </label>

      <div id="aiImagePreview"></div>
      <div id="aiResult"></div>
    </div>
  `;

  document.body.appendChild(section);

  const input = document.getElementById("aiImage");
  const preview = document.getElementById("aiImagePreview");
  const result = document.getElementById("aiResult");

  function loadTesseract() {
    return new Promise((resolve, reject) => {
      if (window.Tesseract) {
        resolve(window.Tesseract);
        return;
      }

      const script = document.createElement("script");

      script.src =
        "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js";

      script.onload = () => {
        if (window.Tesseract) {
          resolve(window.Tesseract);
        } else {
          reject(new Error("Tesseract لم يتم تحميله."));
        }
      };

      script.onerror = () => {
        reject(new Error("فشل تحميل Tesseract."));
      };

      document.head.appendChild(script);
    });
  }

  input.addEventListener("change", async function () {
    const file = input.files?.[0];

    if (!file) return;

    preview.innerHTML = `
      <img
        src="${URL.createObjectURL(file)}"
        style="
          max-width:100%;
          max-height:400px;
          margin-top:15px;
          border-radius:15px;
        "
      >
    `;

    result.innerHTML = `
      <div class="ai-loading">
        ⏳ جاري تشغيل قارئ الصورة...
      </div>
    `;

    try {
      const Tesseract = await loadTesseract();

      result.innerHTML = `
        <div class="ai-loading">
          🔎 جاري تحميل محرك قراءة الدرس...
        </div>
      `;

      const worker = await Tesseract.createWorker("ara+fra+eng", 1, {
        logger: function (info) {
          if (info.status) {
            result.innerHTML = `
              <div class="ai-loading">
                🔎 ${info.status}
                ${
                  info.progress
                    ? Math.round(info.progress * 100) + "%"
                    : ""
                }
              </div>
            `;
          }
        }
      });

      result.innerHTML = `
        <div class="ai-loading">
          📖 جاري قراءة الدرس...
        </div>
      `;

      const { data } = await worker.recognize(file);

      await worker.terminate();

      const text = (data.text || "").trim();

      if (!text) {
        result.innerHTML = `
          <div class="ai-error">
            ❌ لم أجد كتابة واضحة في الصورة.
          </div>
        `;
        return;
      }

      createMindMap(text);

    } catch (error) {
      console.error("TESSERACT ERROR:", error);

      result.innerHTML = `
        <div class="ai-error">
          ❌ حدث خطأ أثناء قراءة الصورة.
          <br><br>
          <small>${escapeHtml(error.message || "")}</small>
        </div>
      `;
    }
  });

  function createMindMap(text) {
    const lines = text
      .split(/\r?\n/)
      .map(x => x.trim())
      .filter(x => x.length > 2);

    const title = lines[0] || "خريطة فهم الدرس";

    const groups = [];
    let current = null;

    lines.slice(1).forEach(line => {
      const heading =
        line.length < 80 &&
        (
          /^(\d+[\.\-)]|[أ-ي]\)|[-•])/.test(line) ||
          line.endsWith(":")
        );

      if (!current || heading) {
        current = {
          title: line.replace(/^[-•*]\s*/, ""),
          points: []
        };

        groups.push(current);
      } else {
        current.points.push(line);
      }
    });

    result.innerHTML = `
      <div class="mind-map">

        <div class="mind-center">
          🧠 ${escapeHtml(title)}
        </div>

        <div class="mind-nodes">

          ${groups.map(group => `
            <div class="mind-node">

              <h4>
                📌 ${escapeHtml(group.title)}
              </h4>

              <ul>
                ${
                  group.points.length
                    ? group.points.map(point =>
                        `<li>${escapeHtml(point)}</li>`
                      ).join("")
                    : "<li>معلومة رئيسية</li>"
                }
              </ul>

            </div>
          `).join("")}

        </div>

        <div class="map-note">
          ✅ تم إنشاء خريطة فهم من محتوى الصورة.
        </div>

      </div>
    `;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
})();
