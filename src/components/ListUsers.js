import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListUsers() {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        getUserList();
    }, []);
    
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            deleteUser(id);
        }
    }

    function getUserList() {
        axios.get("http://localhost:3032/users")
        .then((res) => {
            if (res.status == "200") {
                setUserList(res.data);
            }
            else {
                alert(`ListUsers -> getUserList() HTTP Error: ${res.status} : ${res.message}`);
            }
        })
        .catch((err) => {
            alert(`ListUsers -> getUserList() Error: ${err}`);
        });
    }

    function deleteUser(id) {
        axios.delete(`http://localhost:3032/users/${id}`)
                .then((res) => {
                    if(res.status == "200") {
                        getUserList();
                        alert("User deleted successfully!");
                    }
                    else {
                        alert(`ListUsers -> handleDelete() HTTP Error: ${res.status} : ${res.message}`);
                    }
                })
                .catch((err) => {
                    alert(`ListUsers -> handleDelete() Error: ${err}`);
                });
    }

    return(
        <>
        <p>List users</p>

        <div className='container'>
            <div className='row mb-3 text-center'>
                <div className='col-2'>
                </div>
                <div className='col-8 shadow-sm p-3 mb-5 bg-white rounded'>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td scope="row">{item.id}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <Link to="/edit" state={item}>
                                                <button className='btn btn-success'>Edit</button> &nbsp;
                                            </Link>
                                            <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        )}
                    </tbody>
                    </table>
                </div>
                <div className='col-2'>
                </div>
            </div>
        </div>
        </>
    )
}

export default ListUsers;