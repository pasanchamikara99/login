import React from "react";

const WorkoutDetails = ({ workout }) => {

    const handleClick = async() =>{
        const responce = await fetch('/api/workouts/' + workout._id,{
            method:"DELETE"
        })

        const json = await responce.json()

        if(responce.ok){
            console.log(json)
        }
    }


  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (Kg) : </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps : </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

export default WorkoutDetails;
