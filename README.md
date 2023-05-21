# ElixirZA homepage

[https://elixirza.org](https://elixirza.org)

This is a static webpage, hosted on [GitHub pages](https://pages.github.com).

Run this locally using Python's builtin HTTP server:

```
python -m http.server 9000
```

You should see the page at [http://localhost:9000](http://localhost:9000).

CSS is compiled using Tailwind CLI. See here for installation instructions.

```
npx tailwindcss -i ./input.css -o ./output.css --watch
```