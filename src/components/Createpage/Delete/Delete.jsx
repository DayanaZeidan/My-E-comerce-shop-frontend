import React, { useState } from 'react'
import './Delete.css'
import axios from 'axios';

function Delete() {
    const [id, setId] = useState(0);
  
    const handleId = (e) => {
      setId(e.target.value);
    };
  
    const del = (e) => {
      e.preventDefault();
      axios
        .delete(`http://localhost:5000/products/delete/${id}`)
        .then((res) => {
          console.log(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  return (
    <form onSubmit={del}>
      <input type="number" placeholder="id" onChange={handleId} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Delete