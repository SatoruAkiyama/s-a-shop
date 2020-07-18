import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectCollectionsLoaded } from "../../redux/shop/shopSelector";

import WithSpinner from "../../components/with-spinner/WithSpinner";
import CollectionPage from "../collection-page/CollectionPage";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
