import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function AddUser() {
    const navigate = useNavigate();

    const firsNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const userInputs = {
            firstName: firsNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value
        }

        addUser(userInputs);
    }

    function addUser(user) {
        axios.post("http://localhost:3032/users", user)
            .then((res) => {
                if (res.status == "201") {
                    alert("User added successfully!");
                    navigate("/list");
                }
                else {
                    alert(`AddUser -> addUser() HTTP Error: ${res.status} : ${res.message}`);
                }
            })
            .catch((err) => {
                alert(`AddUser -> addUser() Error: ${err}`);
            });
    }

    return(
        <>
        <p>Add user</p>
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                </div>
                <div className='col-4 shadow-sm p-3 mb-5 bg-white rounded'>
                <form>
                    <div class="form-group">
                        <label for="txtFirstName">First Name</label>
                        <input type="text" class="form-control" id="txtFirstName" placeholder="Enter First Name..."
                            ref={firsNameRef} />
                    </div>
                    <div class="form-group">
                        <label for="txtLastName">Last Name</label>
                        <input type="text" class="form-control" id="txtLastName" placeholder="Enter Last Name..."
                            ref={lastNameRef} />
                    </div>
                    <div class="form-group">
                        <label for="txtEmail">Email</label>
                        <input type="email" class="form-control" id="txtEmail" placeholder="Enter Email..."
                            ref={emailRef} />
                    </div>
                    <div style={{marginTop: "10px"}}>
                        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button> &nbsp;
                        <button className='btn btn-secondary' onClick={() => navigate("/list")}>Cancel</button>
                    </div>
                </form>
                </div>
                <div className='col-4'>
                </div>
            </div>
        </div>
        </>
    )
}

export default AddUser;