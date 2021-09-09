const express = require("express");
const mongoose = require("mongoose");
const Contact = require("./models/Contact");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/contactList", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));


app.post("/CreateAndSave", async (req, res) => {
   
  try {
    const {name, age, favoriteFoods } = req.body;
    const contact = new Contact({ name,age , favoriteFoods});
		await contact.save();
    res.status(200).send({ msg: "contact added", Contact });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: error });
  }
});

app.post ("/createMany", async (req,res)=> {
try {
    const {name, age, favoriteFoods } = req.body;

await Contact.create(arrayOfContact, (err, data) => {
      if(err) {
         done(err); 
      }
    done(null, data);
    }) 

}
catch(error) {
    console.log(error);
    res.status(500).json({ status: false, message: error });
  }
})

app.get ("/findByID", async(req,res) => {
    const contact = await Contact.findById("613a1bd651be70a9047bb0f1")
    console.log(contact)
})


app.get ("/findByName", async(req,res) => {

await findContactByName (name, done) 
    Contact.find({"name":name},(err,data)=>{
    if(err) return done(err)
      return done(null,data)
    
    })

})

app.get ("/findOneByFood", async(req,res)=>{

const contact = await    Contact.find({favoriteFoods:food},(err,data)=>{
    //  console.log(food);
    //  console.log(data);
      if(err) return done(err)
       done(null,data)
    }); 
console.log(contact)

})

  
   
app.put("/findOneAndUpdate",async (req,res)=>{

    await Contact.findByIdAndUpdate("612df3bbeb561e1e783cf727", {name : "jaouher"})
})


app.put("/findEditThenSave", async (req,res)=>{

const contact = await Contact.findById(contactId, function(err, data) {
    data.favoriteFoods.push(foodToAdd).save();

})
})


app.delete("/emoveById,", async (req,res)=>{

    const contact = await Contact.findByIdAndRemove(contactId, (err, data) => err ? done(err) : done(null, data));

})

app.delete("/removeMany",async(req,res)=>{
    Contact.deleteMany({name: nameToRemove}, function(err, data) {
        if (err) {
          done(err);
        } else {
          done(null, data);
        }
      });


})

app.get("/queryCain", async(req,res)=>{
    Contact.find({favoriteFoods:foodToSearch}).sort({name : "desc"}).limit(2).select("-age").exec((err, data) => {
        if(err)
          done(err);
       done(null, data);
     })
})