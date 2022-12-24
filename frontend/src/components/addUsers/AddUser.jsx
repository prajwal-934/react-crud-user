import React, { useState, useContext } from "react";
import './addUser.css'
import ProfilesContext from "../../context/UserContext";

const AddUser = () => {
    const { createUser } = useContext(ProfilesContext)

    const [user, setUser] = useState({
        userName: "",
        email: "",
        age: "",
        occupation: "",
        password: ""
    });

    const handleInput = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
            event.preventDefault()
            createUser(user)
            setUser({
                userName: "",
                email: "",
                age: "",
                occupation: "",
                password: ""
            })
    }
    const { userName, email, age, occupation, password } = user
    return (
        <div className="adduser-section">
            <h2>Add User Details</h2>
            <div className="adduser-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name" id="label-name">
                            Name
                        </label>
                        <input type="text"
                            id="name"
                            placeholder="Enter your name" name="userName" value={userName} onChange={handleInput} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="email" id="label-name">
                            Email
                        </label>
                        <input type="email"
                            id="email"
                            placeholder="Enter your email" name="email" value={email} onChange={handleInput} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="age" id="label-name" >
                            DOB
                        </label>
                        <input type="date"
                            id="age"
                            name="age"
                            onChange={handleInput}
                            value={age} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="occupation" id="label-name">
                            Occupation
                        </label>
                        <input type="text"
                            value={occupation}
                            id="occupation"
                            placeholder="Enter your Occupation" name="occupation" onChange={handleInput} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="password" id="label-name">
                            Password
                        </label>
                        <input type="password"
                            id="password"
                            value={password}
                            placeholder="Enter your Password" name="password" onChange={handleInput} />
                    </div>
                    <button type="submit" value="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddUser