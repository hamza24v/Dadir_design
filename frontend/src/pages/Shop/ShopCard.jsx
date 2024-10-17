import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select/Select";
import { MenuItem, TextField, FormControl, InputLabel } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

function ShopCard({ item, addToCart }) {
  const defaultVariation = item?.variations
    ? Object.keys(item.variations)[0]
    : null;

  const [selectedVariation, setSelectedVariation] = useState(defaultVariation);
  const [serviceDate, setServiceDate] = useState(dayjs());
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const fetchAvailability = async () => {
      // Placeholder: Assume availability for 9 AM - 5 PM, every hour
      const times = Array.from({ length: 11 }, (_, i) => i + 8);
      setAvailableTimes(times);
    };
    fetchAvailability();
  }, []);

  const handleSelect = (e) => {
    setSelectedVariation(e.target.value);
  };

  const handleDateChange = (newDate) => {
    setServiceDate(newDate);
  };

  const oldPrice = selectedVariation
    ? item.variations[selectedVariation].oldPrice
    : item.oldPrice;
  const newPrice = selectedVariation
    ? item.variations[selectedVariation].newPrice
    : item.newPrice;
  const priceId = selectedVariation
    ? item.variations[selectedVariation].priceId
    : item.priceId;

  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <img
        className="w-full h-64 object-cover mb-4 rounded-lg"
        src={item.image}
        alt={item.name}
      />
      <h3 className="text-xl mb-2">{item.name}</h3>
      <div className="flex my-1 gap-4">
        <p className="text-lg font-semibold text-green-700">${newPrice}</p>
        <p className="text-lg font-semibold text-orange-500 line-through ">
          ${oldPrice}
        </p>
      </div>
      <div>
        <FormControl
          sx={{ my: 1, minWidth: 120 }}
          size="small"
          disabled={!item?.variations}
        >
          <InputLabel id="variations-select">Variations</InputLabel>
          <Select
            label="Variations"
            id="variations-select"
            onChange={handleSelect}
            value={selectedVariation || "None"}
          >
            {item?.variations ? (
              Object.entries(item.variations).map(([variation, _], index) => (
                <MenuItem value={variation} key={index}>
                  {variation}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="None">No Variations Available</MenuItem>
            )}
          </Select>
        </FormControl>
      </div>
      <div className="mt-4">
        <DateTimePicker
          label="Select Service Date"
          value={serviceDate}
          onChange={handleDateChange}
          minDate={dayjs()}
          disablePast
          shouldDisableTime={(timeValue, clockType) => {
            if (clockType === "hours") {
               // Disable times on Fridays from 12 PM to 3 PM, and 6-8pm
               const day = serviceDate.day();
               if (timeValue < 8 || timeValue > 17 || (day === 5 && timeValue >= 12 && timeValue < 15)) {
                 return true;
               }
              return false;
            }
            return false;
          }}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </div>
      <div className="mt-5"></div>
      <Button
        size="large"
        variant="contained"
        color="salmon"
        className="w-full"
        onClick={() => {
          addToCart(
            item,
            selectedVariation
              ? { selectedVariation, newPrice, oldPrice, priceId, serviceDate }
              : null
          );
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default ShopCard;
