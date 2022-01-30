import { Request } from "../Api";
import { MERGE_SHIPMENTS_PROPS, UPDATE_SHIPMENTS_PROPS } from "./types";

export const fetchShipments = (shipment_id) => (dispatch) => {
  dispatch({
    type: UPDATE_SHIPMENTS_PROPS,
    payload: [{ prop: "data.isLoading", value: true }],
  });
  Request()
    .get(`/shipments/track/${shipment_id}`)
    .then((res) => {
      if (res.status === 200 && res.data) {
        dispatch({
          type: UPDATE_SHIPMENTS_PROPS,
          payload: [{ prop: "data.shipment", value: res.data }],
        });
        dispatch({
          type: MERGE_SHIPMENTS_PROPS,
          payload: [{ prop: "data.items", value: res.data }],
        });
      }
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(
      dispatch({
        type: UPDATE_SHIPMENTS_PROPS,
        payload: [{ prop: "data.isLoading", value: false }],
      })
    );
};
