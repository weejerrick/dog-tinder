import React from "react";
import { Typography } from "@material-ui/core";

export default function Footer() {
  return (
    <div>
      <Typography variant="caption" style={{ fontWeight: 500 }} gutterBottom>
        A little MERN (MongoDB, Express, React, Node) stack project. See source
        on{" "}
        {
          <a
            href="https://github.com/weejerrick/dog-tinder"
            target="_blank"
            style={{ color: "black" }}
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        }
        .
      </Typography>
    </div>
  );
}
