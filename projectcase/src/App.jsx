// Aqui renderizamos el componente de auth para mostrar los demas componentes renderizados en auth

import { Container } from "@chakra-ui/react"
// import Auth from "./components/Auth"
import AppRouter from "./routers/index"
function App() {

  return (
    <>
      {/*<h1>Esto es App.jsx</h1>*/}
      <Container maxW='100%' h='100vh'>
        <AppRouter/>
      </Container>
    </>
  )
}

export default App
