const gallery = document.getElementById("meme-gallery");
const detailSection = document.getElementById("detail");
const detailContainer = document.getElementById("meme-detail");
const backButton = document.getElementById("back-to-gallery");

const scrollToSection = (section) => {
  const header = document.querySelector(".site-header");
  const top = section.getBoundingClientRect().top + window.scrollY - header.offsetHeight;
  window.scrollTo({ top, behavior: "smooth" });
};

const renderGallery = () => {
  gallery.innerHTML = memes
    .map(
      (meme) => `
        <article class="meme-card" data-id="${meme.id}" tabindex="0" aria-label="View details for ${meme.name}">
          <img src="${meme.image}" alt="${meme.imageAlt}" />
          <div class="meme-card-body">
            <div class="meme-meta">
              <span>${meme.category}</span>
              <span>${meme.year}</span>
            </div>
            <h3>${meme.name}</h3>
            <p>${meme.description}</p>
          </div>
        </article>
      `
    )
    .join("");

  gallery.querySelectorAll(".meme-card").forEach((card) => {
    card.addEventListener("click", () => {
      showMeme(card.dataset.id);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showMeme(card.dataset.id);
      }
    });
  });
};

const showMeme = (id) => {
  const meme = memes.find((entry) => entry.id === id);

  if (!meme) {
    return;
  }

  detailContainer.innerHTML = `
    <div class="meme-detail">
      <div class="detail-image-wrap">
        <img src="${meme.image}" alt="${meme.imageAlt}" />
      </div>
      <div class="meme-detail-content">
        <p class="eyebrow">Exhibit</p>
        <h2>${meme.name}</h2>
        <div class="detail-year">${meme.category} • ${meme.year}</div>
        <p>${meme.description}</p>

        <h3>Origin</h3>
        <p>${meme.origin}</p>

        <h3>Meaning & usage</h3>
        <p>${meme.meaning}</p>

        <h3>Cultural significance</h3>
        <p>${meme.significance}</p>

        <h3>Sources</h3>
        <ul>
          ${meme.sources
            .map((source) => `<li><a href="${source}" target="_blank" rel="noreferrer">${source}</a></li>`)
            .join("")}
        </ul>

        <h3>Image credit</h3>
        <p>${meme.imageCredit}</p>
      </div>
    </div>
  `;

  detailSection.classList.add("visible");
  scrollToSection(detailSection);
};

backButton.addEventListener("click", () => {
  detailSection.classList.remove("visible");
  scrollToSection(document.getElementById("gallery"));
});

renderGallery();
