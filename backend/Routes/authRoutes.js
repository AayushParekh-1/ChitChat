import express from 'express'
import { login,signin,logout } from '../Controllers/authController.js';

const router = express.Router();

router.post('/signin', signin)
router.post('/login', login)
router.post('/logout', logout)

export default router