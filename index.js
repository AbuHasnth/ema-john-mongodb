const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

//middleware

app.use(cors())
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8d2ovan.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{

    }
    finally{

    }
}
run().catch(console.dir)


app.get('/', (req,res)=>{
  res.send('john is running to ema')
})

app.listen(port, ()=>{
    console.log('john is running on port', port)
})