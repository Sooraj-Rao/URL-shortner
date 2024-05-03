import express from "express";
import {
  AddURL,
  GetCount,
  GetURL,
  Redirect,
} from "./Controller.js";
export const router = new express.Router();

router.get("/", Redirect);
router.post("/add", AddURL);
router.get("/:short", GetURL);
router.get("/c/:short", GetCount);
