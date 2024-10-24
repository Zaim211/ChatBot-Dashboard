import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "../UserContext";
import logo from "../assets/images/chatbot-logo.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setToken } = useContext(UserContext);

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/login", {
        email,
        password,
      });
      const token = response.data.token;
      setToken(token);
      const decodedToken = jwtDecode(token);

      console.log("Login successful. Token:", token);
      console.log("response", response);
      navigate("/");
    } catch (e) {
      alert("Connexion échouée. Veuillez réessayer plus tard");
      console.error(e);
    }
  };

  return (
    <>
      <section className="relative w-full min-h-screen bg-[#1C1C1C]">
          <div className="flex justify-center  items-center px-6 py-16  h-full">
          <div className="bg-black rounded-lg h-full shadow-md p-6 space-y-4 md:space-y-6 sm:p-8 z-10 relative" style={{ maxWidth: "500px", width: "100%", heigth: "100%" }}>
          <div className="logo flex justify-center items-center mb-4">
          <img
            src={logo} alt="logo"
             className="w-[150px] h-[70px]"
          />
          </div>
          <h1 className="text-2xl font-bold text-white text-center">Connectez-vous à votre compte</h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Votre email</label>
              <div className="flex items-center border border-gray-300 rounded-md focus-within:ring focus-within:ring-orange-500">
                <FontAwesomeIcon icon={faEnvelope} className="text-md mx-3 text-white" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleUsernameChange}
                  className="bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 block w-full p-2.5"
                  placeholder="nom@entreprise.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Mot de passe</label>
              <div className="flex items-center border border-gray-300 rounded-md focus-within:ring focus-within:ring-orange-500">
                <FontAwesomeIcon icon={faLock} className="text-md mx-3 text-white" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  onChange={handlePasswordChange}
                  className="bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 block w-full p-2.5"
                  placeholder="••••••••"
                  required
                />
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-md mx-3 text-white cursor-pointer" onClick={toggleShowPassword} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-700 focus:ring-3" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-white">Se souvenir de moi</label>
                </div>
              </div>
              <Link to="/ForgotPassword">
                <span className="text-sm font-medium text-orange-500 hover:underline">Mot de passe oublié?</span>
              </Link>
            </div>
            <button type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Se connecter
            </button>
          </form>

          <p className="text-sm font-light text-gray-500 text-center">
            Vous n'avez pas de compte ?{" "}
            <Link to="/SignUp" className="font-medium text-orange-500 hover:underline">
              Inscrivez-vous
            </Link>
          </p>
        </div>
      </div>
      </section>
    </>
  );
};

export default SignIn;

// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLock, faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { UserContext } from "../UserContext";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const { setToken } = useContext(UserContext)
  

//   const handleUsernameChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const toggleShowPassword = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post("/login", {
//         email,
//         password,
//         });
//         const token = response.data.token;
//       setToken(token);
//       const decodedToken = jwtDecode(token);

//       console.log("Login successful. Token:", token);
        
//         console.log("response", response);
//         navigate("/");
//         } catch (e) {
//         alert("Connexion échouée. Veuillez réessayer plus tard");
//         console.error(e);
//         }
//   };

//   return (
//     <>
//       <section className="relative w-full h-screen bg-no-repeat bg-cover bg-center">
//         <div className="absolute inset-0 bg-black opacity-70"></div>
//         <div className="flex justify-center items-center px-6 py-8 mx-auto h-full">
//           <div className="bg-white rounded-lg shadow-md p-6 space-y-4 md:space-y-6 sm:p-8 z-10 relative" style={{ maxWidth: "500px", width: "100%" }}>
//             <div className="logo flex justify-center items-center">
//               <span className="font-bold text-2xl" style={{ color: "navy" }}>Chat</span>
//               <span className="font-bold text-2xl text-cons-light" style={{ color: "navy" }}>Bot</span>
//             </div>
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Connectez-vous à votre compte</h1>
//             <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre email</label>
//                 <div className="flex items-center border-2 border-gray-300 rounded-md">
//                   <FontAwesomeIcon icon={faEnvelope} className="text-md mx-3 text-gray-600" />
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     onChange={handleUsernameChange}
//                     className="bg-gray-50 text-gray-900 sm:text-sm rounded-r-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                     placeholder="nom@entreprise.com"
//                     required
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
//                 <div className="flex items-center border-2 border-gray-300 rounded-md">
//                   <FontAwesomeIcon icon={faLock} className="text-md mx-3 text-gray-600" />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     id="password"
//                     onChange={handlePasswordChange}
//                     className="bg-gray-50 text-gray-900 sm:text-sm rounded-r-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                     placeholder="••••••••"
//                     required
//                   />
//                   <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-md mx-3 text-gray-600 cursor-pointer" onClick={toggleShowPassword} />
//                 </div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                     <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3" />
//                   </div>
//                   <div className="ml-3 text-sm">
//                     <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Se souvenir de moi</label>
//                   </div>
//                 </div>
//                 <Link to="/ForgotPassword">
//                   <span className="text-sm font-medium text-primary-600 hover:underline">Mot de passe oublié?</span>
//                 </Link>
//               </div>
//               <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
//                 Se connecter
//               </button>
//             </form>

//             {/* Add this section for the Sign Up button */}
//             <p className="text-sm font-light text-gray-500">
//               Vous n'avez pas de compte ?{" "}
//               <Link to="/SignUp" className="font-medium text-primary-600 hover:underline">
//                 Inscrivez-vous
//               </Link>
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SignIn;

