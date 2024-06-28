// Aqui se van a incluir todos los componentes que se van a construir, por ahora se coloca en auth, luego se puede cambiar

import { Grid, GridItem } from "@chakra-ui/react"
import SignUpForm from "./SignUpForm"
import LoginForm from "./LoginForm"
import MagicLinkForm from "./MagicLinkForm"

const Auth = () => {
    return(
        <>
            {/*<h1>Componente de Auth.jsx</h1>*/}
            <Grid templateColumns='repeat(3, 300px)' gap={70} placeContent={"center"} w={'auto'} h={'100%'}>
                <GridItem>
                    <SignUpForm />
                </GridItem>
                <GridItem>
                    <LoginForm />
                </GridItem>
                <GridItem>
                    <MagicLinkForm />
                </GridItem>
            </Grid>
        </>
    )
}

export default Auth