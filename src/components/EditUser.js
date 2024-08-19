import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditUser() {
    const navigate = useNavigate();

    const [firstNameText, setFirstName] = useState("");
    const [lastNameText, setLastName] = useState("");
    const [emailText, setEmail] = useState("");

    const [user, setUser] = useState({});
    const location = useLocation();

    useEffect(() => {
        setUser(location.state);

        setFirstName(location.state.firstName);
        setLastName(location.state.lastName);
        setEmail(location.state.email);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const userInputs = {
            firstName: firstNameText,
            lastName: lastNameText,
            email: emailText
        }

        updateUser(userInputs);
    }

    function updateUser(userInputs) {
        axios.put(`http://localhost:3032/users/${user.id}`, userInputs)
            .then((res) => {
                if (res.status == "200") {
                    alert("User updated successfully!");
                    navigate("/list");
                }
                else {
                    alert(`EditUser -> updateUser() HTTP Error: ${res.status} : ${res.message}`);
                }
            })
            .catch((err) => {
                alert(`EditUser -> updateUser() Error: ${err}`);
            });
    }
    
    return(
        <>
        <p>Edit user</p>
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                </div>
                <div className='col-4 shadow-sm p-3 mb-5 bg-white rounded'>
                <form>
                    <div class="form-group">
                        <label for="txtFirstName">First Name</label>
                        <input type="text" class="form-control" id="txtFirstName" placeholder="Enter First Name..."
                            value={firstNameText} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="txtLastName">Last Name</label>
                        <input type="text" class="form-control" id="txtLastName" placeholder="Enter Last Name..."
                            value={lastNameText} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="txtEmail">Email</label>
                        <input type="email" class="form-control" id="txtEmail" placeholder="Enter Email..."
                            value={emailText} onChange={(e) => setEmail(e.target.value)} />
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

export default EditUser;