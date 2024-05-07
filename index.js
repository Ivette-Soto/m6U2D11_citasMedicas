const express = require('express');
const app = express();
const axios = require('axios');
const { v4 : uuidv4 } = require('uuid');
const moment = require('moment');
moment().format("MMMM Do YYYY, h:mm:ss a");
const _ = require('lodash');
// const array = require('lodash/array');

const port = 3000
    app.listen(port, ()=>{
        console.log(`I'm listening at port ${port}`);
    });

// axios
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