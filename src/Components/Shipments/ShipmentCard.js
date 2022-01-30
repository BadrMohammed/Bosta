import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { getLocalDate } from "../../GeneralComponents/GeneralFunctions";
import { local } from "../../Localization/local";
import { Stepper, Step } from "react-form-stepper";
import { FiCheck, FiShoppingBag } from "react-icons/fi";
import { FaShippingFast, FaShoppingCart } from "react-icons/fa";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

const ShipmentCard = ({ shipment }) => {
  const renderStatus = () => {
    if (shipment.CurrentStatus.state === "DELIVERED") {
      return <p className="deliveryShipment">{local.ShipmentDelivered}</p>;
    }

    if (shipment.CurrentStatus.state === "DELIVERED_TO_SENDER") {
      return <p className="primaryColor">{local.ShipmentCancelled}</p>;
    }
  };

  const getActiveStep = () => {
    if (shipment.CurrentStatus.state === "TICKET_CREATED") {
      return 1;
    } else if (shipment.CurrentStatus.state === "PACKAGE_RECEIVED") {
      return 2;
    } else if (
      shipment.CurrentStatus.state === "OUT_FOR_DELIVERY" ||
      shipment.CurrentStatus.state === "DELIVERED_TO_SENDER"
    ) {
      return 3;
    } else if (shipment.CurrentStatus.state === "DELIVERED") {
      return 4;
    }
  };

  const getIcon = (index) => {
    if (index === 2 && shipment.CurrentStatus.state === "DELIVERED_TO_SENDER") {
      return <FaShippingFast />;
    } else {
      if (getActiveStep() >= +index + 1) {
        return <FiCheck />;
      } else {
        if (index === 0) {
          return <FiShoppingBag />;
        }
        if (index === 1) {
          return <FaShoppingCart />;
        }
        if (index === 2) {
          return <FaShippingFast />;
        }
        if (index === 3) {
          return <AiOutlineDeliveredProcedure />;
        }
      }
    }
  };
  return shipment ? (
    <Card>
      <CardHeader className="shipment_Card_header">
        <Row>
          <Col xl={3} lg={3} md={4} sm={12} xs={12} className="text-center">
            <p className="shipment_Card_title">
              {local.ShipmentNumber + " " + shipment.TrackingNumber}
            </p>
            {renderStatus()}
          </Col>
          <Col xl={3} lg={3} md={4} sm={12} xs={12} className="text-center">
            <p className="shipment_Card_title">{local.LastUpdated}</p>
            <p>{getLocalDate(shipment.CurrentStatus.timestamp)}</p>
          </Col>
          <Col xl={3} lg={3} md={4} sm={12} xs={12} className="text-center">
            <p className="shipment_Card_title">{local.SellerName}</p>
            <p>Amazone</p>
          </Col>
          <Col xl={3} lg={3} md={4} sm={12} xs={12} className="text-center">
            <p className="shipment_Card_title">{local.DeliveryTimeWithin}</p>
            <p>{3 + local.January + 2020}</p>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mx-auto">
            <div
              style={{ width: "100%", overflow: "hidden", direction: "ltr" }}
            >
              <Stepper
                activeStep={getActiveStep()}
                connectorStateColors
                hideConnectors={false}
                className={
                  shipment.CurrentStatus.state === "DELIVERED"
                    ? "steps_container_successd"
                    : shipment.CurrentStatus.state === "DELIVERED_TO_SENDER"
                    ? "steps_container_error"
                    : ""
                }
              >
                {[
                  { label: local.ShipmentCreated },
                  { label: local.ShipmentReceived },

                  {
                    label:
                      shipment.CurrentStatus.state === "DELIVERED_TO_SENDER"
                        ? local.ShipmentOutDelivery +
                          "," +
                          local.ShipmentCanceledBySender
                        : local.ShipmentOutDelivery,
                  },
                  { label: local.ShipmentDelivered2 },
                ].map((step, index) => {
                  return (
                    <Step
                      key={step.label}
                      label={step.label}
                      index={index}
                      children={getIcon(index)}
                    />
                  );
                })}
              </Stepper>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  ) : null;
};

export default ShipmentCard;
