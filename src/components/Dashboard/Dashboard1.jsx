import React from 'react'
import "./Dashboard.css"
import Welcome from './Welcome.jsx'
import Contests from './Contests'
import Coder from './Coder'
function Dashboard1() {
  return (
    <>
      <Welcome name="Chetan"/>
      <div className="dash-hero">
      <Contests/>
      <Coder/>
      </div>
    </>
  )
}

export default Dashboard1