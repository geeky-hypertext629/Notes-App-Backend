import express from 'express';
import { validateNote } from '../middleware/middleware.js';

import { addNote, getAllNotes, toggleNoteDone, updateNote, deleteNote } from '../controller/todo-controller.js';

const route = express.Router();

route.post('/notes',validateNote, addNote)
route.get('/notes', getAllNotes);
route.get('/notes/:id', toggleNoteDone);
route.put('/notes/:id', updateNote);
route.delete('/notes/:id', deleteNote);


export default route;