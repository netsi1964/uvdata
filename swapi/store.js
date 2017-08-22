import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import * as types from "./types";

const defaultData = {
	endpoint: null,
	data: {
		/** will contain response from SWAPI, indexed by endpiont */
	},
	operations: 0
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case types.SET_DATA: {
			const { endpoint, data } = action.payload;
			return {
				...state,
				data: {
					...state.data,
					[endpoint]: data
				}
			};
		}

		case types.PICK_ENDPOINT: {
			return {
				...state,
				endpoint: action.payload
			};
		}

		case types.START_LOAD: {
			return {
				...state,
				operations: state.operations + 1
			};
		}

		case types.DONE_LOAD: {
			return {
				...state,
				operations: state.operations - 1
			};
		}

		case types.SORT_CHANGED: {
			const endpoint = state.endpoint;
			return {
				...state,
				[endpoint + "_sort"]: {
					sortKey: action.payload.sortKey,
					desc: action.payload.desc
				}
			};
		}

		case types.OPEN_TOGGLED: {
			const { kind, name } = action.payload;
			if (name !== "") {
				let { data } = state;
				let updated = data[kind].map((ele, i) => {
					if (ele["name"] === name) {
						let isExpanded = ele.isExpanded || false;
						ele.isExpanded = !ele.isExpanded;
					}
					return ele;
				});
				return {
					...state,
					data: { [kind]: updated }
				};
			}
		}
	}

	return state;
};

export default createStore(
	reducer,
	defaultData,
	applyMiddleware(thunkMiddleware)
);
