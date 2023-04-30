/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";

//dependencies
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";

//css
import classes from "../src/styles/grid.module.css";

function DisplayGrid({ items, updateData }) {
  const [data, setData] = useState(items);

  useEffect(() => {
    // Send modified data to the server every 5 seconds
    const interval = setInterval(() => {
      updateData(data);
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  const SortableListItem = SortableElement(({ item }) => {
    return (
      <div className={`grow`}>
        <div>{item.title}</div>
        <img
          alt="Picture"
          width={"40%"}
          height={50}
          src={item.imageUrl}
          style={{ width: "40%" }}
        />
      </div>
    );
  });

  const SortableList = SortableContainer(({ data }) => {
    return (
      <div
        className={`flex grid grid-cols-3 gap-3 content-normal w-96 ${classes.width_80}`}
      >
        {data.map((item, index) => {
          return (
            <SortableListItem axis="xy" key={index} index={index} item={item} />
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
      <SortableList axis={"xy"} data={data} onSortEnd={onSortEnd} />
    </div>
  );
}

export default DisplayGrid;
