import React from "react";
import './AddUser.css'

const AddUser = () => {

    return (
        <div className="adduser-section">
            <h2>Add User Details</h2>
            <div className="adduser-form">
                <form>
                    <div class="form-control">
                        <label for="name" id="label-name">
                            Name
                        </label>
                        <input type="text"
                            id="name"
                            placeholder="Enter your name" />
                    </div>

                    <div class="form-control">
                        <label for="email" id="label-name">
                            Email
                        </label>
                        <input type="email"
                            id="email"
                            placeholder="Enter your email" />
                    </div>

                    <div class="form-control">
                        <label for="dob" id="label-name">
                            DOB
                        </label>
                        <input type="date"
                            id="dob"
                            placeholder="Enter your email" />
                    </div>

                    <div class="form-control">
                        <label for="occupation" id="label-name">
                            Occupation
                        </label>
                        <input type="text"
                            id="occupation"
                            placeholder="Enter your Occupation" />
                    </div>

                    <div class="form-control">
                        <label for="password" id="label-name">
                            Password
                        </label>
                        <input type="password"
                            id="password"
                            placeholder="Enter your Password" />
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