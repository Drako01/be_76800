import { Router } from "express";
import { User } from "../config/models/User.model.js";
import mongoose from "mongoose";

const router = Router();


// Obtener todos los Usuarios
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users: users })
    } catch (err) {
        return res.status(500).json({ error: "Error interno del servidor", message: err.message })
    }
})

// Crear un Usuario
router.post('/', async (req, res) => {
    try {
        const { name, email, age } = req.body;
        if (!name || !email || !age) {
            return res.status(400).json({ error: "Todos los campos son requeridos!" })
        }
        const user = new User({ name, email, age });
        await user.save();

        res.status(201).json({ message: "Usuario creado exitosamente", user })
    } catch (err) {
        return res.status(500).json({ error: "Error interno del servidor", message: err.message })
    }
})


// Obtener un usuario por su ID
router.get('/:id', async (req, res) => {
    try {
        const ID = req.params.id
        if (!mongoose.Types.ObjectId.isValid(ID)) {
            return res.status(400).json({ error: "ID con formato Invalido!" })
        }
        const user = await User.findById(ID);
        if (!user) return res.status(404).json({ error: "Usuario no encontrado" })
        res.status(200).json({ user })
    } catch (err) {
        return res.status(500).json({ error: "Error interno del servidor", message: err.message })
    }
})

// Actualizar un usuario por su ID
router.put('/:id', async (req, res) => {
    try {
        const ID = req.params.id
        if (!mongoose.Types.ObjectId.isValid(ID)) {
            return res.status(400).json({ error: "ID con formato Invalido!" })
        }

        const user = await User.findByIdAndUpdate(ID, req.body, {
            new: true,
            runValidators: true
        });
        if (!user) return res.status(404).json({ error: "Usuario no encontrado" })
        res.status(200).json({ message: "Usuario actualizado correctamente!", user })
    } catch (err) {
        return res.status(500).json({ error: "Error interno del servidor", message: err.message })
    }
})


// Obtener un usuario por su ID
router.delete('/:id', async (req, res) => {
    try {
        const ID = req.params.id
        if (!mongoose.Types.ObjectId.isValid(ID)) {
            return res.status(400).json({ error: "ID con formato Invalido!" })
        }
        const user = await User.findByIdAndDelete(ID);
        if (!user) return res.status(404).json({ error: "Usuario no encontrado" })
        res.status(204).end();
    } catch (err) {
        return res.status(500).json({ error: "Error interno del servidor", message: err.message })
    }
})


export default router;