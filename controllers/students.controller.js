const Student = require('../models/Student.model');
module.exports.studentscontroller={
   createStudents:function(req, res) {
   
  Student.create({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age
    }).then(() => {
      res.json("Студент добавлен")
    })
  },
deleteStudentById: async function(req,res){
    const student = await Student.findByIdAndRemove(req.params.id)
    res.json(`студент ${student.name} удален`);
},

getStudents: async function(req,res){
    const student = await Student.find();
    res.json(student);
},

changeStudents: async function(req,res){
    const student = await Student.findByIdAndUpdate(req.params.id,{
        name: req.body.name
    });
    res.json(`имя студента ${student.name} изменено`);
}

}

