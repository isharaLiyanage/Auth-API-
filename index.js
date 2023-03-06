const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");
const passportRouter = require("./routers/authPassport");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieSession = require("express-session");
const passport = require("passport");
require("./passport");

app.use(
  cookieSession({
    key: "Auth App",
    secret: process.env.PASS_SEC,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 26784000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db  success"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/google/auth", passportRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("done");
});
