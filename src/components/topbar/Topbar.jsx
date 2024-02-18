import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
       
            {user ? (
          <Link className="link" to="/settings">
            {/* <img
              className="topImgright"
              src="https://i.ibb.co/xqNmL8K/ayush-side-1.jpg"
              alt=""
            /> */}
          </Link>
          
        ) : (
          <ul className="topList">
            
            
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
   
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/cabin">
                PLACEMENT STATS
            </Link>
          </li>
          <div classname="midlogo">
            <img 
            className="logoimg"
          src="https://i.ibb.co/tsPNQ9g/placements.jpg" 
          alt="logo-ayush-center" ></img></div>
          <li className="topListItem">
          <Link className="link" to="/startups">
              BLOGS 
            </Link>
          </li>
        
          <li className="topListItem">
            <Link className="link" to="/write">
              Dashboard
            </Link>
          </li>
          
        </ul>
      </div>
      <div className="topRight">
      
       
        <i className="topSearchIcon fas fa-search"></i>
        <li className="topListItem">
              <Link className="link" to="/login">
                 LOGIN/REGISTER
              </Link>
            </li>
        {user && <li className="topright"></li>}
      </div>
    </div>
  );
}



