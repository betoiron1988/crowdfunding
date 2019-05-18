const router = require('express').Router()
const Proyects = require('../models/Proyects')



//ruta
router.get('/proyects', (req, res, next) => {

    Proyects.find()
        .populate('owner')
        .then(proyects => {
            res.json(proyects)
        })
        .catch(err => next(err))
})


// ruta para crear proyecto
router.post('/proyects/create', (req, res, next) => {
    Proyects.create({ ...req.body })
        .then(proyects => res.status(200).json(proyects))
        .catch(err => res.status(500).json())
})

//actualizar

router.patch('/proyects/update', (req, res, next) => {

    Proyects.findByIdAndUpdate(req.body.id, {
        $set: {
            owner: req.body.owner,
            name: req.body.name, description: req.body.description, montoInversion: req.body.montoInversion,
            imageUrl: req.body.imageUrl
        }
    }, { new: true })

        .then((proyecto) => res.status(200).json(proyecto))
        .catch((err) => res.status(500).json(err))

})


//ruta para eliminar proyecto
router.delete('/proyects/delete/:id', (req, res, next) => {
    Proyects.findByIdAndRemove(req.params.id)
        .then((proyect) => res.status(200).json(proyect))
        .catch(err => res.status(500).json(err))
})









module.exports = router 