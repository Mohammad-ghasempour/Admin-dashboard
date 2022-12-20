import "./login.scss";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // make login function to firebase authentication

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/")
    // ...
  })
  .catch((error) => {
    setError(true);
  });

  };


  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <span>Invalid Email or Password!</span>}
      </form>
    </div>
  );
};

export default Login;
