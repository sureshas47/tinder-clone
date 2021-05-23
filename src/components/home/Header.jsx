import React from "react";
import { Link,useHistory } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./header.css";

function Header({ backButton }) {
  const history=useHistory();
  return (
    <>
      <div className="header">
        {/* wrap with icon button so we reflect a click */}
        {backButton ? (
          // BACK BUTTON
          <IconButton onClick={()=>history.replace(backButton)}>
            <ArrowBackIosIcon fontSize="large" className="header-icon"/>
          </IconButton>
        ) : (
          // PERSON ICON BUTTON
          <IconButton>
            <PersonIcon fontSize="large" className="header-icon" />
          </IconButton>
        )}
        {/* LOGO */}
        <Link to="/">
          <img
            className="header-logo"
            src="https://cdn.designrush.com/uploads/inspirations/2354/crop_683_410__1513706350_604_tin.png"
            alt="tinder.com"
          />
        </Link>
{/* MeSSAGE BUTTON */}
        <IconButton>
          <Link to="/chat">
            <ForumIcon fontSize="large" className="header-icon" />
          </Link>
        </IconButton>
      </div>
    </>
  );
}

export default Header;
