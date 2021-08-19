const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const skinSchema = new mongoose.Schema({
    skinDate: {
        type: String,
        unique: true,
        required: true
    },
    skinBathDuration: {
        type: Number,
        required: false
    },
    skinColor: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: "User"
    },
   
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Skin', skinSchema);
