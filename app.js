import express from 'express';
import methodOverrride from 'method-override';
import session from 'express-session';
import path from 'path';
import url from 'url';
import dotenv from 'dotenv';
dotenv.config();

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));


import index from './src/routes/index.routes.js';
import register from './src/routes/register.routes.js';
import edite from './src/routes/edite.routes.js';
import login from './src/routes/login.routes.js';
import home from './src/routes/home.routes.js';

class App {
    constructor(){
        this.app = express();
        this.middleware();
        this.routes();
        this.app.use(express.static(path.join(__dirname,'/src/public')));
        this.app.set('view engine','ejs');
        this.app.set('views', path.join(__dirname,'/src/views'));
    };
    
    middleware(){
        this.app.use(session({
            secret: process.env.SECRET_KEY,
            resave: false,
            cookie: {secure: false},
            saveUninitialized: true
        }));
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(express.json());
        this.app.use(methodOverrride('_method'));
    };
     
    routes(){
       this.app.use('/', index);
       this.app.use('/index', index);
       this.app.use('/register', register);
       this.app.use('/login', login);
       this.app.use('/home', home);
       this.app.use('/edite', edite);
    };
};

export default new App().app;