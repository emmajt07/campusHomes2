import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import session from 'express-session';
import cors from 'cors';
import passport from 'passport';
import User from './campusapp/src/componentes/users.js'; // esquema de usuario desde user.js
import UserRouter from "./campusapp/src/componentes/UserRouters.js";
import RestaurantRouter from "./campusapp/src/componentes/RestaurantRouters.js";
import LoginUserRouter from "./campusapp/src/componentes/LoginUsersRouters.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 4000; // Puerto fijo
const DB_URI = 'mongodb+srv://CruciiOO:pegasso07@cluster0.j1ko6yz.mongodb.net/CampusHomes?retryWrites=true&w=majority&appName=Cluster0'; // Cadena de conexión fija

async function connectDB(DB_URI) {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Database connected: ${DB_URI}`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

connectDB(DB_URI);

app.use(cors());
app.use(express.static(path.join(__dirname, 'campusApp/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", UserRouter);
app.use("/restaurants", RestaurantRouter);
app.use("/loginusers", LoginUserRouter);
app.use(express.static("public"));

app.use(session({
    secret: "Esta vida me encanta me gusta, pero no me asusta...",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
