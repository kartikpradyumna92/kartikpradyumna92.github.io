# kartikpradyumna92.github.io

Personal portfolio of Karteek Pradyumna Bulusu, Data Scientist
(experimentation, causal inference, product analytics, data modeling).

Live at **https://kartikpradyumna92.github.io**.

A plain Jekyll site built by GitHub Pages on every push to `main`. It needs no
build tooling and no JavaScript framework. There is one stylesheet and one
small progressive-enhancement script.

## Where things live

| To change… | Edit |
|---|---|
| Name, links, email, hero results | `_data/profile.yml` |
| Work history | `_data/experience.yml` |
| Degrees | `_data/education.yml` |
| "How I work" lifecycle | `_data/approach.yml` |
| Methods ledger and stack | `_data/toolkit.yml` |
| Nav items | `_data/nav.yml` |
| Case studies (one page each) | `_projects/<slug>.md`, with front matter for the summary card and Markdown for the page |
| Smaller projects (no page) | `_data/more_projects.yml` |
| Result charts on featured projects | `_includes/figures/*.html`, named by a project's `figure:` field |
| Resume PDF | `assets/resume/Karteek-Pradyumna-Bulusu-Resume.pdf` (keep the filename) |
| Styles / design tokens | `assets/css/main.css` (tokens at the top) |

### Adding a project

1. Create `_projects/my-project.md` with the same front matter keys as an
   existing one (`title`, `short_title`, `summary`, `problem`, `approach`,
   `result`, `metrics`, `methods`, `stack`, `links`, `order`, `featured`).
2. Put figures in `assets/img/projects/my-project/` as WebP, and embed them
   with `{% include figure.html src=… w=… h=… alt=… caption=… %}`.
3. `featured: true` puts it in the featured list. A featured project also
   needs a `figure:` include in `_includes/figures/`.

## Run locally

```bash
gem install jekyll -v 3.10.0 jekyll-sitemap   # GitHub Pages' Jekyll version
jekyll serve                                  # http://127.0.0.1:4000
```

## Notes

- Every claim on the site is sourced from the resume or the linked repositories.
  Keep it that way when editing.
- Fonts (Bricolage Grotesque, IBM Plex Sans, IBM Plex Mono) are self-hosted Latin subsets in
  `assets/fonts/`.
- `favicon.ico`, `assets/img/apple-touch-icon.png` and `assets/img/og-image.png`
  were rendered from `assets/img/favicon.svg` and the hero copy. Regenerate
  them if the headline changes.
