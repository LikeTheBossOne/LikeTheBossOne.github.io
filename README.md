# Brendan Boss: portfolio

A buildless portfolio for GitHub Pages, using semantic HTML, shared CSS, and a small amount of vanilla JavaScript. No package installation or build step is required.

## Local preview

From the repository root:

```sh
python -m http.server 49989 --bind 127.0.0.1
```

Open `http://127.0.0.1:49989`. Changes appear after refreshing the browser. Stop the server with Ctrl+C. If an old app appears from a cached service worker, choose a fresh port.

## Where to edit

- `index.html`: introduction, Warzone contributions and credits, GenAI Dungeon Crawler, selected projects, archived experiments, and contact details.
- `projects/`: standalone writeups for BossCraft, Mystic Engine, and Scrapyard Scavenger.
- `css/styles.css`: shared styles and responsive layouts.
- `js/scripts.js`: responsive navigation, email copying, and the footer year. Project content, contact links, and native expandable sections remain usable without JavaScript.
- `assets/img/portfolio/`: original project screenshots. Older assets are retained for future reuse.

The site deliberately keeps Advent of the Mystics, Procedural Generation, and ECS Library in a collapsed archive instead of the main project grid. BossCraft's repository is private, so its writeup links only to the public code examples.

## GenAI Dungeon Crawler content

The feature uses technical labels as the main headings, without separate eyebrow text or numbering. Its seven sections are: personality and relationships, reactive quests, achievements and personalized loot, the event-to-action architecture, AI inspection tools, custom asset generation, and planned additions. NPC agendas, negotiation, and enemy-level controls remain explicitly future work. The Scraptooth Goblin asset demonstration sits immediately before planned additions. Describe the project itself rather than presenting a changelog.

Claims follow the mod's implementation and detailed documentation at commit `26863d1`, reviewed October 20, 2026. Some older README/issue text is stale: reactive quest generation and personalized rewards are implemented. Generated quests currently select one supported objective; they do not invent executable mechanics. The Fare Auditor image is an authored boss objective with AI presentation, not evidence of a generated objective. The repository is private, so the public portfolio does not link its sources.

The introduction keeps its original gameplay image. Feature images preserve their full aspect ratios, link to full-size captures, and include descriptive alt text, intrinsic dimensions, and lazy loading. Text and images stack below 800px. The architecture sequence becomes a vertical list on narrow screens, and the three future directions become one column.

New AI examples come from a dedicated scripted capture in the mod worktree, using real provider output and production validation. Keep image captions to short labels and record detailed generation/setup provenance in `assets/img/portfolio/ai-minecraft/CAPTURES.md`. Scripted or forced recognition demonstrates output and delivery, not natural award frequency, balance, or long-term relationship evolution. Do not substitute authored fixture text for real AI output.

## Review checklist

- Preview the home page and each project page at desktop and narrow mobile widths.
- Check navigation, keyboard focus, Escape-to-close, and the expandable archive.
- Check that Get in touch reaches the contact section from every page. The email link opens the visitor's configured email app; Copy email offers an alternative and selects the address for manual copying if clipboard access is unavailable.
- Check for horizontal scrolling, missing images, missing internal links, and browser errors.
- Keep public claims scoped to confirmed contributions; do not add confidential implementation details.

GitHub Pages serves these files directly. There is no automatic publishing command in this repository; review changes before pushing to the branch configured for Pages.
