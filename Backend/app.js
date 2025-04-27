const express = require('express')
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")


require("dotenv").config();
require("./connection/conn");

const userApi = require("./routes/user.route");
const taskRoutes = require('./routes/task.route')
authRoutes = require("./routes/authCheck.route")

app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:4200",
        credentials: true
    }
));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("hello world!!2")
})

app.use("/api", userApi);
app.use("/task", taskRoutes)

app.use("/api/auth/check", authRoutes); 

app.listen(`${process.env.PORT}`, () => {
 console.log('Server started')
})