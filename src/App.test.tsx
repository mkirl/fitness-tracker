import {describe, it} from 'vitest'
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

test('Renders the app name in header', () => {
    render(<App/>);
    expect(screen.getByRole('heading', {level: 1, name: 'Fitness Tracker'})).toBeVisible();
});

test('Renders the header item 1', () => {
    render(<App/>);
    expect(screen.getByRole('heading', {level: 2, name: 'Header Item 1'})).toBeVisible();
});

test('Renders the login button when page first renders', () => {
    render(<App/>);
    expect(screen.getByRole('button', {name: 'Login'})).toBeVisible();
});

test('Renders the profile button when user is logged in', () => {
    render(<App/>);
    userEvent.click(screen.getByRole('button', {name: 'Login'}));
    expect(screen.getByRole('button', {name: 'Login'})).toBeVisible();
});

test('When login button is clicked, the login menu is displayed', () => {
    render(<App/>);
    expect(screen.getByLabelText('Email')).toBeVisible();
    expect(screen.getByLabelText('Password')).toBeVisible();
});


