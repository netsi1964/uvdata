import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MillenniumFalcon from "../components/millennium-falcon";

import { onChooseEndpoint, onSortChanged, onToggleOpen } from "../actions";

const mapStateToProps = state => {
	const { endpoint, data } = state;

	const list = (data && data[endpoint]) || [];

	const { sortKey, desc } = state[endpoint + "_sort"] || {sortKey:null, desc:null};
	return {
		list,
		endpoint,
		loading: state.operations > 0,
		sortKey,
		desc
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			onChooseEndpoint: onChooseEndpoint,
			onSortChanged,
			onToggleOpen
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(MillenniumFalcon);
