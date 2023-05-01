import React, { useState, useEffect } from "react";

//components
import { fetchData, updateData } from "../../utils/data";

//utils
import DisplayGrid from "../../components/DisplayGrid";

export default function Home({}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const newData = await fetchData();
      setItems(newData);
    }, 5000);
    async function getData() {
      const initialData = await fetchData();
      setItems(initialData);
    }
    getData();
    return () => clearInterval(interval);
  }, []);
  return (
    <div>{items && items.length>0 && <DisplayGrid items={items} updateData={updateData} />}</div>
  );
}
