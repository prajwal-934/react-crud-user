import { createContext, useState , useCallback } from 'react'
import axios from 'axios'
import getAge from 'get-age'
const ProfilesContext = createContext()

function Provider({ children }) {
    const [users, setUsers] = useState([])

    const getAllProfiles = useCallback(async () => {
        const response = await axios.get(`user`)
        setUsers(response.data)
    },[]
    )



    const createUser = async (newUser) => {
        newUser = ({ ...newUser, age: getAge(newUser.age) })
        await axios.post('user', newUser).then((res) => {
            if (res.status === 200) {
                console.log("User Created Successfully")
            }
        }).catch((e) => { console.log("something went wrong") })

        const updatedUsers = [...users, newUser]
        setUsers(updatedUsers)
    }

    const deleteUserById = async (userId) => {
        await axios.delete(`user/${userId}`)

        const updatedUserList = users.filter((user) => {
            return user._id !== userId;
        })
        setUsers(updatedUserList)

    }

    const globalUserContext = {
        users,
        getAllProfiles,
        createUser,
        deleteUserById
    }



    return (<ProfilesContext.Provider value={globalUserContext}>
        {children}
        </ProfilesContext.Provider>
        );
}

export { Provider }
export default ProfilesContext;