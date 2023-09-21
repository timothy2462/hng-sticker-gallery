import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GiphyGallery.css";
import { useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { DndProvider } from "react-dnd";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

import "../App.css";

// DraggableImage component for individual stickers
function DraggableImage({ sticker, index, stickers, setStickers }) {
  // useDrag hook to make the sticker draggable
  const [, ref] = useDrag({
    type: "STICKER",
    item: { id: sticker.id, index },
  });

  // useDrop hook to make the sticker a drop target
  const [, drop] = useDrop({
    type: "STICKER",
    accept: "STICKER",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        const newStickers = [...stickers];
        const [movedSticker] = newStickers.splice(draggedItem.index, 1);
        newStickers.splice(index, 0, movedSticker);
        setStickers(newStickers);
        draggedItem.index = index;
      }
    },
  });

  // Render the draggable sticker with an overlay
  return (
    <div ref={(node) => ref(drop(node))} className="gallery-item">
      <img src={sticker.images.fixed_height.url} alt={sticker.title} />
      <div className="overlay"></div>
    </div>
  );
}

// Main GiphyGallery component
const GiphyGallery = () => {
  const [stickers, setStickers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const apiKey = "dZy4CZaWJ1z8PxkJJbeqbR5pLxSdvBCJ";

  const isTouchDevice = "ontouchstart" in window;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url;
        if (searchQuery) {
          url = `https://api.giphy.com/v1/stickers/search?q=${searchQuery}&api_key=${apiKey}&limit=30`;
        } else {
          url = `https://api.giphy.com/v1/stickers/search?q=animals&api_key=${apiKey}&limit=30`;
        }

        const response = await axios.get(url);

        if (response.data && response.data.data) {
          setStickers(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching stickers:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
      <div>
        <div className="search-container">
          <h3>Image & Stickers Gallery</h3>

          <div className="input-section">
            <input
              type="text"
              placeholder="Search. eg emoji, animals, food, drinks etc "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input"
            />
            <button onClick={handleLogout} className="logout-btn">
              Log out
            </button>
          </div>
          <p>
            {searchQuery
              ? `Search Results for ${searchQuery}`
              : "Animal Stickers"}
          </p>
        </div>
        <div className="gallery">
          {stickers.map((sticker, index) => (
            <DraggableImage
              key={sticker.id}
              sticker={sticker}
              index={index}
              stickers={stickers}
              setStickers={setStickers}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default GiphyGallery;
