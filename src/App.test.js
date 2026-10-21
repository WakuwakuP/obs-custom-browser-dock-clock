import { act, cleanup, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date(2026, 9, 21, 12, 34, 56, 950));
});

afterEach(() => {
  cleanup();
  jest.useRealTimers();
});

test('renders the current local date and time and updates on the next tick', () => {
  render(<App />);

  expect(screen.getByText('2026/10/21')).toBeInTheDocument();
  expect(screen.getByText('12:34:56')).toBeInTheDocument();

  act(() => {
    jest.advanceTimersByTime(100);
  });

  expect(screen.getByText('12:34:57')).toBeInTheDocument();
});

test('updates the date when local time crosses midnight', () => {
  jest.setSystemTime(new Date(2026, 9, 21, 23, 59, 59, 950));
  render(<App />);

  act(() => {
    jest.advanceTimersByTime(100);
  });

  expect(screen.getByText('2026/10/22')).toBeInTheDocument();
  expect(screen.getByText('00:00:00')).toBeInTheDocument();
});

test('clears the clock timer when unmounted', () => {
  const { unmount } = render(<App />);
  expect(jest.getTimerCount()).toBe(1);

  unmount();

  expect(jest.getTimerCount()).toBe(0);
});
