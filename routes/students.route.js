const {Router} = require('express');
const{studentscontroller} =require('../controllers/students.controller')
const router = Router();


router.post('/students', studentscontroller.createStudents)
router.delete('/students/:id',studentscontroller.deleteStudentById)
router.get('/students', studentscontroller.getStudents )
router.patch('/students/:id', studentscontroller.changeStudents)
module.exports = router;