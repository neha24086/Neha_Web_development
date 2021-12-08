import  React,{ useState}  from "react";

const Registration = () => {
        const  [userRegistration,setuserRegistration] = useState({
  
                
                 username:"",
                    email:"",
                      phone:"",
                     password:""

                
         } );
         const [record,setRecords] =  useState([])
        const handleInput = (e) =>{
              const name=e.target.name;
                const value = e.target.value;
                console.log(name,value);
                setuserRegistration({...userRegistration, [name]:value})
        }
                                const handleSubmit = (e) => {
                                e.preventDefault();

                                const newRecord = {...userRegistration,id: new Date().getTime().toString()}
                                console.log(record);
                                setRecords([... record,newRecord,])
                                console.log(record);
                                setuserRegistration({username:"",email:"",phone:"",password:""});        
                                }   

        return(
                <>
                     
         <from action=""onSubmit={handleSubmit}>
         <div className="container">
                <div className="mb-3">
                <h1>Registration from</h1>
                        <label htmlFor="username">Fullname</label><br></br>
                        <input type="text" autoComplete= "off"
                        value={userRegistration.username}
                        onChange={handleInput}
                         name="username" id="username"/>
                </div>

                <div className="mb-3">
                        <label htmlFor="email">Email</label><br></br>
                        <input type="text" autoComplete= "off"
                        value={userRegistration.email}
                        onChange={handleInput}
                         name="email" id="email"/>
                </div>


                <div className="mb-3">
                        <label htmlFor="phone">Phone</label><br></br>
                        <input type="text" autoComplete= "off"
                        value={userRegistration.phone}
                        onChange={handleInput}
                        name="phone" id="phone"/>
                </div>

                <div className="mb-3">
                        <label htmlFor="Password">Password</label><br></br>
                        <input type="text" autoComplete= "off"
                        value={userRegistration.password}
                        onChange={handleInput}
                         name= "Password" id="Password"/>
                </div>

                <button type="submit" className="btn btn-dark">Submit</button>
         </div>

</from>
<div>
        {
                record.map((curElem) => {
                 
                        const {id,username,email,phone,password}=curElem;
                        return(
                                <div className="showDataStyle" key={curElem.id}>
                                        <p>{username}</p>
                                        <p>{email}</p>
                                        <p>{phone}</p>
                                        <p>{password}</p>
                                </div>
                        )
                }
                 ) }
</div>
                </>
        )
}
export default Registration;



