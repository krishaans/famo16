import React from 'react';
import type { Vegetable } from '../../constants/vegetables';

interface PriceTableProps {
  vegetables: Vegetable[];
  onSelect?: (name: string) => void;
}

const PriceTable: React.FC<PriceTableProps> = ({ vegetables, onSelect }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Vegetable</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Trend</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {vegetables.map((vegetable) => (
            <tr
              key={vegetable.name}
              onClick={() => onSelect?.(vegetable.name)}
              className={onSelect ? 'cursor-pointer hover:bg-gray-50' : ''}
            >
              <td className="px-6 py-4 text-sm text-gray-900">{vegetable.name}</td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {vegetable.price} {vegetable.unit}
              </td>
              <td className="px-6 py-4 text-sm">
                {vegetable.trend === 'up' && <span className="text-green-600">↑ Rising</span>}
                {vegetable.trend === 'down' && <span className="text-red-600">↓ Falling</span>}
                {vegetable.trend === 'stable' && <span className="text-gray-600">→ Stable</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;