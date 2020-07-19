import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import Header from "./components/header/Header";
import Spinner from "./components/spinner/Spinner";

import { selectCurrentUser } from "./redux/user/userSelector";
import { checkUserSession } from "./redux/user/userActions";

const HomePage = lazy(() => import("./pages/home-page/HomePage"));
const ShopPage = lazy(() => import("./pages/shop-page/ShopPage"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up-page/SignInAndSignUpPage")
);
const CheckoutPage = lazy(() => import("./pages/checkout-page/CheckoutPage"));

const App = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              path="/sing-in"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
        </Switch>
      </div>
    </div>
  );
};

export default App;
