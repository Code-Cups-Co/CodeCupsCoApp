import React from "react";
import useStyles from "./styles";
import { Container, AppBar, Grow, Grid } from "@material-ui/core";
import Posts from "../src/Components/Posts/Posts";
import Form from "../src/Components/Form/Form";

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className={classes.appBar}>
        <h1 className={classes.heading} align="center">
          Code Cups Co..
        </h1>
      </div>
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
