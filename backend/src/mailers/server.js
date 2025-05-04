import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


