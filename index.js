/* import project dependencies */

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

/* Initialize express server */
const app = express();

/* Call body parser and cors middleware */
const corsOptions = {
    origin: "http://localhost:4000"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* Create default routes */
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the REST API!"
    })
})

/* Set port and listen for request */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

const db = require('./db/server.js');
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database")
    })
    .catch(error => {
        console.log("Can not connect to the database: " + error);
        process.exit();
    })

const routes = require('./routes/api')

app.use('/api', routes)