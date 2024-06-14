import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select/Select';
import { MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


function ShopCard({ item, addToCart }) {
  const defaultVariation = item?.variations ? Object.keys(item.variations)[0] : null 
  const [selectedVariation, setSelectedVariation] = useState(defaultVariation);

  const handleSelect = (e) => {
    setSelectedVariation(e.target.value)
  }


  const oldPrice = selectedVariation ? item.variations[selectedVariation].oldPrice : item.oldPrice;
  const newPrice = selectedVariation ? item.variations[selectedVariation].newPrice : item.newPrice;

  
  return (
    <div className="border p-4 rounded-lg shadow">
      <img className="w-full h-64 object-cover mb-4" src={item.image} alt={item.description} />
      <h3 className="text-xl mb-2">{item.description}</h3>
      <div className='flex my-1 gap-4'>
        <p className="text-lg font-semibold">${newPrice}</p>
        <p className="text-lg font-semibold text-orange-500 line-through ">${oldPrice}</p>
      </div>
      <div>
        {item?.variations &&
        <FormControl sx={{ my: 1, minWidth: 120 }} size="small">
          <InputLabel id="variations-select">variations</InputLabel>

          <Select
            label="variations"
            id="variations-select"
            onChange={handleSelect}
            value={selectedVariation}
          >
            {Object.entries(item.variations).map(([variation, _], index) => (
              <MenuItem value={variation} key={index}>{variation}</MenuItem>
            ))}
            
          </Select>
          </FormControl>
        }
      </div>
      <Button size='large' variant='contained' color='salmon'
        onClick={() => { addToCart(item, selectedVariation ? {selectedVariation, newPrice, oldPrice}: null) }}
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default ShopCard;
