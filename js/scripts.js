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
