const mongoose = require('mongoose')

const connectDB = async (url) => {

  try {
    const conn=await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
      if(conn){
        console.log(`Connected to db at ${conn.connection.host}`)
      }
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB
