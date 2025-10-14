
import { Server } from "http"
import app from "./app";
import mongoose from "mongoose";
import { envVars } from "./app/config/env";


let server: Server;




const main = async () => {

  
   try {

      //  await mongoose.connect('mongodb+srv://majharul2022:majharul2022@cluster0.5g7cb.mongodb.net/PH_Tour_Backend?retryWrites=true&w=majority&appName=Cluster0');
      await mongoose.connect(envVars.DB_URL)

     


      server = app.listen(envVars.PORT, () => {
         console.log(`listen to port ${envVars.PORT} `);
      })
   } catch (error) {
      console.log(error);
   }



}

main();

process.on('SIGTERM', () => {

   console.log("SIGTERM rejecktion detected... server shutdown");

   if (server) {
      server.close(() => {
         process.exit(1);
      })
   }

   process.exit(1);
})

process.on('SIGINT', () => {

   console.log("sigInt rejecktion detected... server shutdown");

   if (server) {
      server.close(() => {
         process.exit(1);
      })
   }

   process.exit(1);
})


process.on('uncaughtException', () => {

   console.log("Unhandle rejecktion detected... server shutdown");

   if (server) {
      server.close(() => {
         process.exit(1);
      })
   }

   process.exit(1);
})

process.on('uncaughtException', () => {

   console.log("Unhandle uncaught exceptions... server shutdown");

   if (server) {
      server.close(() => {
         process.exit(1);
      })
   }

   process.exit(1);
})

// Promise.reject(new Error("throw a error"));

// throw Error('un')