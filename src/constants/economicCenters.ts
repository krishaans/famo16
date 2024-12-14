export interface EconomicCenter {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

export const economicCenters: EconomicCenter[] = [
  { id: 'dambulla', name: 'Dambulla', lat: 7.8674, lng: 80.6509 },
  { id: 'thabuththegama', name: 'Thabuththegama', lat: 8.0376, lng: 80.3003 },
  { id: 'nuwara-eliya', name: 'Nuwara Eliya', lat: 6.9497, lng: 80.7891 },
  { id: 'kappetipola', name: 'Kappetipola', lat: 6.8667, lng: 80.9667 },
  { id: 'kurunduwaththa', name: 'Kurunduwaththa', lat: 7.2854, lng: 80.6334 },
  { id: 'welisara', name: 'Welisara', lat: 7.0281, lng: 79.9011 },
  { id: 'veyangoda', name: 'Veyangoda', lat: 7.1567, lng: 80.0623 },
  { id: 'narahenpita', name: 'Narahenpita', lat: 6.9108, lng: 79.8778 },
  { id: 'embilipitiya', name: 'Embilipitiya', lat: 6.3433, lng: 80.8571 },
  { id: 'meegoda', name: 'Meegoda', lat: 6.8527, lng: 80.0352 },
  { id: 'piliyandala', name: 'Piliyandala', lat: 6.7987, lng: 79.9207 },
  { id: 'rathmalana', name: 'Rathmalana', lat: 6.8193, lng: 79.8821 }
];