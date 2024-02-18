import React from 'react'

function Coder() {
  return (
    <>
     <div className="contest-box">
        <table>
          <tr>
            <td colSpan={3}>
            <center><h3>Top Coders</h3></center>
            </td>
          </tr>
          <tr>
            <th><td>S.No</td></th>
            <th><td>Coder Name</td></th>
            <th><td>Score</td></th>

          </tr>
          
          <tr>
            <td>
                1.
            </td>
            <td>
                Sapna Kumari
            </td>
            <td>
              300
            </td>
          </tr>
          
          <tr>
            <td>
                2.
            </td>
            <td>
                Leo Nikhil
            </td>
            <td>
              200
            </td>
          </tr>

          <tr>
            <td>
                3.
            </td>
            <td>
                Farhan Ahmed
            </td>
            <td>
              100
            </td>
          </tr>
        </table>
        <div className="contest-link-div"><a className="contest-link" href="">See more</a></div>
      </div> 
    </>
  )
}

export default Coder