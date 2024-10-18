import React, { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { scrollToTop } from "../utils";
import { LoadingBar } from "../components/LoadingBar";

function Galleries({ showPreview }) {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGalleries = async () => {
    const response = await fetch(`${import.meta.env.VITE_APP_API_URL_URL}/gallery`);
    const data = await response.json();
    setGalleries(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchGalleries();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-4 py-8">
      <h1 className="text-5xl font-semibold text-center mb-12 text-blue-900">
        Galleries
      </h1>

      <div className="grid grid-col mb-10 w-full justify-items-center mt-10">
        {loading ? (
          <LoadingBar />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  items-center">
            {galleries?.map((item, index) => {
              if (index < 8 && showPreview) {
                return <GalleryItem key={index} item={item} />;
              } else if (!showPreview) {
                return <GalleryItem key={index} item={item} />;
              }
            })}
          </div>
        )}
      </div>
      {showPreview && (
        <NavLink to="/Galleries" onClick={scrollToTop}>
          <Button size="large" variant="contained" color="salmon">
            {" "}
            View more
          </Button>
        </NavLink>
      )}
    </div>
  );
}

export default Galleries;
