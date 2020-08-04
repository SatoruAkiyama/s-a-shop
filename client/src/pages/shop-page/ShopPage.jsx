import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shopActions";

import Spinner from "../../components/spinner/Spinner";

const CollectionOverviewContainer = lazy(() =>
  import("../../components/collection-overview/CollectionOverviewContainer")
);
const CollectionPageContainer = lazy(() =>
  import("../collection-page/CollectionPageContainer")
);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page fade-in">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};
export default ShopPage;
