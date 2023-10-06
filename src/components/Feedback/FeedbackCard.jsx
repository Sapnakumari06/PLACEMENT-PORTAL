import React from 'react'
import "./FeedbackCard.css"
function FeedbackCard(props) {
  return (
    <>
     <div className="feed-card">
        <div className="left">
            <center>
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <p>{props.roll}</p>
            </center>
        </div>
        <div className="right">
            &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sit commodi officia blanditiis ipsam optio fugiat nam dolor totam, quia non porro minima. Nisi tempora nihil labore delectus perspiciatis a ducimus, sit vitae quaerat cumque eaque maiores quisquam ab aperiam. &quot; 
        </div>
    </div> 
    </>
  )
}

export default FeedbackCard
