import React , {useState,useContext} from "react";
import './AddUser.css'
import ProfilesContext from "../Context/UserContext";

const AddUser = () => {
    const {createUser} = useContext(ProfilesContext)

    const[user,setUser]=useState({
        userName : "",
        email : "",
        age : "",
        occupation : "",
        password : ""
    });

    let propName , value
    const handleInput=(event)=>{
      
         propName = event.target.name;
         value = event.target.value;
         setUser({...user, [propName]:value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        createUser(user)
    }

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
                            placeholder="Enter your name" name="userName" value={user.userName} onChange={handleInput} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="email" id="label-name">
                            Email
                        </label>
                        <input type="email"
                            id="email"
                            placeholder="Enter your email" name="email" value={user.email} onChange={handleInput} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="age" id="label-name" >
                            DOB
                        </label>
                        <input type="date"
                            id="age"
                            name="age"
                            onChange={handleInput} 
                            value={user.age}/>
                    </div>

                    <div className="form-control">
                        <label htmlFor="occupation" id="label-name">
                            Occupation
                        </label>
                        <input type="text"
                            value={user.occupation}
                            id="occupation"
                            placeholder="Enter your Occupation" name="occupation" onChange={handleInput}/>
                    </div>

                    <div className="form-control">
                        <label htmlFor="password" id="label-name">
                            Password
                        </label>
                        <input type="password"
                            id="password"
                            value={user.password}
                            placeholder="Enter your Password" name="password" onChange={handleInput}/>
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