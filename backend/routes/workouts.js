const express = require('express')
const Workout = require('../models/workoutModel')
const {
    createWorkout,getWorkOuts,getWorkout,deleteWorkout,updateWorkout
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')


const router = express.Router()

router.use(requireAuth)


router.get('/',getWorkOuts)

router.get('/:id',getWorkout)

router.post('/',createWorkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)


module.exports = router