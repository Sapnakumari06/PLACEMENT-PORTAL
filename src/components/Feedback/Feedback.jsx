import React from 'react'
import FeedbackCard from './FeedbackCard'

function Feedback() {
  return (
    <>
    <div className="feed-cont">
        <div>
      <FeedbackCard img="https://cdn-icons-png.flaticon.com/512/194/194938.png" name="Sapna Kumari" roll="217R1A66J0"/>
      <FeedbackCard img="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-25.jpg" name="Leo Nikhil" roll="217R1A66G5"/>
      </div>
      <div>
      <FeedbackCard img="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" name="Chetan Sirigiri" roll="227R1A66E1"/>
      <FeedbackCard img="https://cdn-icons-png.flaticon.com/512/147/147142.png" name="Farhan Ahmed" roll="217R1A05E5"/>
      </div>
      </div>
    </>
  )
}

export default Feedback
