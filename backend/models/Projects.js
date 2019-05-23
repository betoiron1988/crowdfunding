const mongoose= require('mongoose')
const Schema = mongoose.Schema


const projectSchema= new mongoose.Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
    name: String,
    tagline:String,
    description:String,
    contributor:String,
    montoInversion: Number,
    imageURL: String,
    
},
{
    timestamps: true,
    versionKey: false
})

module.exports= mongoose.model('Projects',projectSchema)