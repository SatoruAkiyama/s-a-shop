import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Spinner from "./components/spinner/Spinner";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

import { selectCurrentUser } from "./redux/user/userSelector";
import { checkUserSession } from "./redux/user/userActions";

const HomePage = lazy(() => import("./pages/home-page/HomePage"));
const ShopPage = lazy(() => import("./pages/shop-page/ShopPage"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up-page/SignInAndSignUpPage")
);
const CheckoutPage = lazy(() => import("./pages/checkout-page/CheckoutPage"));
const AccountPage = lazy(() => import("./pages/account-page/AccountPage"));

const App = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container">
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route
                path="/sign-in"
                render={() =>
                  currentUser ? (
                    <Redirect to="/account" />
                  ) : (
                    <SignInAndSignUpPage />
                  )
                }
              />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route
                path="/account"
                render={() =>
                  currentUser ? <AccountPage /> : <Redirect to="/sign-in" />
                }
              />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </div>
      <Footer />
    </>
  );
};

export default App;
