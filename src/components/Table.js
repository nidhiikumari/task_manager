import React, { useState } from 'react';
import Form from './Form';
import Popup from './popup';
import css from './styles/css';

const Table = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob', age: 40, email: 'bob@example.com' },
  ]);
  const [editIndex, setEditIndex] = useState(-1);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    age: '',
    email: '',
  });
  const [modelState, setModelState] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [selectedId, setSelectedId] = useState();

  const handleClosePopup = () => {
    setShowPopup(!showPopup);
    setFormData({ id: '', name: '', age: '', email: '' });
  };

  const deleteModelClose = () => {
    setDeletePopup(!deletePopup);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const generateId = () => {
    const idLength = 6;
    const chars = '0123456789';
    let id = '';

    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      id += chars[randomIndex];
    }

    return id;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const UniqueId = generateId();
    const { id, name, age, email } = formData;
    const newData = { id: parseInt(UniqueId), name, age: parseInt(age), email };
    const existingData = data.find((item) => item.id === parseInt(id));
    if (existingData) {
      setData((prevData) =>
        prevData.map((item) => (item.id === parseInt(id) ? newData : item))
      );
    } else {
      setData((prevData) => [...prevData, newData]);
    }
    setEditIndex(-1);
    setFormData({ name: '', age: '', email: '' });
    setShowPopup(false);
  };

  const handleEdit = (index) => {
    setShowPopup(true);
    setModelState('Update');
    const item = data[index];
    setFormData({ ...item });
    setEditIndex(index);
  };

  const handleDelete = (id) => {
    setSelectedId(id);
    setModelState('Delete');
    setDeletePopup(true);
  };

  const handleOk = () => {
    setData((prevData) => prevData.filter((item) => item.id !== selectedId));
    setTimeout(() => {
      setDeletePopup(false);
    }, 1000)
  }

  const handleAdd = () => {
    setModelState('Add');
    setShowPopup(true);
  };

  return (
    <div>
      <h1 style={css.taskStyle}>Task Manager</h1>
      <div style={css.btnRoot}>
        <button onClick={() => handleAdd()} style={css.addTask}>Add</button>
      </div>
      <table style={css.tableStyle}>
        <thead style={css.header}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody style={css.tableBody}>
          {data.map((item, index) => (
            <tr key={item.id} style={css.rowStyle}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleEdit(index)} style={css.tableBtn}>Edit</button>
                <button onClick={() => handleDelete(item.id)} style={css.tableBtn}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        showPopup && (
          <Popup isOpen={showPopup} onClose={handleClosePopup}>
            <div style={css.formStyles}>
              <Form
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                formData={formData}
                editIndex={editIndex}
                modelState={modelState}
              />
            </div>
          </Popup>
        )
      }

      {
        deletePopup && (
          <div style={css.popup}>
            <div style={css.deleteContent}>
              <button style={css.closeBtn} onClick={deleteModelClose}>X</button>
              <div style={css.formRoot}>Are You Sure Want to Delete ?</div>
              <div style={css.btnGroup}>
                <button style={css.responseStyle} onClick={deleteModelClose}>Cancel</button>
                <button style={css.btnStyle} onClick={handleOk}>Ok</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Table;
