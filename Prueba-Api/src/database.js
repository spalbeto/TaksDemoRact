import  mongoose from "mongoose";

mongoose.connect("mongodb://LocalHost/todosdb" , {

    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    

.then(db => console.log(" Db is conected"))
.catch(error => console.log(error))
