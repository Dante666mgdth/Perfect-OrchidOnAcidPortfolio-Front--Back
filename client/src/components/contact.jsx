import React, { useRef ,useState } from "react";
// import emailjs from "@emailjs/browser";
import styled from "styled-components";
import axios from "axios"
const Contact = () => {

  // const form = useRef();

	const [ subjectMail, setSubjectMail ] = useState("")
	const [ textMail, setTextMail ] = useState("")
  const emailTest = { subjectMail, textMail}
  console.log(emailTest);
	const handleSend = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/sendmails",emailTest).then
      setSubjectMail("");
      setTextMail("");
      
    } catch (error) {

      console.log(error)
    }
  }
  return <StyledContactForm>
      <form>
        <label>subject</label>
        <input type="text" name="subjectMail" value={subjectMail} onChange={(e)=>setSubjectMail(e.target.value)} />
        <label>Comment</label>
        <input type="text"   name="textMail" value={textMail} onChange={(e)=>setTextMail(e.target.value)}/>
        <button onClick={handleSend}>Send Mail</button>
      </form>
    </StyledContactForm>
  
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 130%;
    font-size: 20px;
    text-align: left;
    padding: 0px;
    margin:  auto 350px;

    input {
      width: 100%;
      height: 38px;
      padding: 7px;
      outline: none;
      border-radius: 7px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid #4f0eb8;
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 2px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid #4f0eb8;
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #f34573;
      color: white;
      border: none;
    }
    button {
  background-color: #f34573; 
  border: 0px solid rgb(24, 24, 24);
  border-radius: 9px;
  color: #000000;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
  }
`;
