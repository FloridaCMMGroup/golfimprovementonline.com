# golfimprovementonline.com

Instant Golf Improvement landing page: how online golf lessons work and how to record a swing a coach can use. A static one-page site served by a Cloudflare Worker, with no form and no server code. Every button goes to the IGI site.

## What's in this folder

| File | What it does |
| --- | --- |
| `index.html` | The page, including the built-in two-camera diagram and search markup (Organization, HowTo, FAQ) |
| `styles.css` | IGI brand styling (same base as golfimprovement.com) |
| `app.js` | Hides the optional book image if it hasn't been added |
| `_headers`, `robots.txt`, `sitemap.xml`, `favicon.svg` | Security headers, search files, placeholder icon |
| `wrangler.jsonc` | Cloudflare Worker settings: account and custom domains |
| `worker.js` | Sends www to the bare domain; serves everything else from the folder |
| `.assetsignore` | Files in the repo that are never served to visitors |
| `images/` | See `images/README.txt`. hero.jpg is required |
| `redirects.csv` | www to the bare domain |

## Deploy

The site is a Cloudflare Worker named `golfimprovementonline-com`, set up like the other John Hughes Golf and IGI sites. No environment variables.

1. First deploy: `npx wrangler deploy` from this folder. The custom domains in `wrangler.jsonc` are attached and their DNS records are created automatically. The domain must be active on Cloudflare in the same account (nameservers switched at GoDaddy).
2. Automatic deploys: Cloudflare dashboard > Workers & Pages > `golfimprovementonline-com` > Settings > Builds > Connect, pick the repository and branch `main`. Leave the build command empty; the deploy command is `npx wrangler deploy`.
3. Turn on Cloudflare Web Analytics for the Worker.

## Links

| Button | Goes to |
| --- | --- |
| Get my free swing analysis | https://instantgolfimprovement.com/free-swing-analysis/ |
| Explore the video courses | https://instantgolfimprovement.com/video-courses/ |
| The book | https://instantgolfimprovement.com/products/the-6-pillars-to-golf-success/ |

## Google Tag Manager

Container `GTM-PV99CDBW` is loaded in the `<head>` of every page. The setup code is in `analytics.js` because the content security policy in `_headers` does not allow inline scripts; `_headers` also allows the Google Tag Manager and Google Analytics domains. If the container adds tags from other services (for example a Meta pixel), add their domains to `_headers` too. Keep these when applying a new client zip.
