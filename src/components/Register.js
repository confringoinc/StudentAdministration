import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";

export default function App() {
  const { register, getValues, formState: { errors }, handleSubmit } = useForm();
  const [state, setState] = useState({ statusRadio: 'student' });

  const changeStatusHandler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  }

  const history = useHistory();

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  }

  const onStudentSubmit = studentdata => {
    const data = Object.keys(studentdata).map((key) =>
      `${key}=${encodeURIComponent(studentdata[key])}`)
      .join('&');

    axios.post('http://localhost:3000/student/register', data, { "headers": headers })
      .then(function (response) {
        if (response.data.success === true) {
          history.push({
            pathname: '/',
            state: response.data.token
          });
        }
        else {
          alert("Student is already exist...");
        }
      })
      .catch(function () {
        alert("Student is already exist...");
      });
  };

  const onAdminSubmit = admindata => {
    const data = Object.keys(admindata).map((key) =>
      `${key}=${encodeURIComponent(admindata[key])}`)
      .join('&');

    axios.post('http://localhost:3000/admin/register', data, { "headers": headers })
      .then(function (response) {
        console.log(response);
        if (response.data.success === true) {
          history.push({
            pathname: '/admin',
            state: response.data.token
          });
        }
        else {
          alert("Admin is already exist...");
        }
      })
      .catch(function (error) {
        alert("Admin is already exist...");
      });
  };

  return (
    <div className="container col-md-5">
      <div className="mt-5 mb-5 card card-body p-md-5">
        <div>
          <h1>
            Student<span className="text-primary">Center</span>
          </h1>
        </div>
        <div className="row ms mt-5">
          <div className="form-check col-6">
            <input className="form-check-input" type="radio" name="statusRadio" id="student" value="student" checked={state.statusRadio === "student"} onChange={changeStatusHandler} />
            <label className="form-check-label" htmlFor="student">
              Student
            </label>
          </div>
          <div className="form-check col-6">
            <input className="form-check-input" type="radio" name="statusRadio" id="admin" value="admin" checked={state.statusRadio === "admin"} onChange={changeStatusHandler} />
            <label className="form-check-label" htmlFor="admin">
              Admin
            </label>
          </div>
        </div>
        {state.statusRadio === 'student' ?
          <form className="mt-5" onSubmit={handleSubmit(onStudentSubmit)}>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input className="form-control" id="firstName" {...register("firstName", { required: true })} />
                <div id="firstnameError" className="form-text text-danger">{errors.firstName?.type === 'required' && "* First name is required"}</div>
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input className="form-control" id="lastName" {...register("lastName", { required: true })} />
                <div id="lastnameError" className="form-text text-danger">{errors.lastName?.type === 'required' && "* Last name is required"}</div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="enrollmentNo" className="form-label">Enrollment number</label>
              <input type="text" className="form-control" id="enrollmentNo" {...register("enrollmentNo", { required: true, minLength: 12, maxLength: 12, pattern: /^[0-9]+$/i })} />
              <div id="enrollmentNoError" className="form-text text-danger">{errors.enrollmentNo ? errors.enrollmentNo.type === 'required' ? "* Enrollment no is required" : "* Enrollment no is not valid!" : ''}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" {...register("email", { required: true, pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i })} />
              <div id="emailError" className="form-text text-danger">{errors.email ? errors.email.type === 'required' ? "* Email is required" : "* Email is not valid!" : ''}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNo" className="form-label">Mobile number</label>
              <input type="tel" className="form-control" id="mobileNo" {...register("mobileNo", { required: true, minLength: 10, maxLength: 10, pattern: /^[0-9]+$/i })} />
              <div id="mobileNoError" className="form-text text-danger">{errors.mobileNo ? errors.mobileNo.type === 'required' ? "* Mobile no is required" : "* Mobile no is not valid!" : ''}</div>
            </div>
            <label htmlFor="department" className="form-label">Department</label>
            <select className="form-select mb-3" {...register("branch", { required: true })}>
              <option value="Civil">Civil</option>
              <option value="Structural">Structural</option>
              <option value="Computer">Computer</option>
              <option value="Electronics">Electronics</option>
              <option value="Electrical">Electrical</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Production">Production</option>
              <option value="Electronics and Communication">Electronics and Communication</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Mathematics">Mathematics</option>
            </select>
            <div id="branchError" className="form-text text-danger">{errors.branch?.type === 'required' && "* branch is required"}</div>
            <div className="mb-3">
              <label htmlFor="semester" className="form-label">Semester</label>
              <input className="form-control" id="semester" {...register("semester", { required: true, min: 1, max: 8, pattern: /^[0-9]+$/i })} />
              <div id="semesterError" className="form-text text-danger">{errors.semester ? errors.semester.type === 'required' ? "* Semester is required" : "* Semester is not valid!" : ''}</div>
            </div>
            <div className="mt-3 mb-3">
              <label htmlFor="dob" className="form-label">Date of birth</label>
              <input type="date" className="form-control" id="dob" {...register("dob", { required: true })} />
              <div id="dobError" className="form-text text-danger">{errors.dob?.type === 'required' && "* Date of birth is required"}</div>
            </div>
            <label htmlFor="gender" className="form-label">Gender</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="male" value="Male" {...register("gender", { required: true })} defaultChecked />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="female" value="Female" {...register("gender", { required: true })} />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="other" value="Other"  {...register("gender", { required: true })} />
              <label className="form-check-label" htmlFor="other">
                Other
              </label>
            </div>
            <div id="genderError" className="form-text text-danger">{errors.gender?.type === 'required' && "* Gender is required"}</div>
            <div className="mb-3 mt-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name='password' {...register("password", { required: true, minLength: 6, validate: { uppercase: v => RegExp(/[A-Z]/).test(v), lowercase: v => RegExp(/[a-z]/).test(v), number: v => RegExp(/[0-9]/).test(v), specialchars: v => RegExp(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/).test(v) } })} />
              <div id="passwordError" className="form-text text-danger text-preline">{errors.password ? errors.password.type === 'required' ? "* Password is required" : errors.password.type === 'minLength' ? "* Password must be 6 characters long" : errors.password?.type === 'uppercase' ? "* Must contain upper case letter!" : errors.password?.type === 'lowercase' ? "* Must contain lower case letter!" : errors.password?.type === 'number' ? "* Must contain number!" : errors.password?.type === 'specialchars' ? "* Must contain special character!" : '' : ''}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="repassword" className="form-label">Re-enter password</label>
              <input type="password" className="form-control" id="repassword" name='repassword' {...register("repassword", { required: true, validate: { same: v => v === getValues('password') } })} />
              <div id="repasswordError" className="form-text text-danger">{errors.repassword ? errors.repassword.type === 'required' ? "* Re-password is required" : "* Please make sure your passwords match" : ''}</div>
            </div>
            <div className="d-grid gap-2 mt-5">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>
          :
          <form className="mt-5" onSubmit={handleSubmit(onAdminSubmit)}>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" {...register("firstName", { required: true })} />
                <div id="firstnameError" className="form-text text-danger">{errors.firstName?.type === 'required' && "* First name is required"}</div>
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName"  {...register("lastName", { required: true })} />
                <div id="lastnameError" className="form-text text-danger">{errors.lastName?.type === 'required' && "* Last name is required"}</div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" {...register("email", { required: true, pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i })} />
              <div id="emailError" className="form-text text-danger">{errors.email ? errors.email.type === 'required' ? "* Email is required" : "* Email is not valid!" : ''}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNo" className="form-label">Mobile number</label>
              <input type="tel" className="form-control" id="mobileNo" {...register("mobileNo", { required: true, minLength: 10, maxLength: 10, pattern: /^[0-9]+$/i })} />
              <div id="mobileNoError" className="form-text text-danger">{errors.mobileNo ? errors.mobileNo.type === 'required' ? "* Mobile no is required" : "* Mobile no is not valid!" : ''}</div>
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" {...register("password", { required: true, minLength: 6, validate: { uppercase: v => RegExp(/[A-Z]/).test(v), lowercase: v => RegExp(/[a-z]/).test(v), number: v => RegExp(/[0-9]/).test(v), specialchars: v => RegExp(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/).test(v) } })} />
              <div id="passwordError" className="form-text text-danger text-preline">{errors.password ? errors.password.type === 'required' ? "* Password is required" : errors.password.type === 'minLength' ? "* Password must be 6 characters long" : errors.password?.type === 'uppercase' ? "* Must contain upper case letter!" : errors.password?.type === 'lowercase' ? "* Must contain lower case letter!" : errors.password?.type === 'number' ? "* Must contain number!" : errors.password?.type === 'specialchars' ? "* Must contain special character!" : '' : ''}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="repassword" className="form-label">Re-enter password</label>
              <input type="password" className="form-control" id="repassword" name='repassword' {...register("repassword", { required: true, validate: { same: v => v === getValues('password') } })} />
              <div id="repasswordError" className="form-text text-danger">{errors.repassword ? errors.repassword.type === 'required' ? "* Re-password is required" : "* Please make sure your passwords match" : ''}</div>
            </div>
            <div className="d-grid gap-2 mt-5">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>}
        <div className="mt-5">
          Already registered? <Link to='/login'>Login here</Link>
        </div>
      </div>
    </div>
  );
}