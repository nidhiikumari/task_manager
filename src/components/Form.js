import React from 'react';
import css from './styles/css'

const Form = (props) => {

  const {
    handleSubmit,
    formData,
    handleChange,
    modelState
  } = props;

  const SubmitBtn = {
    width: 320,
    padding: 12,
    backgroundColor: 'blue',
    marginTop: 22,
    borderRadius: 5,
    border: 'none',
    color: 'white',
    cursor: 'pointer'
  };
  const inputStyle = {
    height: 36,
    borderRadius: 5,
    width: 300,
    padding: 3
  };

  return (
    <div style={css.formStyle}>
      <h2>{modelState} User</h2>
      <form onSubmit={handleSubmit}>
        <div style={css.rootStyle}>
          <div style={css.inputStyle}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              style={inputStyle}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div style={css.inputStyle}>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              style={inputStyle}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div style={css.inputStyle}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              style={inputStyle}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button style={SubmitBtn} type="submit">{modelState}</button>
      </form>
    </div>
  )
}

export default Form;
