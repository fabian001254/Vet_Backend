const express = require('express');
const AdminEspecie = require('./AdminEspecie');
class VetAPI{

    constructor(){
        this.puerto = 3000;
        this.app = express();
        this.adminEspecie = new AdminEspecie();
        this.app.use(this.configurarCORS);
        this.app.use(express.json());
        
        this.app.post('/CrearEspecie',(req,res)=>{
            this.adminEspecie.CrearEspecie(req,res);
        });
        this.app.get('/ListarEspecies',(req,res)=>{
            this.adminEspecie.ListarEspecies(req,res);
        });

       
    }
    configurarCORS(req,res,next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Origin');        
        next();
    }
    iniciarServidor(){
        this.app.listen(this.puerto,()=>{
            console.log(`Servidor en puerto ${this.puerto}`);
        })
    }
}

const vetAPI = new VetAPI();
vetAPI.iniciarServidor();
