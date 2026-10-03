document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/materials/organized.json");
    const data = await response.json();

    document.querySelectorAll(".field-card").forEach(card => {
      const title = card.querySelector("h3");
      if (!title) return;

      const fieldName = title.textContent.trim();
      const field = data[fieldName];
      if (!field) return;

      let container = card.querySelector(".subjects-materials");

      if (!container) {
        container = document.createElement("div");
        container.className = "subjects-materials";
        card.appendChild(container);
      }

      container.innerHTML = "";

      Object.entries(field).forEach(([year, subjects]) => {
        const yearBox = document.createElement("div");
        yearBox.className = "material-year";

        const yearTitle = document.createElement("h4");
        yearTitle.textContent = year;
        yearBox.appendChild(yearTitle);

        Object.entries(subjects).forEach(([subject, links]) => {
          const subjectBox = document.createElement("div");
          subjectBox.className = "subject-box";

          subjectBox.innerHTML = `
            <strong>${subject}</strong>

            <div class="material-actions">
              <a href="#" class="material-btn">📚 دروس</a>
              <a href="#" class="material-btn">📄 ملخصات PDF</a>
              <a href="#" class="material-btn">✏️ تمارين PDF</a>
              <a href="#" class="material-btn">▶️ فيديوهات YouTube</a>
            </div>
          `;

          yearBox.appendChild(subjectBox);
        });

        container.appendChild(yearBox);
      });
    });

  } catch (error) {
    console.error("خطأ في تحميل المواد:", error);
  }
});
