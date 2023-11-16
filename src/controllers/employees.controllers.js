const employeeCtrl = {}

employeeCtrl.getEmployees = (req,res)=>{
    res.send('GET Employee')
}
employeeCtrl.addEmployees=(req,res)=>{
    res.send('POST Employee')
}
employeeCtrl.getEmployees = (req,res)=>{
    res.send('GET ID Employee')
}
employeeCtrl.deleteEmployees=(req,res)=>{
    res.send('DELETE Employee')
}
employeeCtrl.updateEmployees=(req,res)=>{
    res.send('PUT Employee')
}

module.exports = employeeCtrl;