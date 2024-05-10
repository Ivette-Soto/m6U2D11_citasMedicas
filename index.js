const express = require('express');
const axios = require('axios');
const { v4 : uuidv4 } = require('uuid');
const moment = require('moment');
// moment().format("MMMM Do YYYY, h:mm:ss a");
const _ = require('lodash');
const chalk = require('chalk');

const app = express();
const port = 3000
const users = []

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
    //   
    //   axios.request(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // 
    app.get("/create", (req, res)=>{
    //     console.log("Defining rout to CREATE");
        axios.get('https://randomuser.me/api/?results=1')
            .then( ({data}) =>{
                //1 console.log(data.results)      calling on data to display and identify element 
                const userAPI = data.results[0]
                //2 console.log(user.gender)
                // const { gender: gender, last: last, first: first} = userAPI
                //3 to keep on the display the array
                // console.log(gender, last, first)
                //4 now
                // const { gender: gender, name: name} = userAPI
                // console.log(gender, name)
                // res.send(JSON.stringify(userAPI))
                //5
            //     const { gender: gender, name: name} = userAPI
            //     userAPI.push({
            //         gender: gender,
            //         name: name,
            //         // id: uuid(),
            //         id: uuid().slice(0,6),
            //         timestamp: moment().format("MMMM Do YYYY, h:mm:ss a")
            // });
                // 6 
            //     const { gender: gender, name: name} = userAPI
            //     userAPI.push({
            //         gender: gender,
            //         first: name.first,
            //         last: name.last,
            //         id: uuid().slice(0,6),
            //         timestamp: moment().format("MMMM Do YYYY, h:mm:ss a")
            // });

            //     res.send(JSON.stringify(user))


            // 7
        //     const { gender: gender, name: name} = userAPI
        //     userAPI.push({
        //         gender: gender,
        //         first: name.first,
        //         last: name.last,
        //         id: uuid().slice(0,6),
        //         timestamp: moment().format("MMMM Do YYYY, h:mm:ss a")
        // });

        //     res.send(JSON.stringify(_.partition(users, function(o){ return o.gender})))
            

            // 8 
        //     const { gender: gender, name: name} = userAPI
        //     userAPI.push({
        //         gender: gender,
        //         first: name.first,
        //         last: name.last,
        //         id: uuid().slice(0,6),
        //         timestamp: moment().format("MMMM Do YYYY, h:mm:ss a")
        // });

        // var result = _.chain(patientsList)
        // .groupBy("gender")
        // .value();

        // let Female = result['female'];
        // let Male = result['male'];

        //     res.send(JSON.stringify(result))

        // 9
        const { gender: gender, name: name} = userAPI
        userAPI.push({
            gender: gender,
            first: name.first,
            last: name.last,
            id: uuid().slice(0,6),
            timestamp: moment().format("MMMM Do YYYY, h:mm:ss a")
    });

    var result = _.chain(patientsList)
    .groupBy("gender")
    .value();

    let Female = result['female'] || [];
    let Male = result['male'] || [];
    //   ( || [];) is of help here because the users do not exist until they are required.  In this way, this allows it to become an empty object

    let listFem = ''
    if ( Female.length >=1 ) {
        Female.forEach( individual => {
            listFem += `<li>&{individual.gender} - &{individual.name - &{individual.last - &{individual.id} - &{individual.timestamp} } }  </li>`
        })
    }

    let listMale = ''
    if ( Male.length >=1 ) {
        Male.forEach( individual => {
            listMale += `<li>&{individual.gender} - &{individual.name - &{individual.last - &{individual.id} - &{individual.timestamp} } }  </li>`
        })
    }

    let responseFemale = `<h2>Women:</h2>
    <ol>
        &{listFem} 
    </ol>
    `
    let responseMale = `<h2>Men:</h2>
    <ol>
        &{listMale} 
    </ol>
    `
        console.log(chalk.blue.bgWhite(responseFemale + "\n" + responseMale))
        res.send(responseFemale + responseMale)

        })
    });