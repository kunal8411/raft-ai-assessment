/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import classes from "../src/styles/grid.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";
const list = [
  {
    type: "bank- draft",
    title: "Bank Draft",
    position: "0",
    imageUrl:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  },
  {
    type: "bill-of-lading",
    title: "Bill of Lading",
    position: "1",
    imageUrl:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  },
  {
    type: "invoice",
    title: "Invoice",
    position: "2",
    imageUrl:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  },
  {
    type: "bank-draft-2",
    title: "Bank Draft 2",
    position: "3",
    imageUrl:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  },
  {
    type: "bill-of-lading-2",
    title: "Bill of Lading 2",
    position: "4",
    imageUrl:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  },
];

function DisplayGrid(props) {
  const [items, setItems] = useState(list);
  useEffect(() => {
    const fetchData = async () => {
      // Make an API call here
      // const response = await fetch("https://example.com/api/data");
      // const jsonData = await response.json();
      // // Update the data state variable
      // setData(jsonData);
    };

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);
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

  const SortableList = SortableContainer(({ items }) => {
    return (
      <div
        className={`flex grid grid-cols-3 gap-3 content-normal w-96 ${classes.width_80}`}
      >
        {items.map((item, index) => {
          return (
            <SortableListItem axis="xy" key={index} index={index} item={item} />
          );
        })}
      </div>
    );
  });
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMoveImmutable(items, oldIndex, newIndex));
  };

  return (
    <div className={classes.container}>
      <SortableList axis={"xy"} items={items} onSortEnd={onSortEnd} />
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/api");
  const jsonData = await data.json();

  return {
    props: {
      data: { jsonData },
    },
  };
}
export default DisplayGrid;
