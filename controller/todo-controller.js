import Note from '../model/Note.js';
import APIError from '../utils/APIError.js';


export const addNote = async (req, response,next) => {
    try {
        const data = {
            title: req.body.title,
            content: req.body.content,
        }
        const newNote = await Note.create({
            data : data,
        })

        await newNote.save();

        return response.status(200).json(newNote);
    } catch (error) {
        return next(new APIError(error.message, 500, true));
    }
}

export const getAllNotes = async (request, response,next) => {
    try {
        const notes = await Note.find({}).sort({ 'createdAt': -1 })

        return response.status(200).json(notes);
    } catch (error) {
        return next(new APIError(error.message, 500, true));
    }
}

export const toggleNoteDone = async (request, response,next) => {
    try {
        const noteRef = await Note.findById(request.params.id);
        
        const note = await Note.findOneAndUpdate(
            { _id: request.params.id },
            { done: !noteRef.done }
            )
            
            await note.save();
            
            return response.status(200).json(note);
        } catch (error) {
            return next(new APIError(error.message, 500, true));
        }
    }
    
    export const updateNote = async (request, response,next) => {
        try {
            await Note.findOneAndUpdate(
                { _id: request.params.id },
                { data: request.body.data }
                )
                
                const note = await  Note.findById(request.params.id);
                
                return response.status(200).json(note);
            } catch (error) {
                return next(new APIError(error.message, 500, true));
            }
        }
        
        export const deleteNote = async (request, response,next) => {
            try {
                const note = await Note.findByIdAndDelete(request.params.id)
                
                return response.status(200).json(note);
            } catch (error) {
                return next(new APIError(error.message, 500, true));
            }
        }