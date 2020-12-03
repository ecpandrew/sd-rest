var express = require('express');
var router = express.Router();
const service = require('../DAO/Service.js');


service.populate();
/* GET home page. */


router.get('/', function(req, res, next) {
  res.send({ok:"true"});
});



router.get("/listarEstalagens", (req, res) =>{

  res.send(service.listarEstalagensDispiniveis());
});

router.post("/cadastrarEstalagem", (req, res) =>{
  const { uuid, locatario, descricao, preco } = req.body;
  service.cadastrarEstalagem(uuid,locatario, descricao, preco);
  res.send({ok: true});
});
router.post("/reservarEstalagem", (req, res) =>{
  const { uuid, locador, data1, data2 } = req.body;
  service.reservarEstalagem(uuid, locador, Date.parse(data1), Date.parse(data2));
  res.send({ok: true});
});

router.post("/alugarEstalagem", (req, res) =>{
  const { uuid, locador, data1, data2 } = req.body;
  service.alugarEstalagem(uuid, locador, Date.parse(data1), Date.parse(data2));
  res.send({ok: true});
});

router.get("/listarEstalagensDisponiveis", (req, res) =>{
  const { data1, data2 } = req.body;
  res.send(service.listarEstalagensDispiniveis(Date.parse(data1), Date.parse(data2)));
});

module.exports = router;
