import express from "express";
import {
  AddCustomURL,
  AddURL,
  GetCount,
  GetCustomCount,
  GetURL,
  Redirect,
  Simply,
} from "./Controller.js";
export const router = new express.Router();

router.get("/", Redirect);
router.post("/add", AddURL);
router.post("/custom/add", AddCustomURL);
router.get("/test/simply", Simply);
router.get("/:short", GetURL);
router.get("/count/:short", GetCount);
router.get("/custom_count/:short", GetCustomCount);
