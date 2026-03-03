import mongoose, { Schema } from "mongoose";

const cursoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    description: {
        type: String
    },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user'}]
});


export const Curso = mongoose.model('Curso', cursoSchema);