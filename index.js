const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/dbUsuariosMongoDB");
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const app = express();

app.use(cors());
dotenv.config();
// connectDB();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '20mb' }));



const presupuestoRoutes = require("./routes/PresupuestoRoutes.js");



const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('/presupuesto', presupuestoRoutes)





// const options = {
//     key: fs.readFileSync('./scfg0cbqs'),
//     cert: fs.readFileSync('./scfg0cbqs'),
//     //ca: fs.readFileSync('/opt/psa/var/certificates/scfqdiDyQ') // si tienes un archivo CA bundle
//   };
  
//   https.createServer(options, app).listen(5000, () => {
//     console.log(`server listening on port 5000`);
//   });

  app.listen(4050, () => {
    console.log(`server listening on port 3050`);
  });
