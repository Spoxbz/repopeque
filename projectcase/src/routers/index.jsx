import { Route, Routes} from "react-router-dom"
import Auth from "../components/Auth"
import Welcome from "../components/Welcome"

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="Login" element={<Auth />}></Route>
        </Routes>
    )
}

export default AppRouter