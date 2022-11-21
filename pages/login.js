import { useState } from "react"
import UseFetch from "../comps/UseFetch"
const Login = () => {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return (
        <div>
            <h1>LOGOWANIE DO PANELU ADMINA</h1>
            <input
                type="text"
                required
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder="Nazwa użytkownika"></input>
            <input
                type="email"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email"></input>
            <input
                type="password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Hasło"></input>
            <button onSubmit={()=>{UseFetch("./api/routes/auth","PUT",{username,email,password})}}>ZATWIERDŹ</button>
        </div>
    );
}
 
export default Login;