import express from "express";

import {getAllData, addData} from "../controller/userController.js";
const router = express.Router();

router.get("/getAll",getAllData)
router.post("/addData",addData)

export default router;