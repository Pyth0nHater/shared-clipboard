import axios from 'axios'

export const registration = async (email, password) => {
    try{
        const response = await axios.post(`http://localhost:3000/registration`, {
            email,
            password
        })
        alert(response.data.message)
        
    }catch(error){
        alert(error.response.data.message)
    }
}

export const login = (email, password) => {
    return async dispatch =>{
        try{
            const response = await axios.post(`http://localhost:3000/login`, {
                email,
                password
            })
            console.log(response.data)

        }catch(error){
            alert(error.response.data.message)
        }
    }
}