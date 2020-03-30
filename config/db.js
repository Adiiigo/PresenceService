const mongoose = require("mongoose") ;

const IntiateMongoServer = async () => {
    try{

        await mongoose.connect(MONGOURI, {
           useNewUrlParser: true 
        });
        console.log("Connected to DB !!") ;
    }catch(e){
        console.log(e);
        throw e ;
    }
};

module.exports = IntiateMongoServer ;