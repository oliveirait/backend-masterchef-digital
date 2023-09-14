import express, { json } from "express";


const app = express();
app.use(json())


app.get('/', (req, res) => {
    res.json({message: "Server is Running"})
})




app.listen(3333, () => {
    console.log("Server is running in port 3333")
})