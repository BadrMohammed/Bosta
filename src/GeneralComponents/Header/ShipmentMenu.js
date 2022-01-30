import {
  Button,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  UncontrolledDropdown,
} from "reactstrap";
import { getLanguage, local } from "../../Localization/local";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { UPDATE_SHIPMENTS_PROPS } from "../../Redux/Actions/types";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/index";
const RenderTrackingDropDown = ({
  shipments,
  shipment_filters,
  general,
  fetchShipments,
}) => {
  const [isOpen, setOpen] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    if (shipment_filters.shipment_id && shipments) {
      let shipment = shipments.items.find(
        (entry) => +entry.TrackingNumber === shipment_filters.shipment_id
      );
      if (shipment !== undefined) {
        general(
          [{ prop: "data.shipment", value: shipment }],
          UPDATE_SHIPMENTS_PROPS
        );
      } else {
        fetchShipments(shipment_filters.shipment_id);
      }
    }
  };

  const toggle = () => setOpen(!isOpen);
  return (
    <UncontrolledDropdown direction="down" toggle={toggle} isOpen={isOpen}>
      <DropdownToggle
        caret
        data-toggle="dropdown"
        tag="span"
        className="dropdownToggle"
      >
        {local.TrackShipment}
      </DropdownToggle>
      <DropdownMenu
        data-aos="fade-out"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        modifiers={{
          setMaxHeight: {
            enabled: true,
            order: 890,
            fn: (data) => {
              return {
                ...data,
                styles: {
                  ...data.styles,
                  overflow: "auto",
                  borderRadius: "5px",
                  border: "none",
                  marginTop: "20px",
                  background: "red",
                  backgroundColor: "#fafafa",
                  textAlign: getLanguage() === "en" ? "left" : "right",
                  minWidth: "300px",
                  // height: "150px",
                  marginInlineEnd: getLanguage() === "en" ? "70px" : "-70px",
                },
              };
            },
          },
        }}
      >
        <h3 className="ml-3 mr-3 mt-3 primaryColor">{local.TrackShipment}</h3>
        <p className="ml-3 mr-3 mt-3 header_menu_descripttion">
          {local.EnterShipmentNumber}
        </p>

        <Form>
          <div className="flex alignItem ml-3 mr-3 mt-3">
            <Input
              className="input_search_menu"
              placeholder={local.ShipmentNumber}
              value={shipment_filters.shipment_id}
              onChange={(e) =>
                general(
                  [{ prop: "filters.shipment_id", value: e.target.value }],
                  UPDATE_SHIPMENTS_PROPS
                )
              }
              type="number"
            />
            <Button
              color="danger"
              className="btn_search_menu"
              onClick={handleSearch}
            >
              <FiSearch />
            </Button>
          </div>
        </Form>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

const mapStateToProps = ({ ShipmentR }) => {
  return { shipments: ShipmentR.data, shipment_filters: ShipmentR.filters };
};
export default connect(mapStateToProps, actions)(RenderTrackingDropDown);
