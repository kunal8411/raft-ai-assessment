import React, { useState, useEffect } from "react";

//components
import { fetchData, updateData } from "../../utils/data";

//utils
import DisplayGrid from "../../components/DisplayGrid";

//dependencies
import moment from "moment";

//css
import classes from "../styles/grid.module.css";

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
    <div>
      {items && items.length > 0 && (
        <div>
          <div className={classes.timeDisplayDiv}>
            Last Update:
            {moment(
              moment
                .utc(items[0].updatedAt)
                .local()
                .format("YYYY-MM-DD HH:mm:ss")
            ).fromNow()}
          </div>{" "}
          <DisplayGrid items={items} updateData={updateData} />
        </div>
      )}
    </div>
  );
}
