import React from 'react'
import "./CompanysMarquee.css"
function CompanysMarquee() {
  return (
    <>
    <center><h1>
        COMPANY VISITED
    </h1></center>
     <div className="marq-box">
        <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/512/6033/6033716.png" alt="" />
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-flipkart-226594.png" alt="" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png" alt="" />
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-zomato-1937646-1637644.png" alt="" />
        <img src="https://iconape.com/wp-content/png_logo_vector/jp-morgan-2.png" alt="" />
        <img src="data:image/png;base64,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" alt="" />
        <img src="https://assets.materialup.com/uploads/ad34971d-a8fe-4fcc-9a30-0008043f2553/preview.jpg" alt="" /><strong> and many more...</strong>
    </div> 
    </>
  )
}

export default CompanysMarquee
