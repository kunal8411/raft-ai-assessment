const { MongoClient } = require("mongodb");
import dbConnect from "../../../../utils/db-connect";
import Document from "../../../../models/Document";

export default async function handler(req, res) {
  const { method } = req;
  let result = await dbConnect();
  switch (method) {
    case "GET":
      const allUsers = await Document.find().sort({ position: 1 });
      try {
        res.status(200).json({
          success: true,
          allUsers,
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      const user = new Document(req.body);
      try {
        const result = await user.save();
        res.status(201).json({ success: true, data: result });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;
    case "PUT":
      const updatedItems = req.body;
      try {
        for (let i = 0; i < updatedItems.length; i++) {
          await Document.findOneAndUpdate(
            { _id: updatedItems[i]._id },
            { $set: { position: i } }
          );
        }
        res.status(200).json({
          success: true,
          message: "Items updated successfully",
        });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
