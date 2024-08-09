import React, { useState } from "react";
import "./App.css";

import { Button, Card, CardContent, Typography } from "@mui/material";
import getQuotes from "./getQuotes";

function App() {
  const [stateof, setStateof] = useState({
    quote: "",
    author: "",
  });

  const handle = () => {
    getQuotes().then((data) => {
      setStateof({
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
          <Typography variant="h5">{stateof.quote}</Typography>
          <Typography className="margin-top" color="textSecondary">
            {stateof.author}
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
      <Card className="card">
        <CardContent>
          <Typography variant="h5">{stateof.quote}</Typography>
          <Typography className="margin-top" color="textSecondary">
            {stateof.author}
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
