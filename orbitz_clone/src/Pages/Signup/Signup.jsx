import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css"

export const Signup = () => {
  const initialState = { email: "", password: "" };
  const [formValues, setFormvalues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  });

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Enter an email address"
    }
    else if (!regex.test(values.email)) {
      errors.email = "Enter a valid email address"
    }
    if (!values.password) {
      errors.password = "Enter a password"
    }
    if (!values.firstname) {
      errors.firstname = "Enter a First Name"
    }
    if (!values.lastname) {
      errors.lastname = "Enter a Last Name"
    }
    else if (values.password.length < 4) {
      errors.password = "password must be more than 4 charcters"
    }
    else if (values.password.length > 10) {
      errors.password = "password cannot exceed more than 10 charcters"
    }
    return errors
  }
  return (
    <div id="signupCont">
      <p id="titleSignup">Create an account</p>
      <form onSubmit={handleSubmit}>
        
        <div id="signupForm">
          <input type="text"
            name="Email address"
            placeholder="Email Address"
            
            onChange={handleChange} />
          <p className="errText">{formErrors.email}</p>

          <input type="text"
            name="First Name"
            placeholder="First Name"
            value={formValues.firstname}
            onChange={handleChange} />
          <p className="errText">{formErrors.firstname}</p>

          <input type="text"
            name="Email address"
            placeholder="Last Name"
            value={formValues.lastname}
            onChange={handleChange} />
          <p className="errText">{formErrors.lastname}</p>

          <input type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange} />
          <p className="errText">{formErrors.password}</p>
        </div>
        <br />
        <div id="rememberMe">
          <input id="checkbox" type="checkbox" />
          <p id="keepMe">Keep me signed in</p>
        </div>
        <div>
        <p id="checkboxText">Selecting this checkbox will keep you signed into your account on this device until you sign out.
          Do not select this on shared devices.</p>
        </div>
       <div>
       <p id="agreeText"> By creating an account, I agree to the Orbitz <span><Link to="https://www.orbitz.com/lp/lg-terms">Terms and Conditions</Link></span>, <span><Link to="https://www.orbitz.com/lp/lg-privacy">Privacy Statement</Link></span> and <span><Link to="https://www.orbitz.com/rewards/terms">Orbitz Rewards Terms and Conditions.</Link></span></p>
        <button id="signupBtn">Continue</button>
       </div>
      </form>
      <div id="AlreadyAcc"><p>Already have an account? <span><Link to="/login">Sign in</Link></span></p></div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}


// <form onSubmit={handleSubmit}>
//           <h1>Sign in</h1>
//           <div></div>
//           <div>
//             <div>
//               <input
//                 type="text"
//                 name="Email address"
//                 placeholder="Email"
//                 value={formValues.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <p>{formErrors.email}</p>
//             <div>
//               <input
//                 type="text"
//                 name="password"
//                 placeholder="Password"
//                 value={formValues.password}
//                 onChange={handleChange}
//               />
//             </div>
//             <p>{formErrors.password}</p>
//             <button>Submit</button>
//           </div>
//         </form>