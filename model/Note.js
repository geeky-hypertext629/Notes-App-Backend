import mongoose from "mongoose";


const NoteSchema = new mongoose.Schema({
  data: {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  done: {
    type: Boolean,
    default: false
  },
},
  { timestamps: true },
)

const note = mongoose.model('note',NoteSchema);

export default note;