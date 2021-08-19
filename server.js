const express = require("express");
const path = require('path');
const mongoose = require("mongoose");

const DeveloperRouter = require("./routes/api/developer");
const ProjectRouter = require("./routes/api/project")
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
} else{
  app.get("/", (req, res) =>{
    res.send("api running");
  })
}


// Add routes, both API and view
// app.use(DeveloperRouter);
app.use('/developer', DeveloperRouter);
app.use('/project', ProjectRouter);
// app.use(require("./routes/api/employee"));


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project33",
{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  
}
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
