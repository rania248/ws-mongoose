const mongoose = require("mongoose")


const Contact = new mongoose.Schema ({
name:{
    type : String,
    required :true
},
age : {
    type : Number,
    required : true

},
favoriteFoods : {
    type :[String]
}

})
module.exports = mongoose.model("Contact", Contact);