import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./auth/firebase";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleRegister = async(e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log("Registered", userCredential.user)
            alert("Registration successfull! you can now log in")
            navigate("/login")
        }
        catch(error) {
            console.log("Registration failed", error.message)
            setError(error.message)
        }
    }

    return (
        <div>
            <h2>Register</h2>
            {error && <p style={{color:"red"}}>{error}</p>}
            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="confirmPassword"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register