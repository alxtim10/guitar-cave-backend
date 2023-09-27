import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import guitarsRoutes from './routes/guitars.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/guitars', guitarsRoutes);

//delete a product
// app.delete("/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Guitars.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ message: `Product ${id} is not exist` });
//     }
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

const PORT = process.env.PORT;
const MONGO = process.env.MONGODB_CONNECT_URL;

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.ex7ayrz.mongodb.net/guitar-cave?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("Guitar Cave Backend is Running on PORT 8080");
    });
    console.log("connected to mongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

  export default app;