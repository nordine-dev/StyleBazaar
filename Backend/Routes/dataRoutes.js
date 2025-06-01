import express from 'express';
import { addProduct, getData } from '../controllers/dataControllers.js';
import upload from '../multer.js';

const router = express.Router();

router.post("/add-product",upload.single("image"), addProduct);

router.get("/get-data", getData);


export default router;