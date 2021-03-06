const express = require("express");
const mongoose = require("mongoose");

const tarefa_controller = require('./tarefas-controller')

mongoose.connect('mongodb+srv://usuarioComum:KCADANiQ2t3gUXhL@cluster0.4fjk1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology:true})
mongoose.Promise = global.Promise
try{
    let db = mongoose.connection
    db.on('errr', console.error.bind(console,'erro de conexao no banco'))
} catch (e){
    console.log(e)
}

const router = express.Router()

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.get('/',(req,res) => {
    res.send('Bem vindo ao servico de tarefas!');
})

app.use('/',router)

router.post('/tarefas',tarefa_controller.cadastrarTarefa)
router.get('/tarefas',tarefa_controller.listarTarefas)
router.get('/tarefas/:id',tarefa_controller.buscarTarefa)
router.delete('/tarefas/:id',tarefa_controller.deletarTarefa)
router.put('/tarefas/:id',tarefa_controller.atualizarTarefa)



let porta = process.env.PORT ||3000

app.listen(porta,() => {
    console.log("servidor em execução na porta" + porta);
})






