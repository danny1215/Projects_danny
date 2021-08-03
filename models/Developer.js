const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const developerSchema = new Schema({
   
    DeveFirst_Name: {
        type: String,
        required: true
    },
    DeveLast_name: {
        type: String,
        required: true
    },
    DeveRole: {
        type: String,
        required: false
    },
    
    Job_completed: {
        type: Boolean
    }
    
});

const Developer = mongoose.model("Developer", developerSchema);


module.exports = Developer;