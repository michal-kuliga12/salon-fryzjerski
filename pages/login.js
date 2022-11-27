import { useState } from "react"
import fetchJson, {FetchError} from "../lib/fetchJson"
import useUser from "../lib/useUser";
import styles from "../styles/Login.module.scss"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head";
const Login = () => {
    const { mutateUser } = useUser({
        redirectTo: "/admin",
        redirectIfFound: true,
    });
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return (
        <div className={styles.body}> 
        <Head>
            <title>Labella | Logowanie</title>
        </Head>
            <Link className={styles.back_button} href="/">
                <Image src="/login-back.png" width={32} height={32} alt="flaticon"/>
            </Link>
            <h1>LOGOWANIE</h1>
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
                type="text"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Hasło"></input>
            <button onClick={async (event)=>{
                event.preventDefault
                const body = {username,email,password}
                try {
                    mutateUser(
                      await fetchJson("/api/routes/login", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(body)
                      }),false
                    );
                  } catch (error) {
                    console.log(error)
                  }

            }}>
                ZATWIERDŹ
            </button>
            
        </div>
    );
}
 
export default Login;