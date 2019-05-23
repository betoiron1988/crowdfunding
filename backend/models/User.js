const mongoose = require('mongoose');
const PLM = require('passport-local-mongoose');

const Schema = mongoose. Schema;


const userSchema = new mongoose.Schema({

    projects: {
        type:Schema.Types.ObjectId, 
        ref: 'projects'
    },
    name: String,
    email: String,
    role:{
        type:String,
        enum:['admin','investor']

    }
},

    {

        timestamps: true,
        versionKey: false
    }

)


userSchema.plugin(PLM,{usernameField: 'email'});
module.exports = mongoose.model ('User',userSchema)