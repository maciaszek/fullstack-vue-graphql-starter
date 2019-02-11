const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    categories: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    messages: [{
        messageBody: {
            type: String,
            require: true
        },
        messageDate: {
            type: Date,
            default: Date.now
        },
        messageUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true
        }
    }]
});

module.exports = mongoose.model('Post', PostSchema);