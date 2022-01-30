import React from "react";
import { Card, Row, Col, Navbar } from "reactstrap";
import bosta_logo_ar_white from "../../assets/img/bosta_logo_ar_white.svg";
import bosta_logo_en_white from "../../assets/img/bosta_logo_en_white.svg";
import { getLanguage, local } from "../../Localization/local";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <Card className="footerCard">
      <div className="container">
        <Row>
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <div className="text-container_footer">
              <img
                alt="logo_footer"
                src={
                  getLanguage() === "en"
                    ? bosta_logo_en_white
                    : bosta_logo_ar_white
                }
              />
            </div>
            <div className="text-container_footer mt-3">
              <a href="">help@bosta.co</a>
            </div>

            <div className="text-container_footer mt-3">
              <a href="https://www.facebook.com/bostaapp/">
                <span className="social_container">
                  <FaFacebookF />
                </span>
              </a>
              <a href="https://twitter.com/bostaapp/">
                <span className="social_container">
                  <FaTwitter />
                </span>
              </a>
            </div>
          </Col>

          <Col xl={3} lg={3} md={3} sm={12} xs={12}>
            <div className="text-container_footer mt-3">
              <h4 className="primaryColor cursor">{local.Shipments}</h4>
            </div>

            <div className="text-container_footer mt-3">
              <p className="whiteColor cursor">{local.OurPricing}</p>
            </div>
            <div className="text-container_footer mt-3">
              <p className="whiteColor cursor">{local.TrackShipment}</p>
            </div>
          </Col>
          <Col xl={3} lg={3} md={3} sm={12} xs={12}>
            <div className="text-container_footer mt-3">
              <h4 className="primaryColor cursor">{local.AboutUs}</h4>
            </div>

            <div className="text-container_footer mt-3">
              <p className="whiteColor cursor">{local.ContactUs}</p>
            </div>
            <div className="text-container_footer mt-3">
              <p className="whiteColor cursor">{local.PrivacyPolicy}</p>
            </div>

            <div className="text-container_footer mt-3">
              <p className="whiteColor cursor">{local.TermsConditions}</p>
            </div>
          </Col>
        </Row>
      </div>
      <Navbar expand="md" className="navbarFooter center">
        <p>Copyright ©2019 bosta.co</p>
      </Navbar>
    </Card>
  );
};

export default Footer;
