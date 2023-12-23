import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    {"message": "Type your URL ",
    name:"URL"}
])
.then((answer)=>{
  const url = answer.URL;
  let qrImg = qr.image(url,{type:'png'});
  qrImg.pipe(fs.createWriteStream('QR.png'));
  fs.writeFile("URL.txt", url, (err)=>{
        if(err) throw err;
        console.log("The file has been saved!");
    });
})
.catch((error)=>{
    if (error.isTtyError){

    }else{

    }
});

