import React, {useState, useEffect} from "react";
import Search from "./Search";
import Cars from "./Cars";
import NewCarForm from "./NewCarForm";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

/*
Deliverables:
[X] SEE ALL OF THE CARS ON THE LOAD WHEN THE APPLICATION LOADS -- GET--

[X] ADD A NEW CAR LISTING TO THE LOT AND HAVE IT SHOW UP IN THE DOM -- POST--

[ ] SEARCH FOR A CAR BY MODEL AND FILTER BY MANUFACTURER

App -Header
 |
 |
 |
Carlot(Parent) -----NewCarForm (form state)
 |  |
 | Search (search state)
 |
Cars
 |
 Car
 |
 ??Header(CarHeader)

*/


function CarLot() {
const [carsState, setCars] = useState([])

useEffect(() => {getCars()}, [])

function getCars(){
  fetch('http://localhost:3001/cars')
  .then(resp => resp.json())
  .then(carsState => setCars(carsState))
}

function updateCars(newCar){
  setCars(
    [...carsState,
    newCar])
}

  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Search /> {/**You can edit this line */}
        </Grid>
        <Grid item xs={6}>
          <NewCarForm updateCars={updateCars}/> {/**You can edit this line */}
        </Grid>
        <Grid item xs={12}>
          {/** enter your code below */}
          <Cars carsState={carsState}/>
          {/** enter your code above */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default CarLot;
