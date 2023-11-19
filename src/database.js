const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mean-empleados")
  .then((db) => console.log("DB STARTED MONGO SERVICES API REST"))
  .catch((err) => console.log(err));
