const {Schema, model} = require('mongoose')

const schema = new Schema({
    img: {
        data: Buffer,
        contentType: String
    },
    guest: {type: String, required: true, unique: true},
    eventName: {type: String, required: true, unique: true},
    info: {type: Array, required: true},
    text: {type: String, required: true},
    

})

module.exports = model('Post', schema)