const express = require('express');
const axios = require('axios');
const { v4 : uuidv4 } = require('uuid');
const moment = require('moment');
moment().format("MMMM Do YYYY, h:mm:ss a");
const _ = require('lodash');
const chalk = require('chalk');

const app = express();
const port = 3000
    app.listen(port, ()=>{
        console.log(`I'm listening at port ${port}`);
    });

// axios as suggested in Postman:
    // let config = {
    //     method: 'get',
    //     maxBodyLength: Infinity,
    //     url: 'https://randomuser.me/api/',
    //     headers: { }
    //   };
      
    //   axios.request(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // app.get("/create", (req, res)=>{
    //     console.log("Defining rout to CREATE");
    //     axios.get('https://randomuser.me/api/')
    //         .then( ({data}) =>{
    //             console.log("data.results"),
    //             res.send()
    //         } )
    // });