import React from "react";
import image from "./amazon-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img alt="amazon" className="header__logo" src={image} />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOn">
              Hello {!user ? "Guest" : user.mail}
            </span>
            <span className="header__optionLineOn">
              {user ? "Sign Uot" : "Sign In"}{" "}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOn">Returns</span>
          <span className="header__optionLineOn">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOn">Your</span>
          <span className="header__optionLineOn">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
