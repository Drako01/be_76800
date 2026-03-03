import { Router } from "express";
import { Curso } from '../config/models/Curso.model.js';
import { User } from "../config/models/User.model.js";


const router = Router();

// Obtener todos los cursos
router.get('/', async (req, res) => {
    const cursos = await Curso.find();
    res.status(200).json({ cursos: cursos })
})


router.post('/', async (req, res) => {
    try {
        const newCourse = await Curso.create(req.body);
        res.status(201).json({ curso: newCourse });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

// Inscripcion de un Alumno a un curso
router.post('/:courseId/inscription/:studentId', async (req, res) => {
    try {
        const curso = await Curso.findById(req.params.courseId);
        const alumno = await User.findById(req.params.studentId);

        // Validamos que tanto el Curso como el Alumno existan
        if (!curso || !alumno) {
            return res.status(404).json({ error: "Curos o Alumno no encontrado.!" })
        }

        // Validar que el alumno no este inscripto previamente a este curso
        if (curso.students.includes(alumno._id)) {
            return res.status(400).json({ error: `El Alumno con ${alumno.name} ya estaba inscripto en el curso: ${curso.title}` })
        }

        curso.students.push(alumno._id);
        await curso.save();

        res.status(201).json({ message: `El Alumno ${alumno.name} fue inscripto en el Curso: ${curso.title} Correctamente.!`, curso: curso })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})


// Desinscribir un Alumno de un curso
router.post('/:courseId/desinscription/:studentId', async (req, res) => {
    try {
        const curso = await Curso.findById(req.params.courseId);

        // Validamos que tanto el Curso como el Alumno existan
        if (!curso) {
            return res.status(404).json({ error: "Curso no encontrado.!" })
        }

        curso.students = curso.students.filter(
            (id) => id.toString() !== req.params.studentId
        )

        await curso.save();

        res.status(200).json({ message: `El Alumno fue eliminado del curso ${curso.title} correctamente.!` })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.delete('/:courseId', async (req, res) => {
    try {
        const curso = await Curso.findByIdAndDelete(req.params.courseId);

        // Validamos que tanto el Curso como el Alumno existan
        if (!curso) {
            return res.status(404).json({ error: "Curso no encontrado.!" })
        }

        res.status(204).end(); // Codigo 204 -> No Content

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

export default router;