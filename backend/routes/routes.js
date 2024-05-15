import express from 'express';
import {SignUpUser} from '../controller/usersignup_cont.js'

const router = express.Router();

router.post('/signup', SignUpUser);



export default router;
