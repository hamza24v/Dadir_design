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
        "0-2 drawers": {id: 1, oldPrice: 90, newPrice: 72},
        "3-4 drawers": {id: 2, oldPrice: 99, newPrice: 79},
        "5+ drawers": {id: 3, oldPrice: 109, newPrice: 88},
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
        "0-2 drawers": {id: 1, oldPrice: 109, newPrice: 88},
        "3-4 drawers": {id: 2, oldPrice: 118, newPrice: 95},
        "5+ drawers": {id: 3, oldPrice: 128, newPrice: 103},
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
        "0-2 drawers": {id: 1, oldPrice: 128, newPrice: 102},
        "3-4 drawers": {id: 2, oldPrice: 137, newPrice: 110},
        "5+ drawers": {id: 3, oldPrice: 147, newPrice: 118},
      },
      image: new URL('../assets/gallery/dresser_sliding_door.jpg', import.meta.url).href,
      serviceType: 'Indoor Furniture Assembly'
    },
  ];