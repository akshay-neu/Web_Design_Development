import Mongoose from 'mongoose';


//Here we can defined the schema that will be saved in the database
const TodoSchema = new Mongoose.Schema({
    "title": {
        type: String,
        required: true
    }, 

    "description": {
        type: String,
        required: true
    },

    "createdDate": {
        type: Date,
        default: Date.now
    },

    "lastModifiedDate": {
        type: Date,
        default: Date.now
    }
},
{
    versionKey: false,
});

TodoSchema.virtual('id', () => this._id.toHexString());

TodoSchema.set('toJSON', { virtuals: true });

const Todo = Mongoose.model('Todo', TodoSchema);


export default Todo;