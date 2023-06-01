import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function FormUser() {
  const [form,setForm]= useState({
    firstName:'',
    lastName:'',
    email:'',
    gender:'male',
    state:''
  });
  const [users,setUsers]=useState([]);
function onSubmit(e){
e.preventDefault();
setUsers(prevState=>{
  const userItem={...form};
  return[...prevState,userItem]
})
}
  function onChangeForm(e){
    const{name,value}=e.target;
    setForm(prevState=>{
      return {
        ...prevState,
        [name]:value
      }
    })
  }
  return (
    <div>
      
      <Form onSubmit={onSubmit}>
        <h2>Form Register</h2>
        <Form.Group className="mb-3" controlId="formBasicFirstName" >
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" name="firstName" value={form.firstName} onChange={onChangeForm}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" name="lastName" value={form.lastName} onChange={onChangeForm}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={form.email}  onChange={onChangeForm}/>
        </Form.Group>

        <Form.Select aria-label="Default select example" name="state" onChange={onChangeForm}>
          <option>Gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
         
        </Form.Select><br/>
        <Form.Select aria-label="Default select example" name="state" onChange={onChangeForm}>
          <option>State</option>
          <option value="HCM">HCM</option>
          <option value="HN">HN</option>
          <option value="BD">BD</option>
        </Form.Select>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br/>
      <br/>
      <div>
       <h2>list user</h2> 

      {users.length>0 ?(
<>
{
  users.map(user=>{
    return(
      <div >
        First Name: {user.firstName} <br/>
        Last Name:{user.lastName}<br/>
        Email:{user.email}<br/>
        Gender:{user.gender}<br/>
        State:{user.state}<br/>
      </div>
    )
  })
}
</>
      ):(
        <div>please add user</div>
      )}
      </div>
    </div>
  );
}

export default FormUser;
