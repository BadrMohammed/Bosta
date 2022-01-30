import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavLink,
  NavbarText,
} from "reactstrap";
import { getLanguage, local, toogleLanguage } from "../../Localization/local";
import bosta_logo_ar_red from "../../assets/img/bosta_logo_ar_red.svg";
import bosta_logo_en_red from "../../assets/img/bosta_logo_en_red.svg";
import { HiOutlineMenu } from "react-icons/hi";
import RenderTrackingDropDown from "./ShipmentMenu";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [page, setPage] = useState("trackShipment");

  const toggle = () => setOpen(!isOpen);
  const getPage = (e, newPage) => {
    e.preventDefault();
    setPage(newPage);
  };
  const getHeaderItem = (title, item, Children) => {
    return (
      <li
        className={page === item ? "list_item list_item_active" : "list_item"}
      >
        {Children === undefined ? (
          <NavLink href onClick={(e) => getPage(e, item)}>
            {title}
          </NavLink>
        ) : (
          <Children />
        )}
      </li>
    );
  };

  return (
    <div>
      <Navbar expand="md" className="navbar">
        <div class="container-fluid">
          <NavbarBrand
            href="/"
            className="logo_container paddingBlock10"
            data-aos="fade-out"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <img
              fill="white"
              src={
                getLanguage() === "en" ? bosta_logo_en_red : bosta_logo_ar_red
              }
              className="imgFull"
              alt="main_logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className="toggle_btn_menu">
            <HiOutlineMenu color="#ff0000" size={25} />
          </NavbarToggler>
          <Collapse navbar isOpen={isOpen}>
            <Nav className="me-auto maxWidth nav" navbar>
              <ul className="maxWidth">
                <div
                  className={
                    getLanguage() === "ar"
                      ? "right_container_header_item"
                      : "left_container_header_item"
                  }
                >
                  {getHeaderItem(local.Home, "home")}
                  {getHeaderItem(local.Prices, "prices")}
                  {getHeaderItem(local.ContactUs, "contactus")}
                </div>

                <div
                  className={
                    getLanguage() === "ar"
                      ? "left_container_header_item container_log"
                      : "right_container_header_item container_log"
                  }
                >
                  {getHeaderItem(
                    local.SignIn,
                    "trackShipment",
                    RenderTrackingDropDown
                  )}

                  <span className="vertical_line_header" />

                  {getHeaderItem(local.SignIn, "signin")}
                </div>
              </ul>
            </Nav>
            <NavbarText
              className="lang_text primaryColor cursor"
              onClick={(e) =>
                getLanguage() === "en"
                  ? toogleLanguage("ar")
                  : toogleLanguage("en")
              }
            >
              {local.Lang}
            </NavbarText>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
