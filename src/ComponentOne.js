import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ComponentOne = () => {
  const [number, setNumber] = useState()

  console.log(number);
  return (
    <>
      <div>ComponentOne</div>
      <input type="number" name="number" onChange={e => setNumber(e.target.value)} />
      <br />
      <button>  <Link to={{ pathname: "/two" }} state={{ phoneNumber: number }}>send</Link></button>
    </>
  )
}

export default ComponentOne