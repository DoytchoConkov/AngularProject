const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const skinSchema = new mongoose.Schema({
    skinDate: {
        type: String,
        required: true
    },
    skinBathDuration: {
        type: String,
        required: true
    },
    skinColor: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: false
    },
    userId: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Skin', skinSchema);
