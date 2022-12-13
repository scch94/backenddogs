const { Router} = require("express");
const axios = require("axios");
const { Raza, Temperamento,Op } = require("../db");


const router = Router();
router.get('/',async(req,res)=>{
    let temperamento=[]
    let temperamentos=await Temperamento.findAll();
    if(temperamentos.length>0){
        let enviar=temperamentos.map(t=>t.name)
        return res.status(200).send(enviar)
    }
    try{
        axios.get("https://api.thedogapi.com/v1/breeds")
        .then((response) => (response = response.data))
        .then((razas) => {
            razas.map((r) => {
                let separando;
                if (r.temperament) {
                    separando = r.temperament.split(",");
                    separando = separando.map((s) => s.trim());
                    temperamento = [...temperamento, ...separando];
                    const set = new Set(temperamento);
                    temperamento = [...set];
                }
            })
            temperamento.map(async (t) => await Temperamento.create({ name: t }));
            return razas
            })
        .then((razas)=>res.send(temperamento))
        
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router;