const {Router} =require('express');
const router = Router();

const employeesCtrl = require('../controllers/employees.controllers.js');

//Acciones CRUD 

router.get('/',employeesCtrl.getEmployees);
router.post('/',employeesCtrl.addEmployees);
router.get('/:id',employeesCtrl.getEmployee);
router.delete('/:id',employeesCtrl.deleteEmployees);
router.put('/:id',employeesCtrl.updateEmployees);






module.exports =router;