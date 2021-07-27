import { Route, Link, Redirect, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF9B01",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <h1>Dog Tinder</h1>
        <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
        <Route path="/login">
          <Login />
        </Route>
        </Switch>
        <Browse />
      </ThemeProvider>
    </div>
  );
}

export default App;
