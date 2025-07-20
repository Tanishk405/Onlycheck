// import React, { use } from 'react'
// import "./Login.css"
// import logo from "../../assets/logo.png";
// import { useState } from 'react';
// import LoginFooter from './LoginFooter/LoginFooter';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { login , signUp} from '../../firebase';

// function Login() {
//   let [Signstate, setSignState]=useState("Sign In")

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [eye, onEye] = useState(true);



//   const user_auth = async (event) => {
//     event.preventDefault();
//     if(Signstate === "Sign In"){
//       await login(email, password);
//     }else{
//       await signUp(name, email, password);
//     }
//   }


//   const eyesFucn = ()=>{
    
//   }


//   return (
//     <div className='Login_bg'>
//       <img src={logo} className='login-logo' alt="" />
//       <div className="login-form">
//         <h1>{Signstate}</h1>
//         <form>
//           {Signstate === "Sign Up" ?          <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"  placeholder='Your name'/>: <></>}

//           <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email"  placeholder='Email'/>

//           {eye === true ? <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"  placeholder='Password'/>: <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="text"  placeholder='Password'/>}

//           <i className={`fa fa-solid ${eye === true ? "fa fa-eye-slash" : "fa-eye"}`} onClick={()=>{onEye(!eye)}}></i>
//           <button onClick={user_auth} type='submit'>{Signstate === "Sign In" ? "Sign In": "Sign Up"}</button>
//           <div className="form-help">
//             <div className="remember">
//               <input type="checkbox" />
//               <label htmlFor="">Remember Me</label>
//             </div>
//             <p>Need Help?</p>
//           </div>
//         </form>
//         <div className="form-switch">
//           {Signstate === "Sign In" ?           <p>New to Netflix?<span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:           <p>Already have account <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}


//         </div>

//       </div>

//       <LoginFooter />
//     </div>
//   )
// }

// export default Login



// import React, { useState } from 'react';
// import "./Login.css";
// import logo from "../../assets/logo.png";
// import LoginFooter from './LoginFooter/LoginFooter';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { login, signUp } from '../../firebase';

// function Login() {
//   const [Signstate, setSignState] = useState("Sign In");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [eye, onEye] = useState(true);

//   const user_auth = async (event) => {
//     event.preventDefault();
//     if (Signstate === "Sign In") {
//       try {
//         await login(email, password);
//         toast.success("Login successful!");
//       } catch (err) {
//         toast.error("User not found or wrong credentials. Please Sign Up first.");
//       }
//     } else {
//       try {
//         await signUp(name, email, password);
//         toast.success("Signup successful!");
//       } catch (err) {
//         toast.error("Signup failed. Try again.");
//       }
//     }
//   };

//   return (
//     <div className='Login_bg'>
//       <img src={logo} className='login-logo' alt="Netflix Logo" />
//       <div className="login-form">
//         <h1>{Signstate}</h1>
//         <form>
//           {Signstate === "Sign Up" && (
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               placeholder='Your name'
//             />
//           )}

//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder='Email'
//           />

//           <div className="password-wrapper">
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type={eye ? "password" : "text"}
//               placeholder='Password'
//             />
//             <i
//               className={`fa fa-solid ${eye ? "fa-eye-slash" : "fa-eye"}`}
//               onClick={() => onEye(!eye)}
//             ></i>
//           </div>

//           <button onClick={user_auth} type='submit'>
//             {Signstate === "Sign In" ? "Sign In" : "Sign Up"}
//           </button>

//           <div className="form-help">
//             <div className="remember">
//               <input type="checkbox" id="rememberMe" />
//               <label htmlFor="rememberMe">Remember Me</label>
//             </div>
//             <p>Need Help?</p>
//           </div>
//         </form>

//         <div className="form-switch">
//           {Signstate === "Sign In" ? (
//             <p>
//               New to Netflix?
//               <span onClick={() => setSignState("Sign Up")}> Sign Up Now</span>
//             </p>
//           ) : (
//             <p>
//               Already have an account?
//               <span onClick={() => setSignState("Sign In")}> Sign In Now</span>
//             </p>
//           )}
//         </div>
//       </div>

//       <LoginFooter />
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// }

// export default Login;
















// import React, { useState } from 'react';
// import "./Login.css";
// import logo from "../../assets/logo.png";
// import LoginFooter from './LoginFooter/LoginFooter';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { login, signUp } from '../../firebase';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [Signstate, setSignState] = useState("Sign In");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [eye, onEye] = useState(true);
//   const navigate = useNavigate();

//   const user_auth = async (event) => {
//     event.preventDefault();

//     if (Signstate === "Sign In") {
//       try {
//         await login(email, password);
//         toast.success("Login successful!");
//         setTimeout(() => navigate("/"), 1000); // ✅ redirect to homepage
//       } catch (err) {
//         toast.error("User not found. Switching to Sign Up...");
//         setSignState("Sign Up"); // 🔁 switch to sign up
//       }
//     } else {
//       try {
//         await signUp(name, email, password);
//         toast.success("Signup successful!");
//         setTimeout(() => navigate("/"), 1000); // ✅ redirect to homepage
//       } catch (err) {
//         toast.error("Signup failed. Try again.");
//       }
//     }
//   };

//   return (
//     <div className='Login_bg'>
//       <img src={logo} className='login-logo' alt="Netflix Logo" />
//       <div className="login-form">
//         <h1>{Signstate}</h1>
//         <form>
//           {Signstate === "Sign Up" && (
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               placeholder='Your name'
//             />
//           )}

//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder='Email'
//           />

//           <div className="password-wrapper">
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type={eye ? "password" : "text"}
//               placeholder='Password'
//             />
//             <i
//               className={`fa fa-solid ${eye ? "fa-eye-slash" : "fa-eye"}`}
//               onClick={() => onEye(!eye)}
//             ></i>
//           </div>

//           <button onClick={user_auth} type='submit'>
//             {Signstate === "Sign In" ? "Sign In" : "Sign Up"}
//           </button>

//           <div className="form-help">
//             <div className="remember">
//               <input type="checkbox" id="rememberMe" />
//               <label htmlFor="rememberMe">Remember Me</label>
//             </div>
//             <p>Need Help?</p>
//           </div>
//         </form>

//         <div className="form-switch">
//           {Signstate === "Sign In" ? (
//             <p>
//               New to Netflix?
//               <span onClick={() => setSignState("Sign Up")}> Sign Up Now</span>
//             </p>
//           ) : (
//             <p>
//               Already have an account?
//               <span onClick={() => setSignState("Sign In")}> Sign In Now</span>
//             </p>
//           )}
//         </div>
//       </div>

//       <LoginFooter />
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// }

// export default Login;























import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import LoginFooter from './LoginFooter/LoginFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login, signUp } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [Signstate, setSignState] = useState('Sign In');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eye, onEye] = useState(true);
  const navigate = useNavigate();

  const user_auth = async (event) => {
    event.preventDefault();

    if (!email || !password || (Signstate === 'Sign Up' && !name)) {
      toast.warn('Please fill in all required fields');
      return;
    }

    if (Signstate === 'Sign In') {
      try {
        await login(email, password);
        toast.success('Login successful!');
        setTimeout(() => navigate('/'), 1500); // delay redirect so toast is visible
      } catch (err) {
        toast.error('User not found. Switching to Sign Up...');
        setSignState('Sign Up');
      }
    } else {
      try {
        await signUp(name, email, password);
        toast.success('Signup successful!');
        setTimeout(() => navigate('/'), 1500);
      } catch (err) {
        toast.error('Signup failed. Try again.');
      }
    }
  };

  return (
    <div className='Login_bg'>
      <img src={logo} className='login-logo' alt='Netflix Logo' />

      <div className='login-form'>
        <h1>{Signstate}</h1>
        <form>
          {Signstate === 'Sign Up' && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder='Your name'
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Email'
          />

          <div className='password-wrapper'>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={eye ? 'password' : 'text'}
              placeholder='Password'
            />
            <i
              className={`fa fa-solid ${eye ? 'fa-eye-slash' : 'fa-eye'}`}
              onClick={() => onEye(!eye)}
            ></i>
          </div>

          <button onClick={user_auth} type='submit'>
            {Signstate === 'Sign In' ? 'Sign In' : 'Sign Up'}
          </button>

          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' id='rememberMe' />
              <label htmlFor='rememberMe'>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className='form-switch'>
          {Signstate === 'Sign In' ? (
            <p>
              New to Netflix?
              <span onClick={() => setSignState('Sign Up')}> Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span onClick={() => setSignState('Sign In')}> Sign In Now</span>
            </p>
          )}
        </div>
      </div>

      <LoginFooter />
      <ToastContainer position='top-center' autoClose={3000} />
    </div>
  );
}

export default Login;
