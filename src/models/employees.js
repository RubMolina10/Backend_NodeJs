const {Schema,model} = require('mongoose');

const EmployeSchema = new Schema({
    nNum_Emp:{type:Number, required:true},
    sNombres:{type:String, required:true},
    sAppellidos:{type:String, required:true},
    sPuesto:{type:String, required:true},
    nSalario:{type:Number, required:true},
},{
    timestamps:true,
    versionKey:false
});

module.exports = model("employees",EmployeSchema);