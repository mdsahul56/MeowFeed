import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import Newpost from "./Newpost";
import Postpage from "./Postpage";
import EditPost from "./EditPost";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./auth/firebase";


function App() {

  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])
  

  return (
    <div className="App">
      <DataProvider>
        { user && (
          <>
            <Header title="MeowFeed" />
            <Nav />
          </>
        )}
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to = "/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          
            <Route path="post">
              <Route index element = {<Newpost />} />
              <Route path=":id" element={<Postpage />} />
            </Route>
          <Route path ="/edit/:id" element={<EditPost />}/>
          <Route path="about" element = {<About />} />
          <Route path="*" element = {<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
