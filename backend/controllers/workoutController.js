const express = require("express");
const mongoose = require("mongoose");
const Workout = require("../models/workoutModel");

//get all workouts

const getWorkOuts = async (req, res) => {
  const workouts = await Workout.find({});

  res.status(200).json(workouts);
};

//get single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such document" });
  }

  res.status(200).json(workout);
};

//create new workout

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  let emptyFeilds = []

  if(!title){
    emptyFeilds.push('title')
  }
  if(!load){
    emptyFeilds.push('load')
  }
  if(!reps){
    emptyFeilds.push('reps')
  }
  if(emptyFeilds.length > 0){
    return res.status(400).json({error:'please all the feilds',emptyFeilds})
  }

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete workout

const deleteWorkout = async (req,res) =>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID" });
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout) {
        return res.status(404).json({ error: "No such document" });
    }

    res.status(200).json(workout)

}

//update workout

const updateWorkout = async (req,res) =>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID" });
    }

    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!workout){
        res.status(404).json({error:"Update failed"})
    }

    res.status(200).json(workout)

}

module.exports = {
  createWorkout,
  getWorkOuts,
  getWorkout,
  deleteWorkout,
  updateWorkout
};
