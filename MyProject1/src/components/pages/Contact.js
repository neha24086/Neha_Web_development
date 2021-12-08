import React,{useState} from "react";

const Contact = () => {

        const [data,setData]= useState( {
         fullname:"",
         phone:"",
         email:"",
         msg:""       

                
        });
        const InputEvent = (event) => {
                const {name,value}=event.target;

               setData((preval) => {
                       return{
                               ...preval,
                               [name]:value,
                       };
               });
        };
        const fromSubmit = (e) => {
e.preventDefault();
alert('${data.fullname}');
        }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <from onSubmit={fromSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Fullname
                </label>
                <input
                  type="Name"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile number"
                />
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
                
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="Message"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
            </from>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
