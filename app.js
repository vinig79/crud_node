const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const db = require("./models/db.js")

const port = 3000;
const bodyParser = require("body-parser");

const app = express();

const index = require("./routes/index.js");
const register = require("./routes/register.js");
const edite = require("./routes/edite.js");
const login = require("./routes/login.js");
const home = require("./routes/home.js")

const sess = {
    secret: "secret",
    cookie: { maxAge: 3000000, secure: false},
    saveUnitialized : true
};

app.use(express.static('src'));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(session(sess));
//
app.use('/',index);
app.use('/index', index);
app.use('/register', register );
app.use('/edite', edite);
app.use('/login', login);
app.use("/home", home);


app.listen(port, async () =>{
    await db.sync();
    console.log("funfo");
})