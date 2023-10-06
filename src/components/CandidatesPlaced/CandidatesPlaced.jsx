import React from 'react'
import "./CandidatesPlaced.css"
import CandidatesCard from './CandidatesCard'
function CandidatesPlaced() {
  return (
    <>
    <center><h1>OUR ACHIVERS</h1></center>
        <marquee behavior="scrolling" direction="">
      <div className="marque-box">
        <div className="one">
        <CandidatesCard img="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-25.jpg" lpa="58 LPA"/>
            <CandidatesCard img="https://cdn-icons-png.flaticon.com/512/147/147142.png" lpa="44 LPA"/>
            <CandidatesCard img="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" lpa="42 LPA"/>
            <CandidatesCard img="https://cdn-icons-png.flaticon.com/512/194/194938.png" lpa="36 LPA"/>
            <CandidatesCard img="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-25.jpg" lpa="10 LPA"/>
            <CandidatesCard img="https://cdn-icons-png.flaticon.com/512/147/147142.png" lpa="20 LPA"/>
            <CandidatesCard img="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" lpa="30 LPA"/>
            <CandidatesCard img="https://cdn-icons-png.flaticon.com/512/194/194938.png" lpa="14 LPA"/>
            

        </div>
      </div>
        </marquee>
    </>
  )
}

export default CandidatesPlaced
