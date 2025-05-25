import { auth } from "./firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"

//Register new user
export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        return userCredential.user
    }
    catch(error) {
        console.log(error)
    }
}

//Login user
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return userCredential.user
    }
    catch(error) {
        console.log(error)
    }
}

//Logout user
export const logoutUser = async () => {
    try {
        await signOut(auth)
    }
    catch(error) {
        console.log(error)
    }
}