import { Router } from "express";
import { aggregateCourses } from "../controllers/aggregations.controller.js";

const router = Router();

router.get('/cursos/resumen', aggregateCourses);

export default router;