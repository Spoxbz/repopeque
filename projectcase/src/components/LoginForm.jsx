import { Button, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react"
import useForm from "../hooks/useForm"
import { signInWithEmail } from "../services/auth"

const initialState = {
    email: '',
    password: ''
}


const LoginForm = () => {

    const { formValues, handleInputChange} = useForm(initialState)
    const { email, password } = formValues

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(formValues) // Esto no es necesario para que funcione el codigo es solo para ver los valores que se ingresan en los inputs del form como objeto
        await signInWithEmail(formValues) 
    }

    return(
        <>
            <Heading fontSize={'2xl'} mb={'20px'}>Sign In</Heading>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <FormControl id="loginemail">
                        <FormLabel >E-mail</FormLabel>
                        <Input type="email" name="email" value={email} onChange={handleInputChange}/>
                    </FormControl>
                    <FormControl id="loginpassword">
                        <FormLabel >Password</FormLabel>
                        <Input type="password" name="password" value={password} onChange={handleInputChange}/>
                    </FormControl>
                    <Button  type="submit" colorScheme="blue">Login</Button>
                </Stack>
            </form>
        </>
    )
}

export default LoginForm