# LH — Academic Portfolio & Editorial Services

Personal academic portfolio website, offering professional scientific editing, proofreading, book formatting, typesetting, and index creation for academic publications in English and German.

---

## Features

- **Multi-language Support:** Client-side English and German toggle (`js/lang.js`) with instant DOM swapping, persistent language preference, and no translation flicker.
- **Pure Vanilla Web Tech:** Built with semantic HTML5, modern vanilla CSS, and vanilla JavaScript — zero runtime dependencies, no jQuery, no frameworks.
- **Responsive & Accessible:** Fluid layout across mobile, tablet, and desktop screens with accessible navigation.
- **SEO & Structured Data:** Open Graph tags, Twitter Card metadata, and Schema.org `ProfessionalService` JSON-LD for search engine indexing.

---

## Project Structure

```text
├── index.html              # Main landing page (Services, Projects, Experience, Education, Contact)
├── about.html              # About Me page (Background, Qualifications, Publications)
├── impressum.html          # Legal notice & mandatory disclosures (Austrian ECG / Mediengesetz)
├── css/
│   └── styles.css          # Core stylesheet
├── js/
│   ├── lang.js             # Language toggle & dictionary translations (EN / DE)
│   └── scripts.js          # Navigation, back-to-top, and mobile menu handlers
├── images/
│   ├── at.svg              # Austrian flag icon
│   ├── gb.svg              # United Kingdom flag icon
│   └── lead-bg.jpg         # Hero background image
├── favicon.svg             # SVG favicon (LH monogram)
├── logo.svg                # Vector logo (LH monogram)
└── LICENSE.md              # MIT license
```

---

## Local Development

Static website with no build step required. Open `index.html` in a web browser or serve locally:

```bash
# Python
python -m http.server 8000

# Node (via npx)
npx serve .
```

---

## Credits & Attributions

- **Base Template:** Adapted from [Dev Portfolio Template](https://github.com/RyanFitzgerald/devportfolio) by [Ryan Fitzgerald](https://github.com/RyanFitzgerald), released under the [MIT License](LICENSE.md). Converted to vanilla JavaScript and customized.
- **Flag Icons:**
  - `images/gb.svg`: From [flag-icons](https://github.com/lipis/flag-icons) by [Panayiotis Lipiridis](https://github.com/lipis), licensed under the [MIT License](https://github.com/lipis/flag-icons/blob/main/LICENSE).
  - `images/at.svg`: Vector reproduction of the national flag of Austria (Public Domain / Austrian UrhG § 7).
- **Logo & Favicon:** Custom LH monogram design.

---

## License

This project is licensed under the MIT License — see [LICENSE.md](LICENSE.md) for details.
