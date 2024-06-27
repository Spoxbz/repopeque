import { Children, createContext, useEffect, useState } from "react";
import { supabase } from "../api/config";

export const AuthContext = createContext({
    user: null
})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const {data: authListener} = supabase.auth.onAuthStateChange(async () => checkUser() )
        const checkUser = async() => {
            const user = supabase.auth.user()
            if(user){
                setUser(user)
            }else{

            }

        }
        return () => {
            authListener.unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}