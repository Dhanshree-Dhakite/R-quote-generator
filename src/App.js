import React, { useState } from "react";
import "./App.css";

import { Button, Card, CardContent, Typography } from "@mui/material";
import getQuotes from "./getQuotes";

function App() {
  const [state, setState] = useState({
    quote: "",
    author: "",
  });

  const handle = () => {
    getQuotes().then((data) => {
      setState({
        quote: data[0].quote,
        author: data[0].author,
      });
    });
  };
  return (
    <div className="app">
      <Typography variant="h2">Random Quote Generator</Typography>
      <Card className="card">
        <CardContent>
          <Typography variant="h5">{state.quote}</Typography>
          <Typography className="margin-top" color="textSecondary">
            {state.author}
          </Typography>
          <hr />
          <Button
            className="margin-top"
            color="primary"
            variant="outlined"
            onClick={handle}
          >
            Click for Quotes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
