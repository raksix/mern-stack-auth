import axios from "axios"

var config = {
    method: 'get',
    url: 'http://localhost:5000/api/auth/me',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token') 
    },
}



export async function auth() {
    let data = new Promise((resolve, reject) => {
        axios(config).then(res => {
            resolve(res.data)
        })
    })

    let result = await data 
    
    return result
}