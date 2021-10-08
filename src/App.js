import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Layout from "./components/Layout";
import Cardex from "./components/Cardex";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import SimpleModal from "./components/simpleModal";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <Layout>
      <Container maxWidth="lg">
        <Button variant="contained" onClick={handleClickOpen}>
          Contained
        </Button>
        <SimpleModal open={open} onClose={handleClose} />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Typography variant="h4" component="h1" gutterBottom>
              Create React App v5 example
            </Typography>
            <Item item xs={4}>
              <Cardex />
            </Item>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}

export default App;
