import React, { useState } from 'react'
import axios from 'axios'
import NavBar from './Navbar'

const AddEntry = () => {

    const [input, changeInput] = useState({
        name: "",
        dept: "",
        sem: "",
        course: "",
        system_no: "",
        login_time: "",
        logout_time: "",
        date: ""
    })

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:3000/add_entry", input).then(
            (response) => {
                alert(response.data.status)

                changeInput({
                    name: "",
                    dept: "",
                    sem: "",
                    course: "",
                    system_no: "",
                    login_time: "",
                    logout_time: "",
                    date: ""
                })
            }
        ).catch(
            (error) => {
                console.log(error)
                alert("Failed to Add Entry")
            }
        )
    }

    return (
        <div className="container mt-5">

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">Add Entry</h2>

                <div className="row g-3">

                    <div className="col-md-6">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={input.name}
                            onChange={inputHandler}
                        />
                    </div>

                    <div className="col-md-6">
                        <label>Department</label>
                        <select
                            className="form-select"
                            name="dept"
                            value={input.dept}
                            onChange={inputHandler}
                        >
                            <option value="">Select Department</option>
                            <option value="MCA">MCA</option>
                            <option value="MBA">MBA</option>
                            <option value="ECE">ECE</option>
                            <option value="ME">ME</option>
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label>Semester</label>
                        <input
                            type="text"
                            className="form-control"
                            name="sem"
                            value={input.sem}
                            onChange={inputHandler}
                        />
                    </div>

                    <div className="col-md-6">
                        <label>Course</label>
                        <select
                            className="form-select"
                            name="course"
                            value={input.course}
                            onChange={inputHandler}
                        >
                            <option value="">Select Course</option>
                            <option value="Python">Python</option>
                            <option value="Java">Java</option>
                            <option value="Data Structures">Data Structures</option>
                            <option value="DBMS">DBMS</option>
                            <option value="Machine Learning">Machine Learning</option>
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label>System Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="system_no"
                            value={input.system_no}
                            onChange={inputHandler}
                        />
                    </div>

                    <div className="col-md-6">
                        <label>Login Time</label>
                        <input
                            type="time"
                            className="form-control"
                            name="login_time"
                            value={input.login_time}
                            onChange={inputHandler}
                        />
                    </div>

                    <div className="col-md-6">
                        <label>Logout Time</label>
                        <input
                            type="time"
                            className="form-control"
                            name="logout_time"
                            value={input.logout_time}
                            onChange={inputHandler}
                        />
                    </div>

                    <div className="col-md-6">
                        <label>Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="date"
                            value={input.date}
                            onChange={inputHandler}
                        />
                    </div>

                    <div className="col-12 text-center">
                        <button
                            className="btn btn-success"
                            onClick={readValue}
                        >
                            Add Entry
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddEntry