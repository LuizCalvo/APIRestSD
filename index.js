const express = require("express");
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://usuarioComum:KCADANiQ2t3gUXhL@cluster0.4fjk1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology:true})
mongoose.Promise = global.Promise
try{
    let db = mongoose.connection
    db.on('errr', console.error.bind(console,'erro de conexao no banco'))
} catch (e){
    console.log(e)
}


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',(req,res) => {
    res.send('teste');
})

let porta = process.env.PORT ||3000

app.listen(porta,() => {
    console.log("servidor em execução na porta" + porta);
})