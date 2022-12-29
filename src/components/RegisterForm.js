import React, {useState} from "react";

export function RegisterForm(props) {
  const [details, setDetails] = useState({
    name:"",
    email:"",
    password:""
  })
  const handleOnChange=(e)=>{
    const {name,value}=e.target;
    // const name=e.target.name;
    // const value=e.target.value;
              // Spread operator allows an iterable
              // to expand in places where 0+ arguments are expected. It is mostly used 
              // in the variable array where there is more than 1 values are expected.
              //  It allows us the privilege to obtain a list of parameters from an array.
    setDetails((prev)=>{
      return{...prev, [name]:value}

    });
  };
  //console.log(details);
  const handleSubmit=(event)=>{
    props.showAlert("Submitted See console","info");
    event.preventDefault();
    console.log(details);
    
  }
  return ( 
    
    <div className="card fs-3 my-5 font-monospace mx-auto"  style ={{backgroundColor:props.mode==='dark'?'#647E68':'#F5FFFA' , color:props.mode==='dark'?'white':'black',maxWidth:450}}>
      <div className="card-header">Register</div>
      <div className="card-body">
      <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">🙍‍♂️</span>
        <input type="text" name="name" className="form-control" placeholder="Username" onChange={handleOnChange}/>
        </div>

        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">📧</span>
        <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleOnChange}/>
        </div>
        

        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">🔐</span>
        <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleOnChange}/>
        </div>
        <div><button className="btn btn-info" >Submit</button></div>
        </form>
      </div>
    </div>
  );
}
