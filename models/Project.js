const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
   
    Project_Name: {
        type: String,
        required: true
    },
    DeveFirst_Name:{
        type: String,
        required: true
    },
    Project_Detail:{
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

const Project = mongoose.model("Project", projectSchema);


module.exports = Project;