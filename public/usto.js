(function () {
  "use strict";

  const USTO = {

    "الرياضيات": {
      lessons: [
        ["📖 Mathématiques 1 — USTO L1", "https://elearning.univ-usto.dz/course/index.php?categoryid=1311"],
        ["📖 Cours Mathématiques L1 ST", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=math%C3%A9matiques+1"]
      ],
      summaries: [
        ["📝 ملخص الرياضيات 1", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=math%C3%A9matiques+1"]
      ],
      exercises: [
        ["🧩 تمارين الرياضيات", "https://www.univ-usto.dz/faculte/fac-chimie/fr/cours-et-fiches-de-td-l1-ingenieur-2023-2024/"]
      ],
      videos: [
        ["▶️ فيديوهات Math L1 USTO", "https://www.youtube.com/results?search_query=USTO+Math+L1+ST"]
      ]
    },

    "الفيزياء": {
      lessons: [
        ["📖 Physics 1 — Mechanics", "https://www.univ-usto.dz/coursenligne-fac-physique/"],
        ["📖 Physique 1 — USTO", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Physique+1"]
      ],
      summaries: [
        ["📝 Résumé Physique 1", "https://www.univ-usto.dz/coursenligne-fac-physique/"]
      ],
      exercises: [
        ["🧩 Exercices et examens corrigés", "https://www.univ-usto.dz/coursenligne-fac-physique/"],
        ["🧩 Physique 1 — تمارين", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Physique+1"]
      ],
      videos: [
        ["▶️ Physique 1 L1 ST", "https://www.youtube.com/results?search_query=Physique+1+L1+ST+USTO"]
      ]
    },

    "الكيمياء": {
      lessons: [
        ["📖 Chimie 1 — USTO", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Chimie+1"],
        ["📖 Cours L1 Ingénieur", "https://www.univ-usto.dz/faculte/fac-chimie/fr/cours-et-fiches-de-td-l1-ingenieur-2023-2024/"]
      ],
      summaries: [
        ["📝 ملخص Chimie 1", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Chimie+1"]
      ],
      exercises: [
        ["🧩 TD Chimie 1", "https://www.univ-usto.dz/faculte/fac-chimie/fr/cours-et-fiches-de-td-l1-ingenieur-2023-2024/"]
      ],
      videos: [
        ["▶️ Chimie 1 L1 ST", "https://www.youtube.com/results?search_query=Chimie+1+L1+ST+USTO"]
      ]
    },

    "الإعلام الآلي": {
      lessons: [
        ["📖 Informatique 1 — USTO", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Informatique+1"],
        ["📖 Informatique L1 ST", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Informatique+L1"]
      ],
      summaries: [
        ["📝 ملخص الإعلام الآلي 1", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Informatique+1"]
      ],
      exercises: [
        ["🧩 تمارين Informatique 1", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Informatique+1"]
      ],
      videos: [
        ["▶️ Informatique 1 L1 ST", "https://www.youtube.com/results?search_query=Informatique+1+L1+ST+USTO"]
      ]
    },

    "الجبر": {
      lessons: [
        ["📖 Algèbre — Cours USTO", "https://www.univ-usto.dz/faculte/fac-chimie/fr/cours-et-fiches-de-td-l1-ingenieur-2023-2024/"]
      ],
      summaries: [
        ["📝 Algèbre — ملخص", "https://www.univ-usto.dz/faculte/fac-chimie/fr/cours-et-fiches-de-td-l1-ingenieur-2023-2024/"]
      ],
      exercises: [
        ["🧩 TD Algèbre 1 — USTO", "https://www.univ-usto.dz/faculte/fac-chimie/fr/cours-et-fiches-de-td-l1-ingenieur-2023-2024/"]
      ],
      videos: [
        ["▶️ Algèbre 1 L1 ST", "https://www.youtube.com/results?search_query=Algèbre+1+L1+ST+USTO"]
      ]
    },

    "الرسم التقني": {
      lessons: [
        ["📖 Dessin technique L1", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Dessin+technique"]
      ],
      summaries: [
        ["📝 ملخص الرسم التقني", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Dessin+technique"]
      ],
      exercises: [
        ["🧩 تمارين الرسم التقني", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Dessin+technique"]
      ],
      videos: [
        ["▶️ Dessin technique L1", "https://www.youtube.com/results?search_query=Dessin+technique+L1+USTO"]
      ]
    },

    "ميكانيك النقطة": {
      lessons: [
        ["📖 Mécanique du point matériel", "https://www.univ-usto.dz/coursenligne-fac-physique/"]
      ],
      summaries: [
        ["📝 Résumé Mécanique", "https://www.univ-usto.dz/coursenligne-fac-physique/"]
      ],
      exercises: [
        ["🧩 Exercices Mécanique", "https://www.univ-usto.dz/coursenligne-fac-physique/"]
      ],
      videos: [
        ["▶️ Mécanique du point L1", "https://www.youtube.com/results?search_query=Mécanique+du+point+L1+USTO"]
      ]
    },

    "الكهرباء": {
      lessons: [
        ["📖 Électricité — L1", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Electricité+L1"]
      ],
      summaries: [
        ["📝 ملخص الكهرباء", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Electricité+L1"]
      ],
      exercises: [
        ["🧩 تمارين الكهرباء", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Electricité+L1"]
      ],
      videos: [
        ["▶️ Electricité L1 ST", "https://www.youtube.com/results?search_query=Electricité+L1+ST+USTO"]
      ]
    },

    "الإلكترونيات": {
      lessons: [
        ["📖 Électronique — L1", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Electronique+L1"]
      ],
      summaries: [
        ["📝 ملخص الإلكترونيات", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Electronique+L1"]
      ],
      exercises: [
        ["🧩 تمارين الإلكترونيات", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Electronique+L1"]
      ],
      videos: [
        ["▶️ Electronique L1", "https://www.youtube.com/results?search_query=Electronique+L1+USTO"]
      ]
    },

    "الخوارزميات": {
      lessons: [
        ["📖 Algorithmique — L1 ST", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Algorithmique+L1"]
      ],
      summaries: [
        ["📝 ملخص الخوارزميات", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Algorithmique+L1"]
      ],
      exercises: [
        ["🧩 تمارين الخوارزميات", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=Algorithmique+L1"]
      ],
      videos: [
        ["▶️ Algorithmique L1 ST", "https://www.youtube.com/results?search_query=Algorithmique+L1+ST+USTO"]
      ]
    },

    "اللغة الأجنبية": {
      lessons: [
        ["📖 English / Français L1", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=English+L1"]
      ],
      summaries: [
        ["📝 ملخص اللغة الأجنبية", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=English+L1"]
      ],
      exercises: [
        ["🧩 تمارين اللغة", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=English+L1"]
      ],
      videos: [
        ["▶️ English L1 ST", "https://www.youtube.com/results?search_query=English+L1+ST+USTO"]
      ]
    },

    "طرق الكتابة": {
      lessons: [
        ["📖 Méthodes de rédaction — USTO", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=M%C3%A9thodes+de+r%C3%A9daction"]
      ],
      summaries: [
        ["📝 ملخص طرق الكتابة", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=M%C3%A9thodes+de+r%C3%A9daction"]
      ],
      exercises: [
        ["🧩 تمارين طرق الكتابة", "https://elearning.univ-usto.dz/course/search.php?perpage=all&search=M%C3%A9thodes+de+r%C3%A9daction"]
      ],
      videos: [
        ["▶️ Méthodes de rédaction", "https://www.youtube.com/results?search_query=Méthodes+de+rédaction+USTO"]
      ]
    }
  };

  function normalize(text) {
    return String(text || "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function findSubject(card) {
    const text = normalize(card.innerText);

    for (const subject of Object.keys(USTO)) {
      if (text.includes(subject)) {
        return subject;
      }
    }

    return null;
  }

  function openUSTO(subject) {

    const old = document.getElementById("ustoModal");
    if (old) old.remove();

    const data = USTO[subject];

    const modal = document.createElement("div");
    modal.id = "ustoModal";

    modal.innerHTML = `
      <div class="usto-box">

        <button class="usto-close">×</button>

        <div class="usto-head">
          <div class="usto-logo">🎓</div>

          <div>
            <h2>${subject}</h2>
            <p>
              جامعة وهران للعلوم والتكنولوجيا محمد بوضياف
              <br>
              السنة الأولى — علوم وتكنولوجيا
            </p>
          </div>
        </div>

        <div class="usto-tabs">

          <button data-tab="lessons">
            📖 الدروس
          </button>

          <button data-tab="summaries">
            📝 الملخصات
          </button>

          <button data-tab="exercises">
            🧩 التمارين
          </button>

          <button data-tab="videos">
            ▶️ الفيديوهات
          </button>

        </div>

        <div class="usto-content"></div>

      </div>
    `;

    document.body.appendChild(modal);

    const content = modal.querySelector(".usto-content");
    const tabs = modal.querySelectorAll("[data-tab]");

    function showTab(tab) {

      tabs.forEach(function (button) {
        button.classList.toggle(
          "active",
          button.dataset.tab === tab
        );
      });

      const resources = data[tab] || [];

      if (!resources.length) {
        content.innerHTML = `
          <div class="usto-empty">
            لا يوجد محتوى مضاف حاليا.
          </div>
        `;
        return;
      }

      content.innerHTML = resources.map(function (item) {

        return `
          <a
            class="usto-resource"
            href="${item[1]}"
            target="_blank"
            rel="noopener noreferrer"
          >

            <div class="usto-icon">
              ${tab === "videos" ? "▶️" : "📄"}
            </div>

            <div class="usto-resource-info">
              <strong>${item[0]}</strong>
              <small>
                ${tab === "videos"
                  ? "فتح الفيديوهات"
                  : "فتح مورد USTO"}
              </small>
            </div>

            <span class="usto-arrow">↗</span>

          </a>
        `;

      }).join("");
    }

    tabs.forEach(function (button) {
      button.addEventListener("click", function () {
        showTab(button.dataset.tab);
      });
    });

    modal.querySelector(".usto-close").onclick = function () {
      modal.remove();
    };

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.remove();
      }
    });

    showTab("lessons");
  }

  function connectUSTOCards() {

    document.querySelectorAll(".subject-card").forEach(function (card) {

      if (card.dataset.ustoConnected === "yes") {
        return;
      }

      const panel = card.closest(".subjects-panel");

      if (!panel) {
        return;
      }

      const panelText = panel.innerText || "";

      const isUSTO =
        panelText.includes("هندسة مدنية") ||
        panelText.includes("هندسة ميكانيكية") ||
        panelText.includes("هندسة كهربائية") ||
        panelText.includes("تكنولوجيا المعلومات") ||
        panelText.includes("علوم وتكنولوجيا");

      if (!isUSTO) {
        return;
      }

      const subject = findSubject(card);

      if (!subject) {
        return;
      }

      card.dataset.ustoConnected = "yes";

      card.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        openUSTO(subject);

      }, true);

    });
  }

  connectUSTOCards();

  const observer = new MutationObserver(function () {
    connectUSTOCards();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  const style = document.createElement("style");

  style.textContent = `

    #ustoModal {
      position: fixed;
      inset: 0;
      z-index: 9999999;

      background:
        radial-gradient(
          circle at top,
          rgba(0,170,255,.15),
          rgba(0,0,0,.92)
        );

      backdrop-filter: blur(10px);

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 15px;
    }

    .usto-box {
      width: min(920px, 100%);
      max-height: 92vh;

      overflow-y: auto;

      background:
        linear-gradient(
          145deg,
          #101722,
          #080c12
        );

      color: #fff;

      border:
        1px solid rgba(0,200,255,.25);

      border-radius: 28px;

      padding: 24px;

      box-shadow:
        0 30px 100px rgba(0,0,0,.8),
        0 0 40px rgba(0,180,255,.08);

      position: relative;
    }

    .usto-close {
      position: absolute;

      top: 13px;
      left: 13px;

      width: 45px;
      height: 45px;

      border: 0;
      border-radius: 50%;

      background:
        rgba(255,255,255,.08);

      color: white;

      font-size: 30px;

      cursor: pointer;
    }

    .usto-head {
      display: flex;
      align-items: center;

      gap: 16px;

      padding:
        4px
        55px
        22px
        5px;
    }

    .usto-logo {
      width: 62px;
      height: 62px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 18px;

      background:
        linear-gradient(
          135deg,
          rgba(0,200,255,.25),
          rgba(100,60,255,.2)
        );

      font-size: 34px;
    }

    .usto-head h2 {
      margin: 0 0 6px;
      font-size: 25px;
    }

    .usto-head p {
      margin: 0;
      line-height: 1.6;
      opacity: .65;
      font-size: 13px;
    }

    .usto-tabs {
      display: grid;

      grid-template-columns:
        repeat(4, 1fr);

      gap: 9px;

      margin-bottom: 18px;
    }

    .usto-tabs button {
      border: 1px solid
        rgba(255,255,255,.12);

      background:
        rgba(255,255,255,.045);

      color: white;

      padding: 14px 7px;

      border-radius: 14px;

      cursor: pointer;

      font-weight: bold;

      transition: .2s;
    }

    .usto-tabs button:hover {
      transform: translateY(-2px);
    }

    .usto-tabs button.active {
      background:
        linear-gradient(
          135deg,
          rgba(0,190,255,.25),
          rgba(80,80,255,.18)
        );

      border-color:
        rgba(0,210,255,.65);

      box-shadow:
        0 0 20px
        rgba(0,190,255,.08);
    }

    .usto-resource {
      display: flex;

      align-items: center;

      gap: 14px;

      padding: 17px;

      margin: 10px 0;

      border-radius: 17px;

      border: 1px solid
        rgba(255,255,255,.1);

      background:
        rgba(255,255,255,.035);

      color: white;

      text-decoration: none;

      transition: .2s;
    }

    .usto-resource:hover {
      transform:
        translateY(-2px);

      border-color:
        rgba(0,200,255,.4);

      background:
        rgba(0,180,255,.09);
    }

    .usto-icon {
      width: 46px;
      height: 46px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 13px;

      background:
        rgba(0,190,255,.1);

      font-size: 24px;
    }

    .usto-resource-info {
      flex: 1;
    }

    .usto-resource-info strong {
      display: block;
      line-height: 1.5;
    }

    .usto-resource-info small {
      display: block;

      margin-top: 4px;

      opacity: .5;
    }

    .usto-arrow {
      font-size: 22px;
      opacity: .55;
    }

    .usto-empty {
      padding: 45px 20px;

      text-align: center;

      border:
        1px dashed
        rgba(255,255,255,.18);

      border-radius: 18px;

      color: #aaa;
    }

    @media(max-width:650px) {

      .usto-box {
        padding: 18px;
        border-radius: 22px;
      }

      .usto-tabs {
        grid-template-columns:
          repeat(2, 1fr);
      }

      .usto-head h2 {
        font-size: 20px;
      }

      .usto-resource {
        padding: 14px;
      }

    }

  `;

  document.head.appendChild(style);

  console.log("✅ USTO resources loaded");

})();
