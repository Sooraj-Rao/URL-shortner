import express from "express";
import {
  AddURL,
  GetCount,
  GetURL,
} from "./Controller.js";
export const router = new express.Router();


router.post("/add", AddURL);
router.get("/:short", GetURL);
router.get("/c/:short", GetCount);
