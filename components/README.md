# components/ — custom logo and identity marks

`index.html` already has every **interface and social icon** it needs, either inlined
directly in the page (for the fastest possible load) or as editable source files in
`assets/icons/` (delivered earlier). So this folder is not for those.

What's left, and what actually belongs here, is a small set of **custom identity
marks** — the kind of one-off graphic that is specific to *you* rather than a generic
UI icon: your own logo, your favicon source, a signature for print documents, and the
institution/publisher logos an academic CV often shows next to each degree or paper.

Everything below is a clearly-labeled **dummy placeholder**. None of it is wired into
`index.html` yet — swap the file, keep the same name, and follow the one-line note under
each item if you want to hook it into the page.

## Files in this folder

| File | What it is | To replace it |
| --- | --- | --- |
| `logo-mark.svg` | A larger standalone copy of your monogram (the person + keyhole mark). Not used by `index.html` yet — it's here in case you want a personal logo for a CV header, letterhead, or a future page. | Design your own mark, or keep this one — it already matches the site's colors. |
| `favicon.svg` | A standalone copy of the icon currently inlined in `index.html`'s `<link rel="icon">` tag. The page does **not** read this file — it's provided so you have an editable source. | Edit the shape, then either keep using the inline version in `index.html` or point `<link rel="icon" href="components/favicon.svg">` at this file instead. |
| `signature.svg` | A squiggle placeholder standing in for a handwritten signature, sized for a cover letter or printed CV. | Scan your real signature on white paper, save as a transparent PNG or trace it as an SVG, and swap the file. |
| `institutions/brac-university.svg` | A generic placeholder mark (not BRAC University's real logo — just a plain building icon) for use next to your MSc/BSc entries in the CV. | Replace with BRAC University's official logo, respecting their brand guidelines. |
| `institutions/ieee-blockchain.svg` | A generic placeholder mark (not IEEE's real logo) for the IEEE Blockchain 2026 publication entry. | Replace with the conference or publisher's official logo/wordmark if your license to use it allows. |

## How to actually show one on the page (optional)

None of these are linked from `index.html` yet, so adding them is optional and manual.
For example, to show the BRAC University mark next to your MSc entry in the CV section,
add an `<img>` right before the degree title:

```html
<img src="components/institutions/brac-university.svg" alt="" width="40" height="40" class="rounded-lg">
<h4 class="font-display text-xl font-semibold leading-snug">MSc in Computer Science and Engineering</h4>
```

Do the same anywhere else you'd like a logo — next to the IEEE Blockchain publication,
for instance, or beside your BSc entry using the same BRAC University file.

## Adding a new mark later

Save any new logo here as a `.svg` (preferred, since it stays sharp at any size) or
`.png` with a transparent background, using a short lowercase file name. There is no
build step to run — just reference the new path directly from `index.html`.
