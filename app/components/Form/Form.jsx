import React, { useState } from 'react';
import style from './form.module.scss'

function Form() {

  const [formData, setFormData] = useState({
    email: '',
    textarea: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Evitar la recarga de la página por defecto al enviar el formulario
    e.preventDefault();

    // Puedes agregar lógica adicional aquí si es necesario

    // Ejemplo: Imprimir datos del formulario
    const formData = new FormData(e.target);
    console.log({
      email: formData.get('email'),
      textarea: formData.get('textarea'),
    });

    setFormData({
      email: '',
      textarea: '',
    });
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="email">Escribe tu Email</label>
          <input required="" name="email" id="email" type="text" value={formData.email} onChange={handleChange}/>
        </div>
        <div className={style.formGroup}>
          <label htmlFor="textarea">¿En que puedo ayudarte?</label>
          <textarea required="" cols="50" rows="10" id="textarea" name="textarea" value={formData.textarea} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className={style.formSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;