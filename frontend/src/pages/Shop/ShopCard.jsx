import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select/Select";
import { MenuItem, TextField, FormControl, InputLabel } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

function ShopCard({ item, addToCart }) {
  const defaultVariation = item?.variations
    ? Object.keys(item.variations)[0]
    : "all";
  const defaultService = item?.services ? item.services[0] : null;

  const pickupRef = useRef(null);
  const dropoffRef = useRef(null);
  const serviceRef = useRef(null);

  const [selectedVariation, setSelectedVariation] = useState(defaultVariation);
  const [selectedService, setSelectedService] = useState(defaultService);
  const [serviceDate, setServiceDate] = useState(dayjs());
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [assemblyLocation, setAssemblyLocation] = useState("");
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAvailability = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/appointments`
      );
      const appointments = await response.json();

      const processedAppointments = appointments.map((app) => ({
        start: dayjs(app.start.dateTime),
        end: dayjs(app.end.dateTime),
      }));
      setAppointments(processedAppointments);
    };
    fetchAvailability();
  }, []);

  useEffect(() => {
    if (
      selectedService === "Delivery" ||
      (selectedService === "Assembly" && window.google)
    ) {
      const autocompletePickup = new window.google.maps.places.Autocomplete(
        pickupRef.current,
        {
          types: ["address"],
          componentRestrictions: { country: "us" },
        }
      );

      const autocompleteDropoff = new window.google.maps.places.Autocomplete(
        dropoffRef.current,
        {
          types: ["address"],
        }
      );

      const autoCompleteService = new window.google.maps.places.Autocomplete(
        serviceRef.current,
        {
          types: ["address"],
          componentRestriction: { country: "us" },
        }
      );

      autoCompleteService.addListener("place_changed", () => {
        const place = autoCompleteService.getPlace();
        setAssemblyLocation(place.formatted_address);
      });

      autocompletePickup.addListener("place_changed", () => {
        const place = autocompletePickup.getPlace();
        setPickupLocation(place.formatted_address);
      });

      autocompleteDropoff.addListener("place_changed", () => {
        const place = autocompleteDropoff.getPlace();
        setDropoffLocation(place.formatted_address);
      });
    }
  }, [selectedService]);

  const handleServiceSelect = (e) => {
    setSelectedService(e.target.value);
  };

  const handleVariationSelect = (e) => {
    setSelectedVariation(e.target.value);
  };

  const handleAddToCart = () => {
    if (
      selectedService === "Delivery" &&
      (!pickupLocation || !dropoffLocation)
    ) {
      alert(
        "Please fill in both pickup and dropoff locations for delivery service."
      );
      return;
    }

    if (selectedService === "Assembly" && !assemblyLocation) {
      alert("Please fill in the service location for assembly service.");
      return;
    }

    if (selectedService === "Assembly") {
      addToCart(item, {
        selectedVariation,
        selectedService,
        newPrice,
        serviceDate,
        assemblyLocation,
        priceId,
      });
    } else {
      const deliveryLocation = {
        pickUp: pickupLocation,
        dropoff: dropoffLocation,
      };
      addToCart(item, {
        selectedVariation,
        selectedService,
        newPrice,
        serviceDate,
        deliveryLocation,
        priceId,
      });
    }
  };

  const oldPrice =
    selectedVariation !== "all"
      ? item.variations[selectedVariation].oldPrice
      : item.oldPrice;
  const newPrice =
    selectedVariation !== "all"
      ? item.variations[selectedVariation].newPrice
      : item.newPrice;
  const priceId =
    selectedVariation !== "all"
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
      <div className="flex flex-col">
        <FormControl
          sx={{ my: 1, minWidth: 120 }}
          size="small"
          disabled={!item?.variations}
        >
          <InputLabel id="variations-select">Variations</InputLabel>
          <Select
            label="Variations"
            id="variations-select"
            onChange={handleVariationSelect}
            value={selectedVariation !== "all" ? selectedVariation : "None"}
          >
            {item?.variations ? (
              Object.entries(item.variations).map(([variation, _], index) => (
                <MenuItem value={variation} key={index}>
                  {variation}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="None">All Variations</MenuItem>
            )}
          </Select>
        </FormControl>
        <FormControl sx={{ my: 1, minWidth: 120 }} size="small">
          <InputLabel id="service-select">Service Type</InputLabel>
          <Select
            label="Service Type"
            id="service-select"
            onChange={handleServiceSelect}
            value={selectedService || "None"}
          >
            {item?.services?.map((service, index) => (
              <MenuItem value={service} key={index}>
                {service}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedService === "Delivery" && (
          <>
            <TextField
              label="Pickup Location"
              fullWidth
              sx={{ mt: 2 }}
              value={pickupLocation}
              inputRef={pickupRef}
              onChange={(e) => setPickupLocation(e.target.value)}
            />
            <TextField
              label="Dropoff Location"
              fullWidth
              sx={{ mt: 2 }}
              value={dropoffLocation}
              inputRef={dropoffRef}
              onChange={(e) => setDropoffLocation(e.target.value)}
            />
          </>
        )}

        {selectedService === "Assembly" && (
          <TextField
            label="Service Location"
            fullWidth
            sx={{ mt: 2 }}
            value={assemblyLocation}
            inputRef={serviceRef}
            onChange={(e) => setAssemblyLocation(e.target.value)}
          />
        )}
      </div>
      <div className="mt-4">
        <DateTimePicker
          label="Select Service Date"
          value={serviceDate}
          onChange={(newDate) => setServiceDate(newDate)}
          minDate={dayjs()}
          disablePast
          shouldDisableTime={(timeValue, clockType) => {
            let dateTime = serviceDate.clone(); // to avoid mutating state

            if (clockType === "hours") {
              dateTime = dateTime.hour(timeValue);
            } else if (clockType === "minutes") {
              dateTime = dateTime.minute(timeValue);
            }

            if (dateTime.isBefore(dayjs())) {
              return true; // Disable past times
            }

            // disable conflicting times
            const isUnavailable = appointments.some((app) =>
              dateTime.isBetween(app.start, app.end, null, "[)")
            );

            if (isUnavailable) {
              return true;
            }

            // disable non working hours
            if (clockType === "hours") {
              if (timeValue < 8 || timeValue >= 18) {
                return true;
              }

              const dayOfWeek = dateTime.day();
              if (dayOfWeek === 5 && timeValue >= 12 && timeValue < 15) {
                return true;
              }
            }

            return false;
          }}
          renderInput={(params) => (
            <TextField {...params} fullWidth error={false} />
          )}
        />
      </div>
      <div className="mt-5"></div>
      <Button
        size="large"
        variant="contained"
        color="salmon"
        className="w-full"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default ShopCard;
