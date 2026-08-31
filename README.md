# ElixirZA homepage

[https://elixirza.org](https://elixirza.org)

A static site built with [Hugo](https://gohugo.io) and [Tailwind CSS](https://tailwindcss.com), hosted on [GitHub Pages](https://pages.github.com).

## Prerequisites

- [Hugo](https://gohugo.io/installation/) (extended edition)
- [Node.js](https://nodejs.org/) (for Tailwind CSS)

## Local development

Install dependencies:

```
npm install
```

Start the Hugo dev server (rebuild CSS first, then serve with live reload):

```
npm run dev
```

The site will be available at [http://localhost:1313](http://localhost:1313).

To watch Tailwind CSS changes separately in another terminal:

```
npm run dev:css
```

## Building for production

```
npm run build
```

Output is written to `public/`.

## Deployment

The site is deployed automatically via GitHub Actions when changes are pushed to `main`. Ensure GitHub Pages is configured to use **GitHub Actions** as the source (Settings → Pages → Build and deployment → Source: GitHub Actions).

## Project structure

```
assets/css/     Tailwind input stylesheet
content/        Hugo content (homepage)
layouts/        Hugo templates and partials
static/         Static assets (images, fonts, favicons, CNAME)
hugo.toml       Hugo site configuration
```

## Adding a past event

Past events are currently defined in `layouts/partials/home-content.html`. Edit the `#past-events` section to add a new entry.
