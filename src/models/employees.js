const {Schema,model} = require('mongoose');

const EmployeSchema = new Schema({
    nid:{type:Number, required:true},
    sNombres:{type:String, required:true},
    sAppPaterno:{type:String, required:true}
},{
    timestamps:true,
    versionKey:false
});

module.exports = model("employees",EmployeSchema);