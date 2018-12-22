import mongoose from 'mongoose'

const Schema = mongoose.Schema
const questionSchema = new Schema({
  content: { type: 'String', required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  answers: { type: 'String', required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

export default mongoose.model('Question', questionSchema)
