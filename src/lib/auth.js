import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";



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
    session : {
      cookieCache : {
          enabled : true,
          strategy : "jwt",
          maxAge : 7 * 24 * 60 * 60
      }
    },
    plugins : [jwt()],
  database: mongodbAdapter(db, {
    client
  }),
});