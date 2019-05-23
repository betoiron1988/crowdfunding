const router = require('express').Router()
const Projects = require('../models/Projects')
const uploadCloud = require('../handlers/cloudinary')



//ruta
router.get('/projects', (req, res, next) => {

    Projects.find()
        .populate('owner')
        .then(projects => {
            res.json(projects)
        })
        .catch(err => next(err))
})


// ruta para crear proyecto
router.post('/projects/create', uploadCloud.single('picture'),  (req, res, next) => {
    let photo = req.file.url
    Projects.create({ ...req.body })
        .then(projects => {
            Projects.findByIdAndUpdate(projects._id, {imageURL: photo}, {new: true})
                .then(project => res.status(200).json(project))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
})

//actualizar

router.patch('/projects/update', (req, res, next) => {

    Projects.findByIdAndUpdate(req.body.id, {
        $set: {
            owner: req.body.owner,
            name: req.body.name, description: req.body.description, montoInversion: req.body.montoInversion,
            imageURL: req.body.imageURL
        }
    }, { new: true })

        .then((projecto) => res.status(200).json(projecto))
        .catch((err) => res.status(500).json(err))

})


//ruta para eliminar projecto
router.delete('/projects/delete/:id', (req, res, next) => {
    Projects.findByIdAndRemove(req.params.id)
        .then((project) => res.status(200).json(project))
        .catch(err => res.status(500).json(err))
})









module.exports = router 