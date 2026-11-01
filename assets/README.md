# assets/ — photos, icons and other static files

This folder holds everything `index.html` loads as a file rather than writes as code:
your photos and the individual icon SVGs.

## What is here right now

| Path | What it is |
| --- | --- |
| `icons/ui/` | 22 interface icons (outline style), one `.svg` file each. See `icons/README.md`. |
| `icons/social/` | 6 brand icons (GitHub, LinkedIn, Google Scholar, ORCID, X, Facebook). See `icons/README.md`. |
| `images/` | Guidance only for now — see `images/README.md` for the exact photo file names `index.html` is already looking for. |

## The short version

- **Icons already work.** `index.html` has them inlined for speed, so nothing below is required for the page to render correctly. The files here are editable source copies — see `icons/README.md` if you want to change or add one.
- **Photos do not exist yet.** `index.html` references `assets/profile.jpg` and four `assets/case-*.jpg` figures directly (not inside `images/`). Until you add a file with that exact name, a designed placeholder is shown automatically. See `images/README.md` for the full list, sizes, and where each one appears.

## Folder map

```
assets/
├── icons/
│   ├── README.md
│   ├── ui/            22 interface icons (mail.svg, download.svg, sun.svg, ...)
│   └── social/         6 brand icons (github.svg, linkedin.svg, ...)
└── images/
    └── README.md       exact photo file names, sizes, and where each is used
```
