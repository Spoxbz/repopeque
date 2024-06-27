import { supabase } from "../api/config";


// Crear servicio de autenticacion, codigo copiado de https://supabase.com/dashboard/project/ihabqfrdyaweqdcmhumb/api?page=users

export const signUpWithEmail = async (data) => {
    let result;

    try {
        result = await supabase.auth.signUp(data)
        return result
    } catch (error) {
        console.log(error);
    }

    return result;
}

// Defincion de otra funcion que nos permite actualizar el perfil
export const updateProfile = async (data) =>{
    try {
        await supabase.from('profiles').upsert(data, { return: 'minimal' })
    } catch (error) {
        console.error(error)
    }
}

// Crear servicio de sign in, codigo copiado de 

export const signInWithEmail = async (data) => {
    let result;

    try {
        result = await supabase.auth.signIn(data)
        return result
    } catch (error) {
        console.log(error)
    }

    return result
}