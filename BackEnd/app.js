const express = require("express")
const port = 8777
const mongoose = require("mongoose")
const app = express()
const cors = require("cors");

app.use(cors());
app.use(cors({
    origin: "http://localhost:5173" // อนุญาตเฉพาะ React app
}));

app.use(express.json())
mongoose.connect("mongodb://localhost:27017/PhakapholDB").then(()=>{
    console.log("Connect MongoDb Success")
}).catch(err =>{
    console.log("Cant connect to MongoDb")
    throw err
})

const NewSchema = new mongoose.Schema(
    {
        username : String,
        password : String,
        buyinglist: Number,
    }
)
const PkShopDB = mongoose.model("PkShopDB",NewSchema)

app.post("/pkshop",async(req,res)=>{
    try{
        const userinp = req.body
        const user = new PkShopDB({
            username : userinp.username,
            password : userinp.password,
            buyinglist: userinp.buyinglist,
        });
        await user.save();
        res.status(201).json({
            message:"Save Successfull",
            username: userinp.username,
            password : userinp.password.length
        })
    }catch(err){
        res.status(500).json({
            message: "Error "
        }
        )
    
    
    }
    
})
app.get("/pkshop", async (req, res) => {
    try {
        const alluserdata = await PkShopDB.find();
        res.status(200).json(alluserdata);
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).json({
            message: "Error occurred while fetching user data"
        });
    }
});app.listen(port,async()=>{
    console.log("App listening to port 8777")
})

app.get("/pkshop/:username",async(req,res)=>{
    try{
        const userparamsfind = await PkShopDB.findOne({username: req.params.username})
        if (userparamsfind){
            res.send("Login Success")
        }
        else{
            res.send("user is not in the database")
        }
    }
    catch(err){
        throw err
    }
})
app.get("/",(req,res)=>{
    res.send("Connected")
})