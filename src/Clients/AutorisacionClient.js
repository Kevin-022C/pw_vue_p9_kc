import axios from 'axios'

const baseURL = '/auth/token'

const obtenerToken = async (user, password) => {
   
    const data = await axios.get(baseURL, {
        params: {
            user: user,
            password: password
        }
    }).then(r => r.data);
    
    console.log("Respuesta completa del token:", data);
    
    
    if (typeof data === 'object' && data !== null) {
        
        if (data.token) return data.token;
        if (data.access_token) return data.access_token;
        if (data.accessToken) return data.accessToken;
       
    }
    
    return data;
}

export const obtenerTokenFachada = async (user, password) => {
    return await obtenerToken(user, password);
}
