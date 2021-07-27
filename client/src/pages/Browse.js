import React, { useState, useEffect } from "react";
// import dogData from "./utils/dogData";
import ShowDog from "../components/browse/ShowDog";
import Grid from "@material-ui/core/Grid";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ClearIcon from "@material-ui/icons/Clear";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    background: "white",
    elevation: 1,
  },
}));

let dogCounter = 0;

const postSuggestionsReq = {
  userLocation: "North",
  dogBreed: "Pomeranian",
  dogSex: "Male",
};

const loggedInDog = "60fe1f945df2380e9c79b1bc";

export default function Browse() {
  const classes = useStyles();
  const [dogSuggestions, setDogSuggestions] = useState([{ name: "demo" }]);
  const [currentDog, setCurrentDog] = useState(dogSuggestions[dogCounter]);

  useEffect(() => {
    const fetchDogs = async () => {
      const res = await fetch("http://localhost:3003/browse", {
        method: "POST",
        body: JSON.stringify(postSuggestionsReq),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setDogSuggestions(data);
    };
    fetchDogs();
  }, []);

  const chooseDislike = () => {
    console.log(`Ew, no.`);
    dogCounter === dogSuggestions.length - 1
      ? (dogCounter = 0)
      : (dogCounter += 1);
    setCurrentDog(dogSuggestions[dogCounter]);
  };

  const chooseLike = (likedDog) => {
    console.log(likedDog);
    console.log(`Love ${likedDog.name}!`);
    dogCounter === dogSuggestions.length - 1
      ? (dogCounter = 0)
      : (dogCounter += 1);
    setCurrentDog(dogSuggestions[dogCounter]);

    const likeDog = async () => {
      const res = await fetch("http://localhost:3003/likeevents", {
        method: "POST",
        body: JSON.stringify({ liker: loggedInDog, likee: likedDog._id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    };
    likeDog();
  };

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "80vh" }}
      >
        <Grid item md={12}>
          <ShowDog
            currentDog={currentDog}
            chooseDislike={chooseDislike}
            chooseLike={chooseLike}
          />
        </Grid>
        <Grid item md={12}>
          <Fab
            color="inherit"
            aria-label="dislike"
            className={classes.fab}
            onClick={() => chooseDislike()}
          >
            <ClearIcon color="secondary" style={{ fontSize: 30 }} />
          </Fab>
          <Fab
            color="inherit"
            aria-label="like"
            className={classes.fab}
            onClick={() => chooseLike(currentDog)}
          >
            <FavoriteIcon color="primary" style={{ fontSize: 25 }} />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}
