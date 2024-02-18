import React from "react";

function Contests() {
  return (
    <>
      <div className="contest-box">
        <table>
          <tr>
            <td colSpan={3}>
            <center><h3>Top Contests</h3></center>
            </td>
          </tr>
          <tr>
            <th><td>S.No</td></th>
            <th><td>Platform</td></th>
            <th><td>Contests Name</td></th>
          </tr>

          <tr>
            <td>
                1.
            </td>
            <td>
                CodeChef
            </td>
            <td>
                Contest 1
            </td>
          </tr>
          
          <tr>
            <td>
                2.
            </td>
            <td>
                Codeforces
            </td>
            <td>
                Contest 2
            </td>
          </tr>

          <tr>
            <td>
                3.
            </td>
            <td>
                LeetCode
            </td>
            <td>
                Contest 3
            </td>
          </tr>
        </table>
        <div className="contest-link-div"><a className="contest-link" href="">See more upcoming contests</a></div>
      </div>
    </>
  );
}

export default Contests;