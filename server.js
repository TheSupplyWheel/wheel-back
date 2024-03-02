const app = require('./app')
const dotenv = require('dotenv')
dotenv.config({path : './environment/config.env'})

app.listen(process.env.PORT, (req, res)=>{
    console.log(`The Backend is working at ${process.env.PORT}`)
})