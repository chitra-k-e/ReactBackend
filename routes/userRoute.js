import express from 'express';
import {fetch, create, update, Delete, FindUser} from '../controller/userController.js';
const router = express.Router();
router.get('/fetch',fetch);
router.post('/create',create);
router.put('/update/:id',update);
router.delete('/delete/:id',Delete);
router.get('/FindUser/:id',FindUser);
export default router;