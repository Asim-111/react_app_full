function FormInput({mode,handleChange, details, handleSubmit}){
    return(
        <div className="card fs-3 my-5 font-monospace mx-auto"  style ={{backgroundColor:mode==='dark'?'#647E68':'#F5FFFA' , color:mode==='dark'?'white':'black',maxWidth:450}}>
      <div className="card-header">Register</div>
      <div className="card-body">
      <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">🙍‍♂️</span>
        <input type="text" name="name" value={details.name} className="form-control" placeholder="Username" onChange={handleChange} />
        </div>

        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">📧</span>
        <input type="email" name="email" value={details.email} className="form-control" placeholder="Email" onChange={handleChange} />
        </div>
        

        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">🔐</span>
        <input type="password" name="password" value={details.password} className="form-control" placeholder="Password" onChange={handleChange} />
        </div>
        <div><button className="btn btn-info" onClick={handleSubmit}>Submit</button></div>
        </form>
      </div>
    </div>
    
        // <div className="form-row row">
        //   <div className="col">
        //     <input type="text" onChange={handleChange} value={details.fullName} name="name" className="form-control"  placeholder="Name" />
        //   </div>
        //   <div className="col">
        //     <input type="email" onChange={handleChange} value={details.emailAddress} name="email" className="form-control" placeholder="Email" />
        //   </div>
        //   <div className="col">
        //     <input type="text" onChange={handleChange} value={details.salary} name="password" className="form-control" placeholder="Password" />
        //   </div>
        //   <div className="col">
        //     <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
        //   </div>
        // </div>
     
      
    )
    }
    
    export default FormInput;