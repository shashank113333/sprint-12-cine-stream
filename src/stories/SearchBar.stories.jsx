import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Current search text input value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when input is empty',
    },
    onChange: { action: 'searched' },
    onClear: { action: 'cleared' },
  },
};

export const EmptyDefault = {
  args: {
    value: '',
    placeholder: 'Search movies (e.g. Batman)...',
  },
};

export const WithSearchQuery = {
  args: {
    value: 'Batman',
    placeholder: 'Search movies (e.g. Batman)...',
  },
};

export const CustomPlaceholder = {
  args: {
    value: '',
    placeholder: 'Explore sci-fi series, anime & documentaries...',
  },
};

export const Interactive = () => {
  const [val, setVal] = useState('Inception');
  return (
    <SearchBar
      value={val}
      onChange={(newVal) => setVal(newVal)}
      onClear={() => setVal('')}
      placeholder="Type to search dynamically..."
    />
  );
};
