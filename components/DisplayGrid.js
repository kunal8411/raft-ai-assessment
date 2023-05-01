/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";

//dependencies
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";

//css
import classes from "../src/styles/grid.module.css";

function DisplayGrid({ items, updateData }) {
  const [data, setData] = useState(items);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Send modified data to the server every 5 seconds
    const interval = setInterval(() => {
      updateData(data);
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      //on click of esc button
      if (event.keyCode === 27) {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleItemClick = (item) => {
    setSelectedImage(item);
  };

  const SortableListItem = SortableElement(({ item, onItemClick }) => {
    const handleItemClick = () => {
      onItemClick(item);
    };

    return (
      <button className={`grow ${classes.flexDiv}`} onClick={handleItemClick}>
        <div>{item.title}</div>
        <img
          alt="Picture"
          width={"40%"}
          height={50}
          src={item.imageUrl}
          style={{ width: "45%", height:"80%" }}
        />
      </button>
    );
  });

  const SortableList = SortableContainer(({ data, onItemClick }) => {
    return (
      <div
        className={`flex grid grid-cols-3 gap-3 content-normal w-96 ${classes.width_80}`}
      >
        {data.map((item, index) => {
          return (
            <SortableListItem
              axis="xy"
              key={index}
              index={index}
              item={item}
              onItemClick={onItemClick}
            />
          );
        })}
      </div>
    );
  });
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setData(arrayMoveImmutable(items, oldIndex, newIndex));
  };

  return (
    <div className={classes.container}>
      <SortableList
        axis={"xy"}
        data={data}
        onSortEnd={onSortEnd}
        onItemClick={handleItemClick}
      />
      {selectedImage && (
        <div className={classes.modalOverlay}>
          <div className={classes.modalContent}>
            <h2 style={{ color: "black", "fontSize": "20px" }}>
              {selectedImage.title}
            </h2>
            <img src={selectedImage.imageUrl} alt="Modal Image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayGrid;
