import React, { useState, useEffect } from "react";

//components
import { fetchData, updateData } from "../../utils/data";

//utils
import DisplayGrid from "../../components/DisplayGrid";

export default function Home({ initialData }) {
  const [items, setItems] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(async () => {
      const newData = await fetchData();
      setItems(newData);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <DisplayGrid items={items} updateData={updateData} />
    </div>
  );
}

export async function getStaticProps() {
  const initialData = await fetchData();
  return {
    props: {
      initialData,
    },
  };
}
