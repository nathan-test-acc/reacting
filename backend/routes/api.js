import express from 'express';
import { getData } from '../controllers/apiController.js';

const router = express.Router();

// API Route
router.get('/data', getData);

export default router;
