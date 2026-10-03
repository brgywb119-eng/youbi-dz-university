(function () {
  "use strict";

  const data = {
    "التحليل": {
      lessons: [
        ["📖 Analyse 1 — Cours — Chapitre 1 PDF",
        "https://dmath.univ-tlemcen.dz/assets/uploads/Documents/2023-2024/Licence/1er_annee/Sem1/TD/Analyse1/Chapitre%201%20Droite%20r%C3%A9elle.pdf"]
      ],
      summaries: [
        ["📝 أرشيف Analyse 1 — 2023/2024",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      exercises: [
        ["🧩 Analyse 1 — Série TD PDF",
        "https://dmath.univ-tlemcen.dz/assets/uploads/Documents/2023-2024/Licence/1er_annee/Sem1/TD/Analyse1/S%C3%A9rie%20de%20TD%20Chapitre%201%20la%20droite%20r%C3%A9elle.pdf"]
      ],
      videos: [
        ["▶️ Analyse 1 — فيديوهات L1",
        "https://www.youtube.com/results?search_query=Analyse+1+L1+Maths+Algérie"]
      ]
    },

    "الجبر": {
      lessons: [
        ["📖 Algèbre 1 — وثائق 2023/2024",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      summaries: [
        ["📝 Algèbre 1 — وثائق ومراجعة",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      exercises: [
        ["🧩 Algèbre 1 — TD 1 PDF",
        "https://dmath.univ-tlemcen.dz/assets/uploads/Documents/2023-2024/Licence/1er_annee/Sem1/TD/Alg%C3%A8bre1/TD%201%20logic.pdf"]
      ],
      videos: [
        ["▶️ Algèbre 1 — فيديوهات L1",
        "https://www.youtube.com/results?search_query=Algèbre+1+L1+Algérie"]
      ]
    },

    "الخوارزميات": {
      lessons: [
        ["📖 Algorithmique 1 — أرشيف 2023/2024",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      summaries: [
        ["📝 Algorithmique 1 — وثائق 2023/2024",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      exercises: [
        ["🧩 Algorithmique 1 — TD1 PDF",
        "https://dmath.univ-tlemcen.dz/assets/uploads/Documents/2023-2024/Licence/1er_annee/Sem1/TD/Algo1/TD1.pdf"],
        ["🧩 Algorithmique 1 — TP0 PDF",
        "https://dmath.univ-tlemcen.dz/assets/uploads/Documents/2023-2024/Licence/1er_annee/Sem1/TD/Algo1/TP0.pdf"]
      ],
      videos: [
        ["▶️ Algorithmique 1 — فيديوهات",
        "https://www.youtube.com/results?search_query=Algorithmique+1+L1+Algérie"]
      ]
    },

    "الهندسة": {
      lessons: [
        ["📖 هندسة — L1 Maths 2023/2024",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      summaries: [
        ["📝 ملخصات الهندسة — L1",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      exercises: [
        ["🧩 تمارين الهندسة — L1",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      videos: [
        ["▶️ Géométrie L1",
        "https://www.youtube.com/results?search_query=Geometrie+L1+Maths+Algerie"]
      ]
    },

    "الإحصاء": {
      lessons: [
        ["📖 Probabilités et statistique — L1",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      summaries: [
        ["📝 ملخص الإحصاء والاحتمالات",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      exercises: [
        ["🧩 تمارين الإحصاء",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      videos: [
        ["▶️ Probabilités L1",
        "https://www.youtube.com/results?search_query=Probabilités+statistiques+L1+Algérie"]
      ]
    },

    "الفيزياء": {
      lessons: [
        ["📖 Physique 1 — Cours PDF",
        "https://dmath.univ-tlemcen.dz/assets/uploads/Documents/2023-2024/Licence/1er_annee/Sem1/TD/Physique1/Cours/Chapitre%20I%20Analyse%20dimensionnelle%202023-2024%20en%20Fran%C3%A7ais.pdf"]
      ],
      summaries: [
        ["📝 ملخصات Physique 1",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      exercises: [
        ["🧩 تمارين Physique 1",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      videos: [
        ["▶️ Physique 1 L1",
        "https://www.youtube.com/results?search_query=Physique+1+L1+Algérie"]
      ]
    },

    "اللغة الأجنبية": {
      lessons: [
        ["📖 English — L1 2023/2024",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      summaries: [
        ["📝 English — L1",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      exercises: [
        ["🧩 English — Exercises",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      videos: [
        ["▶️ English L1",
        "https://www.youtube.com/results?search_query=English+L1+université+Algérie"]
      ]
    },

    "منهجية العمل الجامعي": {
      lessons: [
        ["📖 منهجية العمل الجامعي",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      summaries: [
        ["📝 ملخص المنهجية",
        "https://dmath.univ-tlemcen.dz/fr/pages/168/1-re-ann-e-23-24"]
      ],
      exercises: [],
      videos: [
        ["▶️ Méthodologie universitaire",
        "https://www.youtube.com/results?search_query=methodologie+travail+universitaire+Algerie"]
      ]
    }
  };

  function normalize(s) {
    return String(s || "")
      .replace(/\s+/g, " ")
      .replace(/[📖📝🧩▶️📐]/g, "")
      .trim();
  }

  function findSubject(card) {
    const text = normalize(card.innerText);

    for (const name of Object.keys(data)) {
      if (text.includes(name)) {
        return name;
      }
    }

    return null;
  }

  function makeModal(subject) {
    const old = document.getElementById("mathModal2024");
    if (old) old.remove();

    const d = data[subject];

    const modal = document.createElement("div");
    modal.id = "mathModal2024";

    modal.innerHTML = `
      <div class="math-modal-box">

        <button id="mathClose2024" class="math-close">×</button>

        <div class="math-title">
          <div class="math-big-icon">📐</div>
          <div>
            <h2>${subject}</h2>
            <p>رياضيات — السنة الأولى — 2023/2024</p>
          </div>
        </div>

        <div class="math-tabs">
          <button data-type="lessons">📖 الدروس PDF</button>
          <button data-type="summaries">📝 الملخصات PDF</button>
          <button data-type="exercises">🧩 التمارين PDF</button>
          <button data-type="videos">▶️ الفيديوهات</button>
        </div>

        <div id="mathContent2024"></div>

      </div>
    `;

    document.body.appendChild(modal);

    const content = modal.querySelector("#mathContent2024");
    const tabs = modal.querySelectorAll(".math-tabs button");

    function show(type) {
      tabs.forEach(function (b) {
        b.classList.toggle("selected", b.dataset.type === type);
      });

      const items = d[type] || [];

      if (!items.length) {
        content.innerHTML = `
          <div class="math-empty">
            لا توجد ملفات حاليا.
          </div>
        `;
        return;
      }

      content.innerHTML = items.map(function (item) {
        const video = type === "videos";

        return `
          <a class="math-item"
             href="${item[1]}"
             target="_blank"
             rel="noopener noreferrer">

            <span class="math-item-icon">
              ${video ? "▶️" : "📄"}
            </span>

            <span class="math-item-text">
              <strong>${item[0]}</strong>
              <small>
                ${video ? "فتح الفيديو" : "فتح الملف"}
              </small>
            </span>

            <span class="math-arrow">↗</span>
          </a>
        `;
      }).join("");
    }

    tabs.forEach(function (button) {
      button.addEventListener("click", function () {
        show(button.dataset.type);
      });
    });

    modal.querySelector("#mathClose2024").onclick = function () {
      modal.remove();
    };

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.remove();
      }
    });

    show("lessons");
  }

  /*
   * الحل الجديد:
   * نراقب ظهور بطاقات المواد ونربط الضغط بها مباشرة.
   */
  function connectCards() {
    document.querySelectorAll(".subject-card").forEach(function (card) {

      if (card.dataset.mathConnected === "yes") return;

      const subject = findSubject(card);

      if (!subject) return;

      card.dataset.mathConnected = "yes";

      card.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        makeModal(subject);

      }, true);
    });
  }

  connectCards();

  const observer = new MutationObserver(function () {
    connectCards();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  const css = document.createElement("style");

  css.textContent = `
    #mathModal2024 {
      position:fixed;
      inset:0;
      z-index:999999;
      background:rgba(0,0,0,.88);
      backdrop-filter:blur(9px);
      display:flex;
      align-items:center;
      justify-content:center;
      padding:15px;
      box-sizing:border-box;
    }

    .math-modal-box {
      width:min(900px,100%);
      max-height:92vh;
      overflow-y:auto;
      background:#10151d;
      color:white;
      border-radius:25px;
      padding:24px;
      position:relative;
      border:1px solid rgba(255,255,255,.16);
      box-shadow:0 25px 100px rgba(0,0,0,.7);
    }

    .math-close {
      position:absolute;
      top:12px;
      left:12px;
      width:45px;
      height:45px;
      border:0;
      border-radius:50%;
      background:rgba(255,255,255,.1);
      color:white;
      font-size:30px;
      cursor:pointer;
    }

    .math-title {
      display:flex;
      gap:15px;
      align-items:center;
      padding:5px 55px 22px 5px;
    }

    .math-big-icon {
      font-size:45px;
    }

    .math-title h2 {
      margin:0 0 5px;
    }

    .math-title p {
      margin:0;
      opacity:.6;
    }

    .math-tabs {
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:8px;
      margin-bottom:18px;
    }

    .math-tabs button {
      border:1px solid rgba(255,255,255,.13);
      background:rgba(255,255,255,.05);
      color:white;
      padding:13px 6px;
      border-radius:13px;
      cursor:pointer;
      font-weight:bold;
    }

    .math-tabs button.selected {
      background:rgba(0,180,255,.2);
      border-color:rgba(0,210,255,.6);
    }

    .math-item {
      display:flex;
      align-items:center;
      gap:13px;
      padding:17px;
      margin:10px 0;
      border-radius:16px;
      border:1px solid rgba(255,255,255,.12);
      background:rgba(255,255,255,.045);
      color:white;
      text-decoration:none;
      transition:.2s;
    }

    .math-item:hover {
      transform:translateY(-2px);
      background:rgba(0,180,255,.12);
    }

    .math-item-icon {
      font-size:28px;
    }

    .math-item-text {
      flex:1;
    }

    .math-item-text strong {
      display:block;
      line-height:1.5;
    }

    .math-item-text small {
      display:block;
      opacity:.55;
      margin-top:4px;
    }

    .math-arrow {
      font-size:22px;
      opacity:.6;
    }

    .math-empty {
      text-align:center;
      padding:35px;
      border:1px dashed rgba(255,255,255,.2);
      border-radius:16px;
      color:#aaa;
    }

    @media(max-width:650px) {
      .math-tabs {
        grid-template-columns:repeat(2,1fr);
      }

      .math-modal-box {
        padding:17px;
      }
    }
  `;

  document.head.appendChild(css);

  console.log("✅ Math 2024 system loaded");

})();
