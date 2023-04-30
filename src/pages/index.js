import Image from "next/image";
import DisplayGrid from "../../components/DisplayGrid";
import React, { useState, useEffect } from "react";

export default function Home(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([
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
    ]);
  }, []);

  return (
    <div>
      <DisplayGrid items={items} />
    </div>
  );
}

