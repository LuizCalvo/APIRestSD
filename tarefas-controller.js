var Tarefas = require('./tarefas-model')


exports.cadastrarTarefa = function(req,res){
    let tarefa = new Tarefas({
        id: req.body.id,
        descricao: req.body.descricao,
        prazo:req.body.prazo,
        completa: req.body.completa
    })

    tarefa.save(function(err){
        if(err){
            return next(err)
        }
    })
    res.send('Tarefa cadastrada com sucesso!')
}

exports.listarTarefas = function(req,res){
    Tarefas.find({},function(err,tarefas){
        if(err) return next(err)
        return res.json(tarefas);
    })
}

exports.buscarTarefa = function(req,res){
    Tarefas.findById(req.params.id,function(err,tarefas){
        if(err) return next(err)
        return res.json(tarefas);
    })
}
