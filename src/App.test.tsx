import {describe, it} from 'vitest'
import {render, screen} from '@testing-library/react';

import App from './App';

test('Renders the header', () => {
    render(<App/>);
    expect(screen.getByRole('header')).toBeInTheDocument();
});