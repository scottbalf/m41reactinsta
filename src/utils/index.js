import { writeCookie } from "../common"

export const loginUser = async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/loginUser", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "email" : email,
                "password" : password
            })
        })
        const data = await response.json()
        console.log(data)
        setter(data.username)
        writeCookie("jwt_token", data.token, 7)
    } catch (error) {
        console.log(error)
    }
}

export const regUser = async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/createUser", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                    "username" : username,
                    "email" : email,
                    "password" : password
            })
        })
        const data = await response.json()
        console.log(data)
        setter(data.username)

    } catch (error) {
        console.log(error)
    }
}

export const readUsers = async () => {
    try {
        const response = await fetch("http://localhost:5001/readUser", {
            method: "GET",
            headers: {"Content-Type" : "application/json"}
        })
        const data = await response.json()
        const usernames = data.user.map(users => users.username)
        return usernames
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async (username, key, value) => {
    try {
        const response = await fetch("http://localhost:5001/updateUser", {
            method: "PUT",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                "username" : username,
                "key" : key,
                "value" : value
            })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (username) => {
    try {
        const response = await fetch("http://localhost:5001/deleteUser", {
            method: "DELETE",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                "username" : username,
            })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const findUser = async (cookie) => {
    try {
        const response = await fetch("http://localhost:5001/loginUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${cookie}`
            },
        })
        const data = await response.json()
        return data.username
    } catch (error) {
        console.log(error)
    }
}