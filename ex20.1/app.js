const express = require('express')
const app = express()
const MongoConnect = require('./index')
const MainRouth = require('./routes/mainRouth')
const body = require('body-parser')

app.use(body.urlencoded({extended:true}))
app.use(body.json())


app.use(MainRouth)



MongoConnect.mongoConnect()



app.listen(process.env.PORT || 5000, () => {
    console.log(`application start at ${process.env.PORT || 5000}`)
})