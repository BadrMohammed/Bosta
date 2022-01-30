import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import * as actions from "../../Redux/Actions/index";
import ShipmentFilters from "./ShipmentFilters";
import ShipmentDetails from "./ShipmentDetails";
import ShipmentCard from "./ShipmentCard";
import Header from "../../GeneralComponents/Header/Header";
import Footer from "../../GeneralComponents/Footer/Footer";
class Shipments extends Component {
  componentDidMount() {
    this.props.fetchShipments(this.props.filters.shipment_id);
  }
  render() {
    const { data, general, filters, fetchShipments } = this.props;
    return (
      <div className="page_container">
        <Header />
        <div className="container">
          <section>
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mt-5">
                <ShipmentFilters
                  general={general}
                  filters={filters}
                  fetchShipments={fetchShipments}
                  data={data}
                />
              </Col>
            </Row>
          </section>
          <section>
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mt-3">
                <ShipmentCard shipment={data.shipment} />
              </Col>
            </Row>
          </section>

          <section>
            <Row>
              <ShipmentDetails shipment={data.shipment} />
            </Row>
          </section>
        </div>
        <section className="mt-5">
          <Footer />
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ ShipmentR }) => {
  return { data: ShipmentR.data, filters: ShipmentR.filters };
};
export default connect(mapStateToProps, actions)(Shipments);
