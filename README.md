# guild-landing-page
A landing page for a WoW guild

## General flow with Eleventy

`_site/` is the generated output from Eleventy. This is checked in so that GH Pages can serve it.

`index.html` just calls out to `_includes/index.liquid` that also calls out to various Markdown templates for the individual pieces.

There's a plugin required to import Markdown into the liquid template, this is npm installed and enabled via `.eleventy.js`

## TODOS
- add badge for WoW Progress ranking to wobsite
- add weekly calendar view on wobsite
