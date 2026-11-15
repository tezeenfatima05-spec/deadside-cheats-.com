/** Blog index topic filters, search (?q=), and sort select. */
export function initBlogIndexFilters(emptyMessage: string) {
  const grid = document.getElementById('blog-grid');
  const emptyEl = document.getElementById('blog-empty');
  const sortRoot = document.getElementById('blog-sort-select');
  const searchInput = document.getElementById('blog-search') as HTMLInputElement | null;
  const searchForm = document.getElementById('blog-search-form') as HTMLFormElement | null;
  if (!grid) return;

  const filters = document.querySelectorAll<HTMLButtonElement>('[data-blog-filter]');

  const cards = () => [...grid.querySelectorAll<HTMLElement>('[data-blog-card]')];

  const activeTag = () =>
    document.querySelector<HTMLButtonElement>('[data-blog-filter][aria-pressed="true"]')?.getAttribute(
      'data-blog-filter',
    ) ?? 'all';

  const getSortSelectRoot = () => sortRoot?.querySelector<HTMLElement>('[data-sw-select]');

  const getSort = () => {
    const root = getSortSelectRoot();
    const fromAttr = root?.getAttribute('data-value');
    if (fromAttr) return fromAttr;
    const input = sortRoot?.querySelector<HTMLInputElement>('[data-sw-select-input]');
    return input?.value || 'newest';
  };

  const isBlogSortEvent = (event: Event) => {
    const root = getSortSelectRoot();
    if (!root || !sortRoot) return false;
    return event.target === root || root.contains(event.target as Node);
  };

  const searchQuery = () => (searchInput?.value ?? '').trim().toLowerCase();

  const readSearchFromUrl = () => {
    const q = new URLSearchParams(window.location.search).get('q');
    if (searchInput && q) searchInput.value = q;
  };

  const compareCards = (a: HTMLElement, b: HTMLElement, sort: string) => {
    const tsA = Number(a.getAttribute('data-ts') ?? 0);
    const tsB = Number(b.getAttribute('data-ts') ?? 0);
    const readA = Number(a.getAttribute('data-read-minutes') ?? 0);
    const readB = Number(b.getAttribute('data-read-minutes') ?? 0);
    const titleA = (a.getAttribute('data-title') ?? '').toLowerCase();
    const titleB = (b.getAttribute('data-title') ?? '').toLowerCase();

    if (sort === 'oldest') return tsA - tsB;
    if (sort === 'short') return readA - readB;
    if (sort === 'long') return readB - readA;
    if (sort === 'az') return titleA.localeCompare(titleB);
    if (sort === 'za') return titleB.localeCompare(titleA);
    return tsB - tsA;
  };

  const apply = () => {
    const tag = activeTag();
    const sort = getSort();
    const q = searchQuery();
    const items = cards();

    const sorted = [...items].sort((a, b) => compareCards(a, b, sort));
    sorted.forEach((el) => grid.appendChild(el));

    let visibleCount = 0;
    items.forEach((el) => {
      const tagMatch = tag === 'all' || el.getAttribute('data-tag') === tag;
      const haystack = (el.getAttribute('data-search') ?? '').toLowerCase();
      const searchMatch = !q || haystack.includes(q);
      const match = tagMatch && searchMatch;
      el.classList.toggle('hidden', !match);
      if (match) visibleCount += 1;
    });

    if (emptyEl) {
      emptyEl.classList.toggle('hidden', visibleCount > 0);
      emptyEl.textContent = emptyMessage;
    }
  };

  filters.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      filters.forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      apply();
    });
  });

  const onSortChange = (event: Event) => {
    if (!isBlogSortEvent(event)) return;
    apply();
  };

  document.addEventListener('starwind:value-change', onSortChange);

  searchForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    apply();
  });

  searchInput?.addEventListener('input', () => {
    const url = new URL(window.location.href);
    const value = searchInput.value.trim();
    if (value) url.searchParams.set('q', value);
    else url.searchParams.delete('q');
    window.history.replaceState({}, '', `${url.pathname}${url.search}`);
    apply();
  });

  readSearchFromUrl();
  apply();
  window.setTimeout(apply, 50);
}