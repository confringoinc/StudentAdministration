import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
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

    axios.post('http://localhost:3000/student/login', data, { "headers": headers })
      .then(function (response) {
        if (response.data.success === true) {
          history.push({
            pathname: '/',
            state: response.data.token
          });
        }
        else {
          alert("Incorrect enrollment number or password!");
        }
      })
      .catch(function () {
        alert("Incorrect enrollment number or password!");
      });
  }

  const onAdminSubmit = admindata => {
    const data = Object.keys(admindata).map((key) =>
      `${key}=${encodeURIComponent(admindata[key])}`)
      .join('&');

    axios.post('http://localhost:3000/admin/login', data, { "headers": headers })
      .then(function (response) {
        if (response.data.success === true) {
          history.push({
            pathname: '/admin',
            state: response.data.token
          });
        }
        else {
          alert("Incorrect email or password!");
        }
      })
      .catch(function () {
        alert("Incorrect email or password!");
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
            <div className="mb-3">
              <label htmlFor="enrollmentNo" className="form-label">Enrollment number</label>
              <input type="text" className="form-control" id="enrollmentNo" {...register("enrollmentNo", { required: true, minLength: 12, maxLength: 12, pattern: /^[0-9]+$/i })} />
              <div id="enrollmentNoError" className="form-text text-danger">{errors.enrollmentNo ? errors.enrollmentNo.type === 'required' ? "* Enrollment no is required" : "* Enrollment no is not valid!" : ''}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" {...register("password", { required: true, minLength: 6 })} />
              <div id="passwordError" className="form-text text-danger text-preline">{errors.password ? errors.password.type === 'required' ? "* Password is required" : "* Password is not valid!" : ''}</div>
            </div>
            <div className="mt-5 d-grid gap-2">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
          :
          <form className="mt-5" onSubmit={handleSubmit(onAdminSubmit)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" {...register("email", { required: true, pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i })} />
              <div id="emailError" className="form-text text-danger">{errors.email ? errors.email.type === 'required' ? "* Email is required" : "* Email is not valid!" : ''}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" {...register("password", { required: true, minLength: 6 })} />
              <div id="passwordError" className="form-text text-danger text-preline">{errors.password ? errors.password.type === 'required' ? "* Password is required" : "* Password is not valid!" : ''}</div>
            </div>
            <div className="mt-5 d-grid gap-2">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>}
        <div className="mt-5">
          Not registered yet? <Link to='/register'>Register yourself</Link>
        </div>
      </div>
    </div>
  )
}

export default Login