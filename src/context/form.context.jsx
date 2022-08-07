import { createContext, useState } from "react";

const defualtFormFeilds = {
    firstName:"",
    lastName:"",
    email: ""
};



export const FormContext = createContext(defualtFormFeilds);

export const FormContextProvider = ({children})=>{
    const [formData , setFormData] = useState(defualtFormFeilds);
    
}
