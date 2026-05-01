# dynaum.com

Personal site of Elber Ribeiro. Plain HTML, CSS, and a sprinkle of JS.
Deployed on GitHub Pages at [dynaum.com](https://dynaum.com).

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Files

- `index.html` — the page
- `styles.css` — all styling, light + dark theme tokens
- `script.js` — theme toggle, year stamp, scroll affordance
- `favicon.svg` — monogram
- `CNAME` — custom-domain hint for GitHub Pages

## DNS

Apex `dynaum.com` is managed via Terraform in
[`digitalocean-dns`](https://github.com/dynaum/digitalocean-dns) and points to
GitHub Pages' four anycast A records.
