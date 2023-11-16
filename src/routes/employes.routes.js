const {Router} =require('express');
const router = Router();

//Acciones CRUD 

router.get('/getPet',(req,res) =>
res.send('Petición Get'));

router.post('/postPet',(req,res) =>
res.send('Petición Post'));




module.exports =router;