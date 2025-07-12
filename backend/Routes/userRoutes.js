import express from 'express'
// import getUsersForSidebar from
import { protectRoute } from '../middleware/protectRoute.js';
import { getUsersForSidebar } from '../Controllers/userController.js';
const router = express.Router();

router.get("/",protectRoute, getUsersForSidebar)

export default router