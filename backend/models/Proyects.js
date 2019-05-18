const mongoose= require('mongoose')
const Schema = mongoose.Schema


const proyectSchema= new mongoose.Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
    name: String,
    description:String,
    montoInversion: Number,
    imageURL: String,
    
},
{
    timestamps: true,
    versionKey: false
})

module.exports= mongoose.model('Proyects',proyectSchema)