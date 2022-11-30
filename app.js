import express from 'express'
import mongoose from "mongoose";
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
const app = express()
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)


 //mongoose.connect('mongodb://127.0.0.1:27017/tuiter');
console.log(process.env.DB_CONNECTION_STRING)
console.log("123")

 const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
                           || 'mongodb://localhost:27017/tuiter'
mongoose.connect(`${CONNECTION_STRING}`);
console.log(`${CONNECTION_STRING}`)
 // mongoose.connect(CONNECTION_STRING);





//ta teach me
// mongoose.connect("mongodb://127.0.0.1:27017/tuiter", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "Connection Error:"));
// db.once("open", function () {
//     console.log("Connected to MongoDB")
//     //app.listen(port, () => console.log(`tuiter app listening on port ${port}!`));
//  });

app.listen(process.env.PORT || 4000);
