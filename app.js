const express = require('express');
const mongoose =  require('mongoose');
const movieRoute = require('./Route/movieRoute');
const userRoute = require('./Route/userRoute')
const cors = require('cors')

const app = express()

// Middleware
require('dotenv/config')
app.use(express.json())
app.use(cors())

// Default route 
app.get('/', (req, res)=>{
    res.send("This id dedault route")
})

app.use('/api/movie',movieRoute)

// main
app.use('/api/user', userRoute)
app.listen(process.env.PORT,()=>{
    console.log("Listening on this port 5000");
})

async function main() {
    try {
        const res = await mongoose.connect(process.env.DB);
        const data = await res.default;
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}

main()