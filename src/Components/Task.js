import React from 'react';
import "../App.css";

export default function Task({task, time}) {
  return (
    <div className='task'>
      <h3>Task Name: {task}</h3>
      <h3>Time to Complete: {time}</h3>
    </div>
  )
}
