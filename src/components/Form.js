import React,{ useState } from 'react';
import '../styles/form.css';

import axios from "axios";

const Form = () => {
    const [values, setValues] = useState({
        description:"",
        category: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctAnswer: "",
      });
    
    const [status, setStatus] = useState(<div></div>);

    const onChangeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values);
    };

    const onsubmitHandler = () => {
        console.log(values);
        if(values.category && 
            values.description && values.option1 && 
            values.option2 && values.option3 &&
            values.option4 && values.correctAnswer ){
                
            setStatus(<div></div>);
            console.log(values);

            let data = values;
    
            axios
            .post("https://sheltered-springs-36344.herokuapp.com/api/question", data, 
            {
              headers: { 
                   

                    
                "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50X2lkIjoiNjMyOWFmMzlmZmJlYjEwMDE2MGJjZjljIiwiZW1haWwiOiJzYXVjaGF1ZGgyNDVAZ21haWwuY29tIiwiaWF0IjoxNjYzNjc2MjE3fQ.rUEW5Qnnwb7-rx9iMPPm6_RpO7gf5zv6Uvktec3f3IY",

                "Content-type": "application/json",
              },
            })
            .then((res) => {
                setStatus(<div className="success-msg"> Success </div>);
                console.log(res)
            })
            .catch((err) => {
                setStatus(<div className="error-msg"> Error </div>);
            });

        } else {
            setStatus(<div className="error-msg">
                Please fill all the fileds
            </div>)
        }
    }


    return (
        <div className="form-container">
            <div className="admin-heading">
                ADMIN PAGE
            </div>
            <div className="form-div">
                <div>
                   <h2>Description</h2>
                  
                    <textarea 
                    
                        className="question-field"
                        id="description"
                        type="text"
                        name="description"
                        placeholder="description"
                        value={values.description}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                <h2>Category</h2>
                    <select required
                       id="category"
                       name="category"
                       value={values.category}
                       onChange={onChangeHandler}
                       className="options"
                       
                       >
                       <option value="" disabled selected hidden > Choose Category</option>
                        <option value="c">C</option>
                        <option value="html/css">HTML/CSS</option>
                        <option value="aptitude">APTITUDE</option>
                        <option value="sql">SQL</option>
                       </select>
                </div>
                <div>
                    <h2>option1</h2>
                    <textarea 
                        className="options"
                        id="option1"
                        type="text"
                        name="option1"
                        placeholder="option1"
                        value={values.option1}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <h2>option2</h2>
                    <textarea 
                        className="options"
                        id="option2"
                        type="text"
                        name="option2"
                        placeholder="option2"
                        value={values.option2}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <h2>option3</h2>
                    <textarea 
                        className="options"
                        id="option3"
                        type="text"
                        name="option3"
                        placeholder="option3"
                        value={values.option3}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <h2>option4</h2>
                    <textarea 
                        className="options"
                        id="option4"
                        type="text"
                        name="option4"
                        placeholder="option4"
                        value={values.option4}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <h2>correctAnswer</h2>
                    <textarea 
                        className="options"
                        id="correctAnswer"
                        type="text"
                        name="correctAnswer"
                        placeholder="correctAnswer"
                        value={values.correctAnswer}
                        onChange={onChangeHandler}
                    />
                </div>
                {status}
                <button type="submit" onClick={onsubmitHandler}>Submit</button>
            </div>
        </div>
    )
}

export default Form;
