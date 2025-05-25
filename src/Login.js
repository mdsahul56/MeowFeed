import { useState } from "react";
import { auth } from "./auth/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
            console.log("Logged in", user)
        }
        catch(error) {
            console.log("Login failed", error)
        }
    }

return (
    <div className="Login">
        <div className="login-box">
        <h2>MeowFeed</h2>
        <form onSubmit={handleSubmit}>
            <input type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input1" 
            />
            <input type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                className="login-input2"
            />
            <button className="login-button" type="submit">Login</button>
        </form>
        <p>Don't you have an account?<Link to="/register"><br/>Register Here</Link></p>
        </div>
    </div>
)
}

export default Login