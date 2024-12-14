import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import MarketPostForm from '../MarketPostForm';
import * as Dialog from '@radix-ui/react-dialog';

test('renders form with correct fields', () => {
  render(
    <Dialog.Root>
      <MarketPostForm
        type="sell"
        onSubmit={() => {}}
        onClose={() => {}}
      />
    </Dialog.Root>
  );

  expect(screen.getByLabelText(/vegetable type/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/quantity/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/location/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/contact number/i)).toBeInTheDocument();
});