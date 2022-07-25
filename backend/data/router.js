import express from 'express';
import {getData} from "./handlers.js";


const router = express.Router();

router.get('/',getData)

export default router;