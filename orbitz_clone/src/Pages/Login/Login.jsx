import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";


export const Login = () => {
    const initialState = { email: "", password: "" };
    const [formValues, setFormvalues] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);
  
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
      if(Object.keys(formErrors).length ===0 && isSubmit){
        console.log(formValues)
      }
    });
  
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!values.email){
        errors.email = "Enter an email address"
      }
      else if(!regex.test(values.email)){
        errors.email = "Enter a valid email address"
      }
      if(!values.password){
        errors.password = "Enter a password"
      }
      else if(values.password.length < 4){
        errors.password = "password must be more than 4 charcters"
      }
      else if(values.password.length > 10){
        errors.password = "password cannot exceed more than 10 charcters"
      }
      return errors
    }
    return (
      <div>
        <Box>
          <form  onSubmit={handleSubmit}>
            <Heading>Sign in</Heading>
            <Input type="text"
                 name="Email address"
                 placeholder="Email"
                 value={formValues.email}
                 onChange={handleChange}/>
                 <Text>{formErrors.email}</Text>
            <Input type="text"
                 name="password"
                 placeholder="Password"
                 value={formValues.password}
                 onChange={handleChange}/>
                 <Text>{formErrors.password}</Text>
                 <Button>Sign in</Button>
          </form>
        </Box>
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