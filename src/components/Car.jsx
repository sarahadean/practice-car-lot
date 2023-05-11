import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

/**can modify below this line 
 * "car_make": "Toyota",
    "car_model": "Camry",
    "car_model_year": "2015",
    "color": "Black",
    "mileage": "35555",
    "price": "27150.98",
    "condition": "Certified Pre-Owned",
    "id": 1,
    "image":
*/

import React, {useState} from "react";

function Car({ car }) {

  const [showForm, setShowForm] = useState(false)

  return (
    <Grid item xs={2} sm={4} md={4}>
      {/**can edit below this */}
      {!showForm ? (
        <Card sx={{maxWidth: 350, height: 600}}>
          <CardHeader title={car.car_make} sx={{fontSize: "20px"}} />
          <CardMedia
            component="img"
            height="250"
            image={car.image}
            alt={car.car_model}
          />
          <CardContent>
            <Typography variant="h5" color="text.secondary" align="center">
              ${car.price}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography paragraph>Condition: {car.condition}</Typography>
            <Typography paragraph>Mileage: {car.mileage}</Typography>
            <Typography paragraph>Color: {car.color}</Typography>
          </CardContent>
          <CardContent className="flex justify-around">
            <Button variant="contained">Edit</Button>
            <Button variant="contained">Mark Sold</Button>
          </CardContent>
        </Card>
      ) : (
        <form id="car-form" className="sale-form">
          <div className="row">
            <div className="left">
              <label htmlFor="car_model_year">YEAR</label>
            </div>
            <div className="right">
              <select
                name="car_model_year"
                id="year-input"
                required
                aria-required="true">
                <option value=""></option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="left">
              <label htmlFor="car_make">MAKE</label>
            </div>
            <div className="right">
              <input
                type="text"
                name="car_make"
                id="make-form"
                required
                aria-required="true"
                minLength="2"
              />
            </div>
          </div>

          <div className="row">
            <div className="left">
              <label htmlFor="car_model">MODEL</label>
            </div>
            <div className="right">
              <input
                type="text"
                name="car_model"
                id="model-form"
                required
                aria-required="true"
              />
            </div>
          </div>

          <div className="row">
            <div className="left">
              <label htmlFor="price">PRICE</label>
            </div>
            <div className="right">
              <input
                type="text"
                name="price"
                id="price-form"
                required
                pattern="^\d{1,}$|(?=^.{1,}$)^\d+\.\d{0,2}$"
                aria-required="true"
                minLength="3"
                maxLength="10"
              />
            </div>
          </div>

          <div className="row">
            <div className="left">
              <label htmlFor="condition">CONDITION</label>
            </div>
            <div className="right">
              <select
                name="condition"
                id="condition-form"
                required
                aria-required="true">
                <option value="New">New</option>
                <option value="Used">Used</option>
                <option value="Certified Pre-Owned">Certified Pre-Owned</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="left">
              <label htmlFor="mileage">MILEAGE</label>
            </div>
            <div className="right">
              <input
                type="tel"
                name="mileage"
                id="mileage-form"
                required
                aria-required="true"
                maxLength="7"
              />
            </div>
          </div>

          <div className="row">
            <div className="left">
              <label htmlFor="color">COLOR</label>
            </div>
            <div className="right">
              <input
                type="text"
                name="color"
                id="color-form"
                required
                aria-required="true"
                minLength="3"
              />
            </div>
          </div>

          <div className="row" id="image_url_row">
            <div className="left">
              <label htmlFor="image">IMAGE URL</label>
            </div>
            <div className="right">
              <input type="text" name="image" id="image_url" />
            </div>
          </div>

          <div className="row">
            <input type="submit" id="submit-btn" value="SAVE" />
            <input type="button" id="cancel-btn" value="CANCEL" />
          </div>
        </form>
      )}
      {/**can edit the above section */}
    </Grid>
  );
}

export default Car;
