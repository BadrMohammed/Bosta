import React from "react";
import { Button, Card, Col, Row, Table } from "reactstrap";
import { alignTextRight } from "../../GeneralComponents/GeneralStyle";
import { getLanguage, local } from "../../Localization/local";
import bosta_logo_ar_red from "../../assets/img/bosta_logo_ar_red.svg";
import bosta_logo_en_red from "../../assets/img/bosta_logo_en_red.svg";
const ShipmentDetails = ({ shipment }) => {
  const renderDetail = (step) => {
    if (step === "TICKET_CREATED") {
      return local.ShipmentCreated;
    } else if (step === "PACKAGE_RECEIVED") {
      return local.ShipmentReceived;
    } else if (step === "OUT_FOR_DELIVERY") {
      return local.ShipmentOutDelivery;
    } else if (step === "DELIVERED") {
      return local.ShipmentDelivered2;
    } else if (step === "DELIVERED_TO_SENDER") {
      return local.ShipmentNotDelivered;
    }
  };
  const renderTableBody = () => {
    if (shipment) {
      if (shipment.TransitEvents) {
        let states = [];
        shipment.TransitEvents.filter((entry) => {
          if (
            (entry.state === "TICKET_CREATED" ||
              entry.state === "PACKAGE_RECEIVED" ||
              entry.state === "OUT_FOR_DELIVERY" ||
              entry.state === "DELIVERED" ||
              entry.state === "DELIVERED_TO_SENDER") &&
            !states.find((e) => e.state === entry.state)
          ) {
            states.push(entry);
          }
        });

        let newStates = Array.from(new Set(states.map((a) => a)));

        let place = newStates.find((st) => st.hub);
        return newStates.map((step, index) => {
          return (
            <tr key={index} className="text-center" id="table_tb_tr">
              <td id="table_td">{place !== undefined ? place.hub : ""}</td>
              <td id="table_td">
                {getLanguage() === "ar"
                  ? new Date(step.timestamp).toLocaleDateString("ar-EG")
                  : new Date(step.timestamp).toLocaleDateString("en-US")}
              </td>
              <td id="table_td">
                {getLanguage() === "ar"
                  ? new Date(step.timestamp).toLocaleTimeString("ar-EG")
                  : new Date(step.timestamp).toLocaleTimeString("en-US")}
              </td>
              <td id="table_td">
                {step.state === "DELIVERED_TO_SENDER" ? (
                  <p>
                    {renderDetail(step.state)}
                    <br />
                    <span className="primaryColor">
                      {local.ShipmentCanceledBySender}
                    </span>
                  </p>
                ) : (
                  renderDetail(step.state)
                )}
              </td>
            </tr>
          );
        });
      }
    }
  };
  return (
    <React.Fragment>
      <Col xl={8} lg={8} md={8} sm={12} xs={12} className="mt-4">
        <p className="card_title">{local.ShipmentDetails}</p>
        <Table responsive style={{ border: "1px solid lightgray" }}>
          <thead>
            <tr className="text-center" id="table_th_tr">
              <th id="table_td">{local.Branch}</th>
              <th id="table_td">{local.Date}</th>
              <th id="table_td">{local.Time}</th>
              <th id="table_td">{local.Details}</th>
            </tr>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </Table>
      </Col>

      <Col xl={4} lg={4} md={4} sm={12} xs={12} className="mt-4">
        <p className="card_title">{local.DeliveryAddress}</p>

        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <Card className={"card_address " + alignTextRight()}>
              <p>القاهرة الجديدة,القاهرة,مصر</p>
            </Card>
          </Col>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mt-4">
            <Card>
              <Row className="alignItem ml-3 mr-3 mt-3 mb-3">
                <Col xl={4} lg={4} md={4} sm={4} xs={4} className="mx-auto">
                  <img
                    alt="ticket_img"
                    src={
                      getLanguage() === "en"
                        ? bosta_logo_en_red
                        : bosta_logo_ar_red
                    }
                    width="70"
                    height="70"
                  />
                </Col>
                <Col xl={8} lg={8} md={8} sm={8} xs={8} className="mx-auto">
                  <p>{local.ShipmentProblem}</p>
                  <Button color="danger" className="btnReport">
                    {local.ReportProblem}
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>
    </React.Fragment>
  );
};

export default ShipmentDetails;
