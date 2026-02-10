import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {title : 'Inicio'})
})

router.get('/productos', (req, res) => {
    res.render('products', {title : 'Productos'})
})

router.get('/chat', (req, res) => {
    res.render('chat', {title : 'Mi Chat'})
})

export default router;