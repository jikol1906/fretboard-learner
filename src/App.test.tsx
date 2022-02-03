import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import GuessNote from './containers/GuessNote';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <GuessNote />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
