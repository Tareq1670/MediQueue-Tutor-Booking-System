import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";


const client = new MongoClient(process.env.MEDIQUEUE_URI);
const db = client.db("MediQueue");


export const auth = betterAuth({
    emailAndPassword : {
        enabled : true,
        disableSignUp : false
    },
    socialProviders : {
      google : {
        clientId :process.env.GOOGLE_ID ,
        clientSecret: process.env.GOOGLE_SECREAT 
      }
    },
  database: mongodbAdapter(db, {
    client
  }),
});