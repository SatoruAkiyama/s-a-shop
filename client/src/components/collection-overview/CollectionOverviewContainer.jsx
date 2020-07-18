import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectCollectionsLoaded } from "../../redux/shop/shopSelector";

import WithSpinner from "../../components/with-spinner/WithSpinner";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionsLoaded(state),
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
