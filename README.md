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
data/           Structured site data (events)
layouts/        Hugo templates and partials
static/         Static assets (images, fonts, favicons, CNAME)
hugo.toml       Hugo site configuration
```

## Adding a past event

Add an entry at the top of `past` in `data/events.yaml`:

```yaml
past:
  - title: "March Erlang & Elixir Meetup • Talk Title"
    date: "Tuesday, March 3, 2026 19:00 (GMT+2)"
    url: "https://www.meetup.com/elixirza/events/..."
    image: "/images/speakers/thumbs/speaker-name.png"  # optional
    youtube: "https://youtu.be/..."                    # optional "Watch on YouTube" link
    description: >-
      Short summary with optional <a href="..." target="_blank" class="text-violet-600 hover:text-violet-700 cursor:pointer">HTML links</a>.
    links:                                             # optional
      - type: x        # x | github | linkedin
        url: "https://x.com/..."
      - type: github
        url: "https://github.com/..."
```

For upcoming events, add entries under `upcoming` in the same file (same shape). Leave `upcoming: []` to show the default “nothing scheduled” message.

Speaker thumbnails go in `static/images/speakers/thumbs/`.
