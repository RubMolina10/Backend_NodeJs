const employeeCtrl = {}
const employees = require('../models/employees');
const employe = require('../models/employees');
employeeCtrl.getEmployees = async (req,res)=>{
   const employ = await employe.find()
   res.json(employ);
}
employeeCtrl.addEmployees= async(req,res)=>{
    //console.log(req.body);
    const newEmploy  = new employe(req.body)
    await newEmploy.save()
    res.send('Información almacenada con exitó')
}
employeeCtrl.getEmployee = async (req,res)=>{
   // console.log(req.params)
  const employe = await employees.findById(req.params.id)
    res.send(employe)
    console.log('Se obtuvo',employe)
}
employeeCtrl.deleteEmployees= async (req,res)=>{
 const employe = await employees.findByIdAndDelete(req.params.id)
  res.json({status:'Se elimino la información'})
}
employeeCtrl.updateEmployees= async (req,res)=>{
    const employe =await employees.findByIdAndUpdate(req.params.id, req.body)
    res.json({status:'Se actualizarón los datos '})
}

module.exports = employeeCtrl;