const fs = require("fs");
const bioData = {
    name : "Anuj",
    age : 21,

};
// console.log(bioData);
// //when object converted into json format
// const jsonData = JSON.stringify(bioData);
// //when json converted into object
// const objData = JSON.parse(jsonData);
// console.log(objData);

const jsonData = JSON.stringify(bioData);

fs.writeFile("json1.json",jsonData,(err) =>{
    console.log("done");
});

fs.readFile("json1.json", "utf-8", (err,data) =>{
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});
 