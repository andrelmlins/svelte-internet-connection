import { render } from '@testing-library/svelte';

import InternetConnection from './InternetConnection.svelte';

describe('InternetConnection Component', () => {
  test('shows proper heading when rendered', () => {
    const { container } = render(InternetConnection);

    expect(container.firstChild).not.toBe(null);
  });
});
