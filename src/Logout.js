import { useNavigate } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth"
import { CgLogOff } from "react-icons/cg";

const Logout = () => {
    const navigate = useNavigate()
    const auth = getAuth()

    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log("user logged Out")
            navigate("/")
            alert("You have been logged out...")
        })
        .catch((error) => {
            console.error("Logout failed", error.message)
        })
    }

    return (
        <button className="LogoutButton" onClick={handleLogout}>
            <CgLogOff />
        </button>
    )
}

export default Logout