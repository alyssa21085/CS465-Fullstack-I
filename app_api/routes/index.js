const express = require("express"); //Express api
const router = express.Router();    //Router logic

//This is where we import the controllers we will route
const tripsController = require("../controllers/trips");

//define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) //GET Method routes Trip List
    .post(tripsController.tripsAddTrip); //POST method adds trip

//GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);


module.exports = router;