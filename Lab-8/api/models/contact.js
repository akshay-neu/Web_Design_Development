import Mongoose from 'mongoose';

const ContactSchema = new Mongoose.Schema({
    "firstName": {
        type: String,
        required: "First Name is a required field."
    },
    "lastName": {
        type: String,
        required: "Last Name is a required field."
    },
    "phone": {
        type: Number,
    },
    "createDate": {
        type: Date,
        default: Date.now
    },
    "modifiedDate": {
        type: Date,
        default: Date.now,
    }
},
    {
        versionKey: false,
    });

ContactSchema.virtual('id', () => {
    return this._id.toHexString();
})
ContactSchema.set('toJSON', { virtuals: true })
const Contact = Mongoose.model("Contact", ContactSchema);
export default Contact;