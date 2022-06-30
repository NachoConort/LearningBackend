import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => res.render('index', {title: 'Hola soy nacho'}));
router.get('/about', (req, res) => res.render('about', {title: 'About'}));
// router.post('/', (req, res) => res.send('Server up successfully'));

export default router;
