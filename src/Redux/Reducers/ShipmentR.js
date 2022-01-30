import {
  UPDATE_SHIPMENTS_PROPS,
  MERGE_SHIPMENTS_PROPS,
  DELETE_SHIPMENTS_PROPS,
  CLEAR_SHIPMENTS_STATE,
} from "../Actions/types";
import * as general from "./methods";

const INITIAL_STATE = {
  data: {
    items: [],
    shipment: null,
    isLoading: false,
  },

  filters: { shipment_id: 6636234 },
};

const ShipmentR = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SHIPMENTS_PROPS: {
      return general.updateProps(state, action);
    }
    case MERGE_SHIPMENTS_PROPS: {
      return general.mergeProps(state, action);
    }
    case DELETE_SHIPMENTS_PROPS: {
      return general.deleteProps(state, action);
    }
    case CLEAR_SHIPMENTS_STATE: {
      let newState = state;
      newState = INITIAL_STATE;
      return newState;
    }

    default:
      return state;
  }
};

export default ShipmentR;
