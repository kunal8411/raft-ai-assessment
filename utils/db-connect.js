// /lib/dbConnect.js
import mongoose from "mongoose";

let test =
  "mongodb+srv://kunalkhairnar96:mvgpFB77GVRktIxf@cluster0.t8zcefr.mongodb.net/?retryWrites=true&w=majority";

async function dbConnect() {
  const opts = {};
  await mongoose.connect(test, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error-->>>>>", console.error.bind(console, "connection error: "));
  db.once("open", function () {});
}

export default dbConnect;
