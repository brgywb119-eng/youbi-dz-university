(function () {
  "use strict";

  const ST = {

    "الرياضيات": {
      lessons: [
        ["📖 Mathématiques — L1 ST 2023/2024",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Math%C3%A9matiques"]
      ],
      summaries: [
        ["📝 Mathématiques — 2023/2024",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Math%C3%A9matiques"]
      ],
      exercises: [
        ["🧩 تمارين الرياضيات — L1 ST",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Math%C3%A9matiques"]
      ],
      videos: [
        ["▶️ Mathématiques L1 ST",
         "https://www.youtube.com/results?search_query=Mathématiques+L1+ST+Algérie"]
      ]
    },

    "الفيزياء": {
      lessons: [
        ["📖 Physique 1 — L1",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Physique+1"]
      ],
      summaries: [
        ["📝 ملخص Physique 1",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Physique+1"]
      ],
      exercises: [
        ["🧩 تمارين Physique 1",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Physique+1"]
      ],
      videos: [
        ["▶️ Physique 1 — L1 ST",
         "https://www.youtube.com/results?search_query=Physique+1+L1+ST+Algérie"]
      ]
    },

    "الكيمياء": {
      lessons: [
        ["📖 Chimie générale — 2023/2024",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Chimie+Générale"]
      ],
      summaries: [
        ["📝 ملخص الكيمياء العامة",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Chimie+Générale"]
      ],
      exercises: [
        ["🧩 تمارين الكيمياء",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Chimie+Générale"]
      ],
      videos: [
        ["▶️ Chimie générale L1",
         "https://www.youtube.com/results?search_query=Chimie+générale+L1+ST+Algérie"]
      ]
    },

    "بنية المادة": {
      lessons: [
        ["📖 Structure de la matière — L1 ST 2023/2024",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Structure+de+la+matière"]
      ],
      summaries: [
        ["📝 ملخص Structure de la matière",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Structure+de+la+matière"]
      ],
      exercises: [
        ["🧩 تمارين Structure de la matière",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Structure+de+la+matière"]
      ],
      videos: [
        ["▶️ Structure de la matière",
         "https://www.youtube.com/results?search_query=Structure+de+la+matière+L1+ST+Algérie"]
      ]
    },

    "الإعلام الآلي": {
      lessons: [
        ["📖 Informatique — L1 ST",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Informatique+L1+ST"]
      ],
      summaries: [
        ["📝 ملخص الإعلام الآلي",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Informatique+L1+ST"]
      ],
      exercises: [
        ["🧩 تمارين الإعلام الآلي",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Informatique+L1+ST"]
      ],
      videos: [
        ["▶️ Informatique L1 ST",
         "https://www.youtube.com/results?search_query=Informatique+L1+ST+Algérie"]
      ]
    },

    "الرسم التقني": {
      lessons: [
        ["📖 Dessin technique — L1 ST",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Dessin+technique"]
      ],
      summaries: [
        ["📝 ملخص الرسم التقني",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Dessin+technique"]
      ],
      exercises: [
        ["🧩 تمارين الرسم التقني",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=Dessin+technique"]
      ],
      videos: [
        ["▶️ Dessin technique L1",
         "https://www.youtube.com/results?search_query=Dessin+technique+L1+ST+Algérie"]
      ]
    },

    "اللغة الإنجليزية": {
      lessons: [
        ["📖 English — L1 ST",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=English+L1"]
      ],
      summaries: [
        ["📝 English — L1",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=English+L1"]
      ],
      exercises: [
        ["🧩 English Exercises — L1",
         "https://elearn.univ-tlemcen.dz/course/search.php?perpage=all&search=English+L1"]
      ],
      videos: [
        ["▶️ English L1 ST",
         "https://www.youtube.com/results?search_query=English+L1+ST+Algérie"]
      ]
    }
  };

  function clean(s) {
    return String(s || "")
      .replace(/\s+/g, " ")
      .replace(/[📖📝🧩▶️]/g, "")
      .trim();
  }

  function getSubject(card) {
    const text = clean(card.innerText);

    for (const name of Object.keys(ST)) {
      if (text.includes(name)) return name;
    }

    return null;
  }

  function openST(subject) {

    const old = document.getElementById("st2024Modal");
    if (old) old.remove();

    const data = ST[subject];

    const modal = document.createElement("div");
    modal.id = "st2024Modal";

    modal.innerHTML = `
      <div class="st2024-box">

        <button class="st2024-close">×</button>

        <div class="st2024-title">
          <div>⚙️</div>
          <section>
            <h2>${subject}</h2>
            <p>علوم وتكنولوجيا — السنة الأولى — 2023/2024</p>
          </section>
        </div>

        <div class="st2024-tabs">
          <button data-tab="lessons">📖 الدروس</button>
          <button data-tab="summaries">📝 الملخصات</button>
          <button data-tab="exercises">🧩 التمارين</button>
          <button data-tab="videos">▶️ الفيديوهات</button>
        </div>

        <div class="st2024-content"></div>

      </div>
    `;

    document.body.appendChild(modal);

    const content = modal.querySelector(".st2024-content");
    const tabs = modal.querySelectorAll("[data-tab]");

    function show(tab) {

      tabs.forEach(function (b) {
        b.classList.toggle(
          "active",
          b.dataset.tab === tab
        );
      });

      const list = data[tab] || [];

      if (!list.length) {
        content.innerHTML = `
          <div class="st-empty">
            لا توجد ملفات مضافة حاليا.
          </div>
        `;
        return;
      }

      content.innerHTML = list.map(function (item) {

        const video = tab === "videos";

        return `
          <a
            class="st-resource"
            href="${item[1]}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="st-resource-icon">
              ${video ? "▶️" : "📄"}
            </span>

            <span class="st-resource-text">
              <strong>${item[0]}</strong>
              <small>
                ${video ? "فتح الفيديوهات" : "فتح موارد المادة"}
              </small>
            </span>

            <span>↗</span>
          </a>
        `;

      }).join("");
    }

    tabs.forEach(function (button) {
      button.addEventListener("click", function () {
        show(button.dataset.tab);
      });
    });

    modal.querySelector(".st2024-close").onclick =
      function () {
        modal.remove();
      };

    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.remove();
    });

    show("lessons");
  }

  function connectCards() {

    document.querySelectorAll(".subject-card").forEach(function (card) {

      if (card.dataset.stConnected === "yes") return;

      const panel = card.closest(".subjects-panel");

      if (!panel) return;

      const panelText = panel.innerText || "";

      if (!panelText.includes("علوم وتكنولوجيا")) return;

      const subject = getSubject(card);

      if (!subject) return;

      card.dataset.stConnected = "yes";

      card.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        openST(subject);

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

  const style = document.createElement("style");

  style.textContent = `
    #st2024Modal {
      position:fixed;
      inset:0;
      z-index:1000000;
      background:rgba(0,0,0,.88);
      backdrop-filter:blur(8px);
      display:flex;
      justify-content:center;
      align-items:center;
      padding:15px;
    }

    .st2024-box {
      width:min(900px,100%);
      max-height:92vh;
      overflow:auto;
      background:#10151d;
      color:white;
      border:1px solid rgba(255,255,255,.15);
      border-radius:25px;
      padding:22px;
      position:relative;
      box-shadow:0 25px 100px rgba(0,0,0,.7);
    }

    .st2024-close {
      position:absolute;
      top:12px;
      left:12px;
      width:44px;
      height:44px;
      border:0;
      border-radius:50%;
      background:rgba(255,255,255,.1);
      color:white;
      font-size:30px;
      cursor:pointer;
    }

    .st2024-title {
      display:flex;
      align-items:center;
      gap:15px;
      padding:5px 55px 22px 5px;
    }

    .st2024-title > div {
      font-size:45px;
    }

    .st2024-title h2 {
      margin:0 0 5px;
    }

    .st2024-title p {
      margin:0;
      opacity:.6;
    }

    .st2024-tabs {
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:8px;
      margin-bottom:18px;
    }

    .st2024-tabs button {
      padding:13px 7px;
      border-radius:13px;
      border:1px solid rgba(255,255,255,.13);
      background:rgba(255,255,255,.05);
      color:white;
      cursor:pointer;
      font-weight:bold;
    }

    .st2024-tabs button.active {
      background:rgba(0,180,255,.2);
      border-color:rgba(0,210,255,.6);
    }

    .st-resource {
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

    .st-resource:hover {
      transform:translateY(-2px);
      background:rgba(0,180,255,.12);
    }

    .st-resource-icon {
      font-size:28px;
    }

    .st-resource-text {
      flex:1;
    }

    .st-resource-text strong {
      display:block;
      line-height:1.5;
    }

    .st-resource-text small {
      display:block;
      opacity:.55;
      margin-top:4px;
    }

    .st-empty {
      text-align:center;
      padding:35px;
      border:1px dashed rgba(255,255,255,.2);
      border-radius:16px;
      color:#aaa;
    }

    @media(max-width:650px) {
      .st2024-tabs {
        grid-template-columns:repeat(2,1fr);
      }
    }
  `;

  document.head.appendChild(style);

  console.log("✅ علوم وتكنولوجيا 2023/2024 loaded");

})();
