import React from 'react'

function CandidatesCard(props) {
    return (
        <>
            <center><div className="ach-card">
                <img src={props.img} alt="" />
                <h4>{props.lpa}</h4>
            </div>
            </center>
        </>
    )
}

export default CandidatesCard
