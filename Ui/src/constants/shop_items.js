export const shop_items = [
  {
    id: 1,
    category: 'Bed Assembly',
    description: 'Basic Bed frame',
    oldPrice: 90,
    newPrice: 72,
    image: new URL('../assets/gallery/bed_framee.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 2,
    description: 'Bed frame with built-in storage',
    oldPrice: 130,
    newPrice: 104,
    image: new URL('../assets/gallery/bed_frame.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 3,
    category: 'Bed Assembly',
    description: 'Bunk bed frame',
    oldPrice: 160,
    newPrice: 128,
    image: new URL('../assets/gallery/bunk_bed_assemble.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 4,
    category: 'Bed Assembly',
    description: 'Bunk bed frame with built-in storage ',
    oldPrice: 200,
    newPrice: 160,
    image: new URL('../assets/gallery/bunk_bed_storage.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 5,
    category: 'Dresser Assembly',
    description: 'Dresser Without Hinged Doors',
    oldPrice: 90,
    newPrice: 72,
    variations: {
      "0-2 drawers": { oldPrice: 90, newPrice: 72 },
      "3-4 drawers": { oldPrice: 99, newPrice: 79 },
      "5+ drawers": { oldPrice: 109, newPrice: 88 },
    },
    image: new URL('../assets/gallery/dresser_no_door.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 6,
    category: 'Dresser Assembly',
    description: 'Dresser With Hinged Doors',
    oldPrice: 109,
    newPrice: 88,
    variations: {
      "0-2 drawers": { oldPrice: 109, newPrice: 88 },
      "3-4 drawers": { oldPrice: 118, newPrice: 95 },
      "5+ drawers": { oldPrice: 128, newPrice: 103 },
    },
    image: new URL('../assets/gallery/dresser_hinge_door.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 7,
    category: 'Dresser Assembly',
    description: 'Dresser With Sliding Doors',
    oldPrice: 128,
    newPrice: 102,
    variations: {
      "0-2 drawers": { oldPrice: 128, newPrice: 102 },
      "3-4 drawers": { oldPrice: 137, newPrice: 110 },
      "5+ drawers": { oldPrice: 147, newPrice: 118 },
    },
    image: new URL('../assets/gallery/dresser_sliding_door.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 8,
    category: 'Nightstand',
    description: 'Nightstand Without Glass Top',
    oldPrice: 90,
    newPrice: 72,
    variations: {
      "0-2 drawers": { oldPrice: 90, newPrice: 72 },
      "3-4 drawers": { oldPrice: 104, newPrice: 84 },
      "5+ drawers": { oldPrice: 118, newPrice: 95 },
    },
    image: new URL('../assets/gallery/dresser_hinge_door.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 9,
    category: 'Nightstand',
    description: 'Nightstand With Glass Top',
    oldPrice: 104,
    newPrice: 84,
    variations: {
      "0-2 drawers": { oldPrice: 104, newPrice: 84 },
      "3-4 drawers": { oldPrice: 118, newPrice: 95 },
      "5+ drawers": { oldPrice: 132, newPrice: 106 },
    },
    image: new URL('../assets/gallery/dresser_sliding_door.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 10,
    description: 'Office Chair',
    oldPrice: 90,
    newPrice: 72,
    variations: {
      'Without Ottoman': { oldPrice: 90, newPrice: 72 },
      "With Ottoman": { oldPrice: 128, newPrice: 102 },
    },
    image: new URL('../assets/gallery/bed_frame.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 11,
    description: 'Stool',
    oldPrice: 90,
    newPrice: 72,
    variations: {
      'Without Ottoman': { oldPrice: 90, newPrice: 72 },
      "With Ottoman": { oldPrice: 128, newPrice: 102 },
    },
    image: new URL('../assets/gallery/bed_frame.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 12,
    description: 'Dining Chair',
    oldPrice: 90,
    newPrice: 72,
    variations: {
      'Without Ottoman': { oldPrice: 90, newPrice: 72 },
      "With Ottoman": { oldPrice: 128, newPrice: 102 },
    },
    image: new URL('../assets/gallery/bed_frame.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 13,
    description: 'Rocking or Gliding Chair',
    oldPrice: 100,
    newPrice: 80,
    variations: {
      'Without Ottoman': { oldPrice: 100, newPrice: 80 },
      "With Ottoman": { oldPrice: 138, newPrice: 111 },
    },
    image: new URL('../assets/gallery/bed_frame.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 14,
    description: 'Adirondack Chair',
    oldPrice: 90,
    newPrice: 72,
    variations: {
      'Without Ottoman': { oldPrice: 90, newPrice: 72 },
      "With Ottoman": { oldPrice: 128, newPrice: 102 },
    },
    image: new URL('../assets/gallery/bed_frame.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 15,
    description: 'Desk without Hutch',
    oldPrice: 90,
    newPrice: 72,
    variations: {
      '0-2 drawers': { oldPrice: 90, newPrice: 72 },
      "3-4 drawers": { oldPrice: 99, newPrice: 79 },
      "5+ drawers": { oldPrice: 126, newPrice: 101 },
    },
    image: new URL('../assets/gallery/bed_frame.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 16,
    description: 'Desk with Hutch',
    oldPrice: 108,
    newPrice: 87,
    variations: {
      '0-2 drawers': { oldPrice: 108, newPrice: 87 },
      "3-4 drawers": { oldPrice: 117, newPrice: 94 },
      "5+ drawers": { oldPrice: 147, newPrice: 118 },
    },
    image: new URL('../assets/gallery/bed_frame.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 17,
    description: 'Corner/L-shaped Desk without Hutch',
    oldPrice: 144,
    newPrice: 116,
    variations: {
      '0-2 drawers': { oldPrice: 144, newPrice: 116 },
      "3-4 drawers": { oldPrice: 153, newPrice: 123 },
      "5+ drawers": { oldPrice: 162, newPrice: 130 },
    },
    image: new URL('../assets/gallery/corner_table_no_hutch.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 18,
    description: 'Corner/L-shaped Desk with Hutch',
    oldPrice: 162,
    newPrice: 130,
    variations: {
      '0-2 drawers': { oldPrice: 162, newPrice: 130 },
      "3-4 drawers": { oldPrice: 171, newPrice: 137 },
      "5+ drawers": { oldPrice: 180, newPrice: 144 },
    },
    image: new URL('../assets/gallery/corner_table.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 19,
    description: 'Table Without Expandable Top',
    oldPrice: 90,
    newPrice: 72,
    variations: {
      '0-6 feet': { oldPrice: 108, newPrice: 87 },
      "6+ feet": { oldPrice: 110, newPrice: 88 },
    },
    image: new URL('../assets/gallery/bed_frame.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 20,
    description: 'Table With Expandable Top',
    oldPrice: 108,
    newPrice: 87,
    variations: {
      '0-6 feet': { oldPrice: 120, newPrice: 96 },
      "6+ feet": { oldPrice: 140, newPrice: 112 },
    },
    image: new URL('../assets/gallery/bed_frame.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 21,
    description: 'Wall Mounting/hanging',
    oldPrice: 120,
    newPrice: 96,
    variations: {
      '0-8 feet from ground': { oldPrice: 120, newPrice: 96 },
      "8-12 feet from ground": { oldPrice: 210, newPrice: 168 },
      "15-20 feet from ground": { oldPrice: 664, newPrice: 532 },
      "20+ feet from ground": { oldPrice: 846, newPrice: 677 },
    },
    image: new URL('../assets/gallery/bed_frame.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 22,
    description: 'TV Stand',
    oldPrice: 90,
    newPrice: 72,
    variations: {
      'No fireplace & wall mount': { oldPrice: 90, newPrice: 72 },
      "No fireplace but with wall mount": { oldPrice: 128, newPrice: 102 },
      "With fireplace but no wall mount": { oldPrice: 146, newPrice: 116 },
      "With fireplace & wall mount": { oldPrice: 184, newPrice: 148 },
    },
    image: new URL('../assets/gallery/tv_stands.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 23,
    description: 'Entertainment Center',
    oldPrice: 137,
    newPrice: 110,
    variations: {
      'No fireplace & wall mount': { oldPrice: 137, newPrice: 110 },
      "No fireplace but with wall mount": { oldPrice: 175, newPrice: 140 },
      "With fireplace but no wall mount": { oldPrice: 193, newPrice: 155 },
      "With fireplace & wall mount": { oldPrice: 231, newPrice: 185 },
    },
    image: new URL('../assets/gallery/entertainment_center.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
];