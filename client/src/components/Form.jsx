import React, { useState } from 'react'
import Alert from '../extras/Alert';
import axios from 'axios';

const initialForm = {
    printToText: "",
};

const Form = _ => {
    const [form, setForm] = useState(initialForm);

    const handlerChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });      
    
    };

    const handlerSubmit = (e) => {
      e.preventDefault();

      if(!form.printToText){
          Alert("Llena ambos campos para poder imprimir");
          return;
      };

    axios.post('http://localhost:3001/print', `textToPrint=${form.printToText}`)
        .then(() => console.log('Text to print => Sended'))
        .catch(err => {
            console.error(err);
        });

        setForm(initialForm);
    };

    return (
        <div className="form">
            <form onSubmit={handlerSubmit}>
                <div className="mb-3">
                    <label className="form-label">Type some text</label>
                    <input className="form-control" type="text" name="printToText" id="printToText" onChange={handlerChange} value={form.printToText}/>
                </div>
                <button type="submit" className="btn btn-primary">Print text</button>
            </form>
        </div>
    )
}

export default Form