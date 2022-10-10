import {describe, it} from 'vitest'
import {render, screen} from '@testing-library/react';

import App from './App';

test('Renders the app name in header', () => {
    render(<App/>);
    expect(screen.getByRole('heading', {level: 1, name: 'Fitness Tracker'})).toBeVisible();
});