require ( "dotenv" ) .config();
const express = require ( "express" );
const { json } = require ( "body-parser" );
const cors = require ( "cors" );
const session = require ( "express-session" );
const massive = require ( "massive" );
const passport = require ( "passport" );
const Auth0Strategy = require ( "passport-auth0" )


const app = express();

massive( process.env.CONNECTION_STRING )
    .then( db => {
      app.set( " db ", db);
})
    .catch( console.log );

app.use( json() );
app.use( cors() );
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge:525600*60*1000
        }
    })
);

app.use( passport.initialize() );
app.use( passport.session() );

passport.use( new Auth0Strategy({
    domain: ,
    clientSecret: ,
    clientID: ,
    callbackURL: '/login'
}, ( accessToken, refrehToken, extraParams, profile, done ) => {
    return done( null, profile )
}));

app.get("/api/test", ( req, res ) => {
    const db = req.app.get("db");

    db.users
    .find({})
    .then( response => {
        res.json(response);
    })
    .catch(console.log);
});

app.listen( process.env.PORT, () => {
    console.log( `App listening on port ${ process.env.PORT }!` );
});