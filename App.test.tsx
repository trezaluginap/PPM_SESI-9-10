// __tests__/App.test.tsx
import 'react-native';
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';

// Test 1: Memastikan App dapat dirender tanpa error
it('renders correctly', () => {
  render(<App />);
});

// Test 2: Memastikan "Makanan Favorit" muncul di layar
it('displays the correct title', () => {
  const {getByText} = render(<App />);
  const title = getByText('Makanan Favorit');
  expect(title).toBeTruthy();
});

// Test 3: Memeriksa gambar makanan pertama
it('loads the first food image correctly', () => {
  const {getByTestId} = render(<App />);
  const foodImage = getByTestId('food-image-1'); // Gunakan testID untuk gambar pertama
  expect(foodImage.props.source.uri).toBe(
    'https://i.pinimg.com/474x/84/1b/c1/841bc1665850351ce27e2850ec63241b.jpg',
  );
});
