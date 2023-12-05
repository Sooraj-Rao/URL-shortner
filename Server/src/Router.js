import express from "express";
import {
  AddCustomURL,
  AddURL,
  GetCount,
  GetCustomCount,
  GetURL,
  Simply,
} from "./Controller.js";
export const router = new express.Router();

router.post("/add", AddURL);
router.post("/custom/add", AddCustomURL);
router.get("/:short", GetURL);
router.get("/count/:short", GetCount);
router.get("/custom_count/:short", GetCustomCount);
router.get("/simply", Simply);
