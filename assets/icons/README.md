# assets/icons/ — standalone copies of every icon used on the site

For performance, `index.html` already contains all of its icons inline, as one `<svg>`
"sprite" of `<symbol>` elements near the top of `<body>`. That means the page needs zero
extra network requests for icons and works exactly as downloaded — **you do not need to
link anything from this folder for the site to work.**

This folder exists so you have each icon as its own clean, editable `.svg` file: useful if
you want to reuse one elsewhere (a print CV, a slide deck, a different page), swap an icon's
artwork while keeping its meaning, or hand one to a designer. Every file here is the exact
source that was inlined into `index.html`, so the two stay in sync as long as you keep the
paths identical if you edit one.

## icons/ui/ — interface icons (22 files)

Outline style: `fill="none" stroke="currentColor"`. In the page these are drawn at
`width="18"` or `width="22"` with the `.i` class from `style.css`, which sets the stroke
width and line caps. Used for: mail, map-pin, download, sun/moon (theme toggle), copy
(BibTeX button), and one icon per research-interest and case-study card (eye, pointer,
users, user, chart, fingerprint, vr, flask, pen, award, shield, gauge, chat, cap, star,
trophy).

## icons/social/ — brand icons (6 files)

Solid style: `fill="currentColor"`. Used for the social links in the left column and
footer: `github`, `linkedin`, `google-scholar`, `orcid`, `x`, `facebook`.

## Using one of these files directly

```html
<img src="assets/icons/social/github.svg" width="20" height="20" alt="">
```

or inline it (so it can be colored with CSS `color`, the way the site itself does it):

```html
<svg class="i" width="20" height="20" aria-hidden="true">
  <use href="assets/icons/social/github.svg#_"/>
</svg>
```

(For the `<use>` trick to work across files, most browsers need the SVG served over
`http(s)://`, which GitHub Pages provides — it will not work when just double-clicking
`index.html` from disk.)

## Adding a new icon later

1. Find or draw a 24×24 outline or solid SVG.
2. Save it here, in `ui/` (outline) or `social/` (brand/solid), using a short lowercase
   name like `calendar.svg`.
3. Open `index.html`, find the `<svg width="0" height="0" ...>` sprite near the top of
   `<body>`, and add a matching line:
   `<symbol id="i-calendar" viewBox="0 0 24 24">...paste the inner shape here...</symbol>`
4. Use it anywhere on the page with `<svg class="i" width="20" height="20"><use href="#i-calendar"/></svg>`.
