import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import appConstants from "./common/constants/appConstants";
import styled from "styled-components";
import styleVals from "./common/styleVals/global";
import actions from "./redux/actions/index";

//common components
import NavBar from "./common/components/navigation-bar/index";
import Footer from "./common/components/page-footer";
import DialogModal from "./common/components/dialog-modal/index";

//components
import SignIn from "./components/sign-in/index";
import SignUp from "./components/sign-up/index";
import Chats from "./components/chats";

const Wrapper = styled.div`
  background-color: ${(props) =>
    props.theme === "dark" ? styleVals.color.dark : styleVals.color.light};
`;
const Container = styled.div`
  margin-top: 70px;
  min-height: calc(100vh - 211px);
  padding-top: ${styleVals.dimensions.spacing60};
  padding-left: ${styleVals.dimensions.spacing40};
  padding-right: ${styleVals.dimensions.spacing40};
`;

const mapStateToProps = (store) => ({
  homeData: store.homeData,
  signInData: store.signIn,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(actions.signInActions.signOut()),
});

function App(props) {
  const [theme, setTheme] = useState("dark");
  const [signInRoute, setSignInRoute] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const [showLogOutModal, setShowLogOutModal] = useState(false);

  useEffect(() => {
    if (props.signInData.status === "success") {
      setLoginState(true);
    } else {
      setLoginState(false);
    }
  }, [props.signInData]);

  useEffect(() => {
    if (props.homeData.status === "success") {
      setSignInRoute(true);
    }
  }, [props.homeData.status]);

  useEffect(() => {
    if (showLogOutModal) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  }, [showLogOutModal]);

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const commonProps = {
    theme,
    switchTheme,
    title: appConstants.NAVBAR_BRAND,
    signInRoute,
    history: props.history,
    loginState,
    signOut: () => props.signOut(),
    showLogOutModal: () => setShowLogOutModal(true),
  };

  const handleLogOut = () => {
    setShowLogOutModal(false);
    props.signOut();
  };

  return (
    <Wrapper theme={commonProps.theme}>
      <NavBar {...commonProps} />
      <Container {...commonProps}>
        <Switch>
          <Route
            key="signUp"
            path="/signUp"
            render={() => <SignUp {...commonProps} />}
          />
          {signInRoute && (
            <Route
              key="signIn"
              path="/signIn"
              render={() => <SignIn {...commonProps} />}
            />
          )}
          <Route
            key="chats"
            path="/chats"
            render={() => <Chats {...commonProps} />}
          />
          {loginState && <Redirect to="/chats" />}
          <Redirect from="/" to="/signUp" />
        </Switch>
      </Container>
      <Footer {...commonProps} />
      {showLogOutModal && (
        <DialogModal
          title={"Alert"}
          id="sample-modal"
          isOpen={showLogOutModal}
          onClose={() => setShowLogOutModal(false)}
          primaryButtonText={"OK"}
          secondaryButtonText={"Cancel"}
          onPrimaryButtonClick={handleLogOut}
          onSecondaryButtonClick={() => setShowLogOutModal(false)}
          showTitle
          showClose
          showPrimaryButton
          showSecondaryButton
          {...commonProps}
        >
          {"Do you want to sign out?"}
        </DialogModal>
      )}
    </Wrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
