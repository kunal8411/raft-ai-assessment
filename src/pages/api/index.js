const { MongoClient } = require("mongodb");
import dbConnect from "../../../utils/db-connect";
import Document from "../../../models/Document";

export default async function handler(req, res) {
  const { method } = req;
  let result = await dbConnect();
  switch (method) {
    case "GET":
      const allUsers = await Document.find();
      try {
        res.status(200).json({
          success: true,
          data: [{ allUsers: allUsers }],
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
    default:
      res.status(400).json({ success: false });
      break;
  }
}
