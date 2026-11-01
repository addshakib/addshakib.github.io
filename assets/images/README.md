# assets/images/ — where your photos go

`index.html` already looks for these exact files directly inside the `assets/` folder
(not inside this `images/` folder — see the note below). Until a file exists, `index.html`
shows a designed placeholder automatically, so the site works fine without any of these.

| File name | Recommended size | Used for |
| --- | --- | --- |
| `assets/case-nft-authentication.jpg` | 1600 x 900 px | figure for the "NFT-based authentication for federated metaverses" case study |
| `assets/case-policy-violations.jpg` | 1600 x 900 px | figure for the "Security policy violations in organizational workflows" case study |
| `assets/case-tea-garden.jpg` | 1600 x 900 px | figure for the "Privacy and security of tea garden workers" case study |
| `assets/case-vr-usability.jpg` | 1600 x 900 px | figure for the "Usability study of the mechanism in VR" case study |
| `assets/og-image.jpg` | 1200 x 630 px | the picture shown when your site link is shared on LinkedIn, WhatsApp, or email (referenced in the <meta property="og:image"> tag, not shown on the page itself) |
| `assets/profile.jpg` | 800 x 1000 px | portrait photo, shown in the circular frame at the top of the left column |

**Important:** these files belong directly in `assets/`, for example `assets/profile.jpg`,
not `assets/images/profile.jpg`. This `images/` folder is only here so your ZIP download has
a clearly labeled place to drop new photos before you move them up one level into `assets/`.
Keep the file names exactly as shown (all lowercase, hyphens, `.jpg`) or edit the matching
`src="assets/...jpg"` line (or the `og:image` meta tag, for `og-image.jpg`) in `index.html`
to match whatever name you use instead.

Photos not referenced anywhere yet, such as extra pictures for future case studies, can also
go directly in `assets/` — just point a new `<img src="assets/your-file.jpg">` at them.
