import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ComponentOne = () => {
  const [number, setNumber] = useState("")

  console.log(number.length);
  return (
    <>
      <div>ComponentOne</div>
      <input type="number" name="number" onChange={e => setNumber(e.target.value)} />
      <br />

      <small style={{ color: 'red' }}>{number.length <= 0 && "Field cannot be empty"}</small>

      <br />
      <button style={number.length <= 0 ? { cursor: "not-allowed" } : null}>
        <Link
          style={number.length <= 0 ? { pointerEvents: "none" } : null}
          to={{ pathname: "/two" }}
          state={{ phoneNumber: number }}>send
        </Link>
      </button>
    </>
  )
}

export default ComponentOne