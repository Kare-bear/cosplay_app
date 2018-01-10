require ( "dotenv" ) .config();
const express = require ( "express" );
const { json } = require ( "body-parser" );
const cors = require ( "cors" );
const session = require ( "express-session" );
const massive = require ( "massive" );
const passport = require ( "passport" );
const Auth0Strategy = require ( "passport-auth0" )

const {
    AUTH_DOMAIN,
    CLIENT_SECRET,
    CLIENT_ID,
    PORT,
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env;

const app = express();

massive( process.env.CONNECTION_STRING )
    .then( db => {
      app.set( "db", db);
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

//****any stored user data to the DB will be done through here****
passport.use( new Auth0Strategy(
    {
    domain: AUTH_DOMAIN,
    clientSecret: CLIENT_SECRET,
    clientID: CLIENT_ID,
    callbackURL: '/auth',
    scope: "profile openid"
    }, 
    ( accessToken, refreshToken, extraParams, profile, done ) => {
        console.log(profile)

    app.get( 'db' )
    .getUserByAuthid(profile.id)
    .then(response => {
        if(!response[0]){
            app.get( 'db' )
            .createUserByAuthid([profile.id, profile.displayName])
            .then(created => {
              return done(null, created[0]);
            });
        }else{
            return done(null, response[0]);
        }
    });

//   return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

//this .get will need to change to avoid issues with /login being used already. DONE*
app.get('/auth', passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost3000/login"
    })
 );

 app.get('/api/me', (req, res, next) => {
     if(req.user) res.json(req.user);
     else res.redirect("/auth");
 });

app.get("/api/test", ( req, res ) => {
    const db = req.app.get("db");

    db.users
    .find({})
    .then( response => {
        res.json(response);
    })
    .catch(console.log);
});

app.put("/api/name", (req, res)=> {
    const db = req.app.get('db');

    db.updateUsername([req.body.id, req.body.name])
    .then(response => res.json(response[0]))
    .catch(console.log);
});

app.listen( process.env.PORT || 3001, () => {
    console.log( `App listening on port ${ process.env.PORT || 3001 }!` );
});