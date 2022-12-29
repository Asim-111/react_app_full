import React, {useState} from "react";
import FormInput from "./FormInput";
import Table from "./Table";

export function RegForm(props) {
    const [tableData, setTableData] = useState([])
    const [details, setDetails] = useState({
        name:"",
        email:"",
        password:""
    })
  const handleOnChange=(e)=>{
    const {name,value}=e.target;

    setDetails((prev)=>{
      return{...prev, [name]:value}

    });
  };
  //console.log(details);
  const handleSubmit= (evnt) =>{
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(details).every(res=>res==="")
    if(checkEmptyInput)
    {
     const newData = (prev)=>([...prev, details])
     setTableData(newData);
     const emptyInput= {name:'', email:'', password:''}
     setDetails(emptyInput)
     console.log(details);
    }
}  
  return ( 
    <React.Fragment>
     <div className="container">
     <div className="row">
         <div className="col-sm-8">
         <FormInput handleChange={handleOnChange} details={details} handleSubmit={handleSubmit} mode={props.mode}/>
         <Table tableData={tableData} mode={props.mode}/>
         </div>
         <div className="col-sm-4">
         </div>
     </div>
    </div>
     </React.Fragment>
  );
}
