// All project content and native disclosures remain available without JavaScript.
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (toggle && nav) {
    document.documentElement.classList.add('js-enabled');
    toggle.hidden = false;
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        // Don't leave keyboard focus inside a menu that is about to be hidden.
        if (getComputedStyle(toggle).display !== 'none') toggle.focus();
        closeMenu();
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 801px)').addEventListener('change', closeMenu);
  }
  const showcase = document.querySelector('.ai-feature');
  if (showcase) {
    const panels = [...showcase.querySelectorAll('.ai-panel')];
    const selector = showcase.querySelector('.ai-selector');
    const tablist = selector.querySelector('[role="tablist"]');
    let selected = 0;
    const tabs = panels.map((panel, index) => {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.id = `ai-tab-${index}`;
      tab.textContent = panel.dataset.label;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', panel.id);
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', tab.id);
      panel.tabIndex = 0;
      tablist.append(tab);
      return tab;
    });
    const select = (index, focus = false) => {
      selected = (index + panels.length) % panels.length;
      panels.forEach((panel, i) => {
        const active = i === selected;
        panel.classList.toggle('is-inactive', !active);
        panel.inert = !active;
        panel.setAttribute('aria-hidden', String(!active));
        tabs[i].setAttribute('aria-selected', String(active));
        tabs[i].tabIndex = active ? 0 : -1;
        if (!active) panel.querySelectorAll('video').forEach(video => video.pause());
      });
      // Scroll only the selector, never the document, when revealing a tab.
      const tab = tabs[selected];
      const left = tab.offsetLeft - tablist.offsetLeft;
      if (left < tablist.scrollLeft) tablist.scrollLeft = left;
      else if (left + tab.offsetWidth > tablist.scrollLeft + tablist.clientWidth) {
        tablist.scrollLeft = left + tab.offsetWidth - tablist.clientWidth;
      }
      if (focus) tab.focus({ preventScroll: true });
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => select(index));
      tab.addEventListener('keydown', event => {
        const destinations = { ArrowRight: selected + 1, ArrowLeft: selected - 1, Home: 0, End: panels.length - 1 };
        if (event.key in destinations) {
          event.preventDefault();
          select(destinations[event.key], true);
        }
      });
    });
    showcase.querySelectorAll('[data-ai-step]').forEach(button => {
      button.addEventListener('click', () => select(selected + Number(button.dataset.aiStep)));
    });
    showcase.classList.add('has-selector');
    selector.hidden = false;
    select(0);
  }
  const copyButton = document.querySelector('.copy-email');
  const email = document.querySelector('#contact-email');
  const copyStatus = document.querySelector('.copy-status');
  if (copyButton && email && copyStatus) {
    copyButton.hidden = false;
    copyButton.addEventListener('click', async () => {
      copyButton.disabled = true;
      try {
        await navigator.clipboard.writeText(email.textContent.trim());
        copyStatus.textContent = 'Email address copied.';
      } catch {
        // Keep the address usable even if clipboard permission is unavailable.
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(email);
        selection.removeAllRanges();
        selection.addRange(range);
        copyStatus.textContent = 'Address selected. Use your device’s Copy command.';
      } finally {
        copyButton.disabled = false;
      }
    });
  }
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
})();
