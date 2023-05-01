import mongoose from "mongoose";

let mongoUrl = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.t8zcefr.mongodb.net/?retryWrites=true&w=majority`;
async function dbConnect() {
  const opts = {};
  await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error:", console.error.bind(console, "connection error: "));
  db.once("open", function () {});
}

export default dbConnect;
