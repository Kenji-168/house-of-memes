# The House of Memes

*From Viral Moments to Timeless Exhibits*

## 1. Project Overview

The House of Memes is a small website designed as a virtual museum for famous internet memes. It presents memes as exhibits, allowing visitors to explore their origins, meanings, and significance in internet culture.

The website aims to be both informative and entertaining. It should have the appearance of an art museum, while presenting its content in a humorous and nostalgic way.

The main target audience is younger internet users, but the website should also be understandable and enjoyable for visitors who are unfamiliar with meme culture.

## 2. Website Requirements

### Main Sections

The website should contain the following sections:

- **Home:** A welcome section introducing the museum, including its name, tagline, and a short introduction.
- **Meme Gallery:** The main collection, displaying famous memes as individual exhibit cards.
- **Meme Details:** Visitors can click an exhibit to see more information about that meme.
- **About:** A short explanation of the museum's purpose.

### Main Features

- Display approximately six famous internet memes from different periods.
- Before building the initial gallery, propose six suitable memes for approval. Choose recognizable memes from different eras that meet the content and image-use rules below.
- Each meme should appear as a card with its image, name, and year.
- Clicking an exhibit should reveal more information about the meme, including its background and meaning.
- Visitors should be able to return to the gallery easily.
- Keep navigation straightforward and consistent.

The initial website does not need features such as user accounts, databases, search, or favorites.

## 3. Design Guidelines

The website should resemble a traditional art museum, with internet memes presented as artworks.

### General Appearance

- Use a dark museum-style color palette: near-black (`#15151B`) for the main background and dark charcoal (`#24242E`) for cards and panels.
- Use warm cream (`#F3E8D5`) for text and light surfaces, with muted gold (`#C5A46D`) as the main accent and burgundy (`#6D293C`) for small decorative details.
- Keep text readable against the dark backgrounds; use light colors for headings, descriptions, and important labels.
- Use elegant fonts for headings and readable fonts for descriptions.
- Display meme images inside simple museum-style frames.
- Keep spacing, alignment, and typography consistent throughout the website.
- Avoid excessive animations or unnecessary decorative elements.

### Layout

- The homepage should start with a welcome section, followed by the gallery.
- Display meme exhibits in a responsive grid.
- Use the same card layout for every meme.
- Keep exhibit descriptions organized and easy to read.
- Make sure the layout works on both desktop and mobile screens.

## 4. Project Structure

### Technologies

Use the following technologies:

- **HTML:** Website structure and content.
- **CSS:** Website styling and responsive layout.
- **JavaScript:** Displaying meme data and handling user interactions.
- **GitHub Pages:** Hosting the completed website.

The website should work without requiring a backend or database. Avoid adding unnecessary frameworks or external dependencies.

### File Organization

Organize the project using this structure:

```text
house-of-memes/
|-- AGENTS.md
|-- README.md
|-- index.html
|-- css/
|   L-- style.css
|-- js/
|   |-- main.js
|   L-- memes.js
L-- assets/
    L-- images/
```
Follow this folder structure when creating the website. If a required file or folder does not exist, create it in the specified location.
Keep the different parts of the website in their respective files.

- `index.html` contains the main website structure.
- `css/style.css` contains the visual styling.
- `js/main.js` handles the gallery and interactions.
- `js/memes.js` stores the information for each meme.
- `assets/images/` stores the image files used by the exhibits.

Use simple and consistent filenames.

## 5. Content Guidelines

### Meme Information

Every meme should contain the following information:

- Name
- Year it became popular
- Category
- Image
- Short description
- Origin or background
- Meaning and common usage
- Cultural significance
- Sources and image credits

Store the meme information in `js/memes.js` using a consistent data format.

Each meme should have a unique ID so it can be identified when updating or displaying its information.

Use the following example as a guide for the data structure. The values are placeholders, not a real meme entry:

```js
const memes = [
  {
    id: "sample-meme",
    name: "Sample Meme",
    year: 2015,
    category: "Reaction",
    image: "assets/images/sample-meme.jpg",
    description: "A short introduction to the meme.",
    origin: "A brief, verified explanation of where it started.",
    meaning: "What the meme means and how people use it.",
    significance: "Why this meme became memorable.",
    sources: ["https://example.com/source-one", "https://example.com/source-two"],
    imageCredit: "Creator or source and relevant license information"
  }
];
```

Use the same property names for every entry. Do not add the sample entry to the published gallery. The actual image path must point to an image that is permitted for use.

### Writing Style

- Write in English.
- Keep descriptions short, clear, and easy to understand.
- Use a slightly humorous tone, similar to a museum curator explaining an exhibit.
- Make the content informative without adding unnecessary details.
- Use at least two trustworthy, independent sources to verify the historical information.
- If a meme's origin is uncertain, mention the uncertainty instead of inventing details.
- Use images that are permitted for reuse and provide appropriate credits. A source link alone does not mean an image can be reused.
- Keep the content suitable for general audiences. Avoid explicit, hateful, or insensitive material, especially memes mocking tragic events.

## 6. Instructions for AI

### Building the Website

When implementing the website:

1. Read and follow this `AGENTS.md` file before making changes.
2. Use the technologies and file structure described above.
3. Follow the specified design guidelines.
4. Create reusable layouts for meme cards and information displays.
5. Keep the code simple, readable, and organized.
6. Propose the initial six memes and obtain approval before adding their content.
7. Do not add extra features unless requested.

### Adding New Memes

When adding a new meme:

1. Check that the meme is appropriate for the museum and obtain approval before publishing it.
2. Research its origin and information using reliable sources.
3. Add its information to `js/memes.js`, following the existing data structure.
4. Give the meme a unique ID and provide a suitable image with attribution.
5. Make sure the new meme appears correctly in the gallery and uses the existing card design.
6. Check that its information can be opened and displayed correctly.

New memes should be added without needing to redesign the website or create additional HTML pages.

### Modifying Existing Content

When modifying an existing meme:

1. Locate the correct entry in `js/memes.js`.
2. Change only the information that needs updating.
3. Keep its existing ID unless changing it is specifically required.
4. Preserve the data structure and formatting used by the other exhibits.
5. Avoid modifying unrelated memes or website components.

### General Rules

- Reuse existing CSS classes and JavaScript functions whenever possible.
- Keep the website's design consistent.
- Avoid duplicating code unnecessarily.
- Do not remove existing content or functionality without being instructed to do so.
- If a requirement is unclear or cannot be completed, explain the issue rather than making unsupported assumptions.

## 7. Testing and Maintenance

Before considering the website or any update complete, check the following:

- The homepage loads properly.
- The navigation links work.
- All meme cards are displayed correctly.
- Clicking a meme displays the correct information.
- All images and source links work.
- The layout is usable on desktop and mobile.
- New meme entries follow the same structure as existing entries.
- Existing website functionality still works after changes.

When completing a task, briefly explain what was changed and mention any issues that could not be resolved or tested.
