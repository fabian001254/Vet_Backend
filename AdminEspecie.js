const { PrismaClient }= require('@prisma/client');

class AdminEspecie{

    constructor(){
        this.prisma = new PrismaClient();
    }

    async CrearEspecie(req, res){

        const datos=req.body;

        const especie= await this.prisma.especie.create(
            {
                data:datos
            }
        );

        res.json(especie);

    }

    async ListarEspecies(req, res){
        const especies= await this.prisma.especie.findMany();
        res.json(especies);
    }
    
}
module.exports = AdminEspecie;
