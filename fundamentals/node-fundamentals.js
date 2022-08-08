const fs = require("fs");
const process = require("process");
const request = require("request");
//https://icanhazdadjoke.com/search?term=car&limit=1

console.log(process.argv);
request(
  `https://icanhazdadjoke.com/search?term=${process.argv[2]}&limit=1`,
  (error, response, body) => {
    if (error) console.log(error + "no jokes were found");
    console.log(response.statusCode);
    console.log("hi");
    fs.writeFile("dadjoke.txt", body, (err) => {
      if (err) console.log(err);
      console.log("File written succesfully");
    });
  }
);
