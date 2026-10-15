# Brendan Boss: portfolio

A buildless portfolio for GitHub Pages, using semantic HTML, shared CSS, and a small amount of vanilla JavaScript. No package installation or build step is required.

## Local preview

From the repository root:

```sh
python -m http.server 49989 --bind 127.0.0.1
```

Open `http://127.0.0.1:49989`. Changes appear after refreshing the browser. Stop the server with Ctrl+C. If an old app appears from a cached service worker, choose a fresh port.

## Where to edit

- `index.html`: introduction, Warzone contributions and credits, GenAI Minecraft RPG, selected projects, archived experiments, and contact details.
- `projects/`: standalone writeups for BossCraft, Mystic Engine, and Scrapyard Scavenger.
- `css/styles.css`: shared styles and responsive layouts.
- `js/scripts.js`: responsive navigation, email copying, and the footer year. Project content, contact links, and native expandable sections remain usable without JavaScript.
- `assets/img/portfolio/`: original project screenshots. Older assets are retained for future reuse.

The site deliberately keeps Advent of the Mystics, Procedural Generation, and ECS Library in a collapsed archive instead of the main project grid. BossCraft's repository is private, so its writeup links only to the public code examples.

## GenAI Minecraft RPG content

The copy distinguishes the existing RPG foundation from the planned AI director, interpreted mechanics, and playable quests. It is based on the mod's README, architecture notes, and roadmap as reviewed on October 15, 2026. Keep that distinction updated as features become playable. The repository is private, so there is no public source link.

The captured gameplay screenshot at `assets/img/portfolio/ai-minecraft/gameplay.png` appears in the home page's featured project and in a figure inside `#ai-minecraft`'s `.ai-overview`. The project section places the introduction on the left and the screenshot on the right, capped at 560px wide, with the planned AI features below. The introduction and image stack on screens up to 800px wide. Both image placements show the full screenshot at its original aspect ratio. Additional screenshots should use descriptive alt text, intrinsic `width` and `height`, and `loading="lazy"` outside the hero. Use actual captured gameplay and identify any concept imagery explicitly.

## Review checklist

- Preview the home page and each project page at desktop and narrow mobile widths.
- Check navigation, keyboard focus, Escape-to-close, and the expandable archive.
- Check that Get in touch reaches the contact section from every page. The email link opens the visitor's configured email app; Copy email offers an alternative and selects the address for manual copying if clipboard access is unavailable.
- Check for horizontal scrolling, missing images, missing internal links, and browser errors.
- Keep public claims scoped to confirmed contributions; do not add confidential implementation details.

GitHub Pages serves these files directly. There is no automatic publishing command in this repository; review changes before pushing to the branch configured for Pages.
