import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./register.css"
import { Form } from "react-bootstrap"
import {Validate} from "./validate"
export default function Register() {
    return (
        <div className="register-container">
          <table>
            <tr>
              <td>
              <label htmlFor="std-roll">Enter your Unique ID</label>
              </td>
              <td>
              <input id="uid" type="text" />
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor="std-roll">Enter your First Name</label>
              </td>
              <td>
              <input id="fn" type="text" />
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor="std-roll">Enter your Last Name</label>
              </td>
              <td>
              <input id="ln" type="text" />
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor="std-roll">Enter your D.O.B</label>
              </td>
              <td>
              <input id="dob" type="date" />
              </td>
            </tr>
            <tr>
              <td>
              <label id="roll" htmlFor="std-roll">Enter your E-Mail</label>
              </td>
              <td>
              <input type="email" />
              </td>
            </tr>
            <tr>
              <td>
              <label id="phone" htmlFor="phone">Enter your Phone No.</label>
              </td>
              <td>
              <input maxLength={10} type="tel" />
              </td>
            </tr>
          </table>
          <strong>
            NOTE: MAKE SURE YOU ENTER THE DETAILS PROPERLY IN THE ABOVE FORM AS THESE DETAILS WILL NOT BE CHANGED AGAIN
          </strong>
          <label htmlFor="accept"><input type="checkbox" className="accept" name="accept" id="" />I've thereby read the above note point carefully and the details entered by me are correct.</label>
        <button onClick={Validate} className="btn btn-primary p-2">
          <Link className="link" to="/register">
          Register
            </Link>
        </button>
        </div>
    )
    
}
