import React from "react";
import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "../src/Components/Posts/Posts";
import Form from "../src/Components/Form/Form";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar className="appBar" position="static" color="inherit">
        <Typography className="heading" variant="h4" align="center">
          Code Cups Co
        </Typography>
        <img
          className="image"
          src="https://avatars.githubusercontent.com/u/101883019?s=200&v=4"
          alt="ProImg"
          height="10"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}
export default App;
