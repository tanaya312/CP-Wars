import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import HomeRoute from "./components/routing/HomeRoute";

// Screens
import HomeScreen from "./components/screens/HomeScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <HomeRoute exact path="/" component={HomeScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
