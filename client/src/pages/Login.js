import NewSession from "../components/login/NewSession";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Footer from "../components/home/Footer";
import { Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    paddingTop: "30px",
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(80),
      height: theme.spacing(45),
    },
  },
  footer: {
    textAlign: "center",
    marginTop: theme.spacing(6),
  },
  signup: {
    marginTop: theme.spacing(1),
    textAlign: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(10),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

function Login(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Box display="flex" flexDirection="column">
            <img
              src="https://i.ibb.co/J2nqqCc/landingimage.png"
              width="300px"
              alt="landing"
              style={{ alignSelf: "center" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.root} elevation={2}>
            <NewSession
              loggedInUserData={(fullData) => props.loggedInUserData(fullData)}
              // loggedInDogData={(dogData) => props.loggedInDogData(dogData)}
            />
          </Paper>
          <Paper className={classes.signup} elevation={2}>
            <Typography variant="subtitle2">
              New to Dog Tinder?{" "}
              <RouterLink
                to="/register"
                style={{ textDecoration: "none", color: "#d4524d" }}
              >
                Sign up
              </RouterLink>{" "}
              or use a
              <HtmlTooltip
                title={
                  <>
                    <Typography color="inherit">
                      User: colorfulmoo <br /> Password: 12345
                    </Typography>
                  </>
                }
              >
                <Button
                  style={{
                    maxWidth: "50px",
                    maxHeight: "30px",
                    minWidth: "50px",
                    minHeight: "30px",
                    textTransform: "lowercase",
                  }}
                  color="secondary"
                >
                  Demo
                </Button>
              </HtmlTooltip>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
