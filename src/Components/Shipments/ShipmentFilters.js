import React, { useEffect } from "react";
import Select from "react-select/";
import { local } from "../../Localization/local";
import {
  CLEAR_SHIPMENTS_STATE,
  UPDATE_SHIPMENTS_PROPS,
} from "../../Redux/Actions/types";

const ShipmentFilters = ({ general, filters, fetchShipments, data }) => {
  useEffect(() => {
    if (!filters.shipment_id && data.items) {
      general([], CLEAR_SHIPMENTS_STATE);
    }
  }, [filters.shipment_id]);

  let options = [
    { label: 6636234, value: 6636234 },
    { label: 7234258, value: 7234258 },
    { label: 9442984, value: 9442984 },
    { label: 1094442, value: 1094442 },
  ];

  const handleShipmentSelect = (item) => {
    if (item) {
      let shipment = data.items.find(
        (entry) => +entry.TrackingNumber === item.value
      );
      if (shipment !== undefined) {
        general(
          [{ prop: "data.shipment", value: shipment }],
          UPDATE_SHIPMENTS_PROPS
        );
      } else {
        fetchShipments(item.value);
      }

      general(
        [{ prop: "filters.shipment_id", value: item.value }],
        UPDATE_SHIPMENTS_PROPS
      );
    } else {
      general(
        [{ prop: "filters.shipment_id", value: null }],
        UPDATE_SHIPMENTS_PROPS
      );
    }
  };
  const getDefaultValue = () => {
    let shipment = options.find((ship) => ship.value === filters.shipment_id);

    if (shipment !== undefined) {
      return shipment;
    }
  };

  return (
    <div>
      <Select
        key={filters.shipment_id}
        value={getDefaultValue()}
        options={options}
        placeholder={local.EnterShipmentId}
        isSearchable={true}
        // isClearable={true}
        onChange={handleShipmentSelect}
      />
    </div>
  );
};

export default ShipmentFilters;
