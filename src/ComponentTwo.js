import React from 'react'
import { useLocation } from 'react-router-dom';

const ComponentTwo = () => {

  const history = useLocation()
  console.log(history)

  return (
    <>
      <div>ComponentTwo</div>
      <input type="number" name="number" defaultValue={history.state.phoneNumber} />
    </>
  )
}

export default ComponentTwo