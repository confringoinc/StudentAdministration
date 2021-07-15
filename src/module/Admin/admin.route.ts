import { Router } from 'express'
import { Middleware } from '../../middelware';
import { AdminController } from './admin.controller';
import { Validator } from '../../validate';
import { AdminRegisterDto } from './dto/admin-register.dto';
import { AdminLoginDto } from './dto/admin-login.dto';
import { StudentEditDto } from '../student/dto/student-edit.dto';

const v = new Validator()
const adminController = new AdminController()
const router: Router = Router()

router.post("/register", v.validate(AdminRegisterDto), adminController.register)
router.post("/login", v.validate(AdminLoginDto), adminController.login)
router.get("/get-students", Middleware.pagination, adminController.getStudents)
router.put("/edit-student/:enrollmentNo", v.validate(StudentEditDto), adminController.editStudent)
router.delete("/delete-student/:enrollmentNo", adminController.deleteStudent)

export const adminRoutes: Router = router