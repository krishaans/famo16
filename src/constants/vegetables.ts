export interface Vegetable {
  name: string;
  price: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}

export const vegetables: Vegetable[] = [
  { name: 'Carrot', price: 120, unit: 'Rs/Kg', trend: 'up' },
  { name: 'Tomato', price: 180, unit: 'Rs/Kg', trend: 'down' },
  { name: 'Potato', price: 250, unit: 'Rs/Kg', trend: 'stable' },
  { name: 'Beans', price: 300, unit: 'Rs/Kg', trend: 'up' },
  { name: 'Cabbage', price: 160, unit: 'Rs/Kg', trend: 'down' },
  { name: 'Leeks', price: 200, unit: 'Rs/Kg', trend: 'stable' },
];