import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewEntry = () => {

    const [entries, changeEntries] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view_entry").then(
            (response) => {
                changeEntries(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="container mt-5">

            <h2 className="text-center mb-4">
                View Lab Entries
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped table-hover">

                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Semester</th>
                            <th>Course</th>
                            <th>System No</th>
                            <th>Login Time</th>
                            <th>Logout Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>

                        {entries.map((entry, index) => (
                            <tr key={entry._id}>
                                <td>{entry.name}</td>
                                <td>{entry.dept}</td>
                                <td>{entry.sem}</td>
                                <td>{entry.course}</td>
                                <td>{entry.system_no}</td>
                                <td>{entry.login_time}</td>
                                <td>{entry.logout_time}</td>
                                <td>{entry.date}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default ViewEntry