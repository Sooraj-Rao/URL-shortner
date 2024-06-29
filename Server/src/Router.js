import express from "express";
import {
  AddURL,
  GetCount,
  GetURL,
  Redirect,
} from "./Controller.js";
export const router = new express.Router();


router.post("/add", AddURL);
router.get("/:short", GetURL);
router.get("/c/:short", GetCount);
router.get('/*',Redirect)