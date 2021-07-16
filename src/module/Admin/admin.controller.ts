import { Request, Response } from 'express';
import admin from '../../models/admin.model';
import { Crypter } from '../../helper/Crypt.helper';
import { Jwt } from '../../helper/jwt.helper';
import { AdminRegisterDto } from './dto/admin-register.dto';
import { AdminLoginDto } from './dto/admin-login.dto';
import student from '../../models/student.model';
import department from '../../models/department.model';
import { StudentEditDto } from '../student/dto/student-edit.dto';

export class AdminController{
    public async register(req: Request, res: Response) {
        const {firstName, lastName, email, 
               password, mobileNo} = req.dto as AdminRegisterDto
        
        const encryptPass = await Crypter.encrypt(password)

        const _admin = await admin.create({
            firstName,
            lastName,
            email: email.trim(),
            password: encryptPass,
            mobileNo
        }) as any

        if(_admin){
            const token = Jwt.encode(_admin.id)
            res.status(200).json({
                "success": true,
                "token": token
            })
        } else {
            res.status(500).json({
                "success": false,
                "message": "Registration Failed!!"
            })
        }
    }

    public async login(req: Request, res: Response) {
        const { email, password } = req.dto as AdminLoginDto

        const _admin = await admin.findOne({
            attributes: ["id", "password"],
            where: {
                email: email.trim()
            }
        }) as any

        if(_admin) {
            const isPassValid = await Crypter.compare(password, _admin.password)
            if(isPassValid){
                const token = Jwt.encode(_admin.id)

                res.status(200).json({
                    "success": true,
                    "token": token,
                })
            } else {
                res.status(401).json({
                    "success": false,
                    "message": "Unauthorized User"
                })
            }
        } else {
            res.status(401).json({
                "success": false,
                "message": "Unauthorized User"
            })
        }
    }

    public async getStudents(req: Request, res: Response) {
        const { page, limit } = req.pager

        const _students = await student.findAll({
            attributes: {
                exclude: ["password", "departmentId"]
            },
            include: [{
                model: department,
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            }],
            offset: (page - 1) * limit,
            limit: limit
        })

        if(_students) {
            res.status(200).json({
                "success": true,
                "data": _students
            })
        } else{
            res.status(500).json({
                "success": false,
                "message": "Failed to load data."
            })
        }
    }

    public async editStudent(req: Request, res: Response) {
        const { enrollmentNo } = req.params

        const {firstName, lastName, semester, dob, gender,
            email, mobileNo, branch } = req.dto as StudentEditDto

        const _dept = await department.findOne({
            attributes: ["id"],
            where: {
                deptBranch: branch
            }
        }) as any

        const _student = await student.update({
            firstName:firstName,
            lastName:lastName, 
            semester:semester,
            dob:dob,
            gender:gender,
            email:email,
            mobileNo:mobileNo,
            branch:branch,
            departmentId: _dept.id
        },{ 
            where: {
                enrollmentNo
            }
        }) as any

        if(_student) {
            res.status(200).json({
                "success": true,
                "message": "Student Information modified successfully"
            })
        }
    }

    public async deleteStudent(req: Request, res: Response) {
        const { enrollmentNo } = req.params

        const _validate = await student.destroy({
            where: {
                enrollmentNo
            }
        })

        if(_validate) {
            res.status(200).json({
                "success": true,
                "message": "Data deleted successfully."
            })
        }
    }
}