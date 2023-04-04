
const Css = {
  popup: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskStyle:{
   textAlign: 'center'
  },
  popupContent: {
    backgroundColor: '#ee9ca7',
    padding: '3rem',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    position: 'relative',
    height: 400,
    width: 600
  },
  deleteContent: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    position: 'relative'
  },
  closeBtn: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none'
  },
  rootStyle: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  inputStyle: {
    height: 44,
    width: 300
  },
  formStyle: {
    fontSize: 18,
    alignItems: 'center'
  },
  formRoot: {
    textAlign: 'center'
  },
  submitBtn: {
    width: 200,
    padding: 16,
    backgroundColor: 'blue !important',
    marginTop: 22
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20
  },
  responseStyle: {
    backgroundColor: 'red',
    border: 'none',
    marginRight: 22,
    padding: 12,
    width: 100,
    color: 'white',
    borderRadius: 4,
    cursor: 'pointer'
  },
  btnStyle: {
    backgroundColor: 'blue',
    border: 'none',
    padding: 12,
    width: 100,
    color: 'white',
    borderRadius: 4,
    cursor: 'pointer'
  },
  tableStyle: {
    borderCollapse: 'collapse',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto'
  },
  header: {
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    padding: 33,
    border: '1px solid #ccc',
    height: 79,
    '&:hover': {
      backgroundColor: '#f5f5f5'
    }
  },
  tableBody: {
    backgroundColor: 'skyblue',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#f5f5f5'
    }
  },
  rowStyle: {
    padding: 43,
    border: '1px solid gray',
    height: 60
  },
  tableBtn: {
    width: 70,
    padding: 12,
    marginLeft: 12,
    border: 'none',
    borderRadius: 3,
    cursor: 'pointer'
  },
  addTask: {
    backgroundColor: 'blue',
    width: 70,
    padding: 12,
    marginLeft: 12,
    border: 'none',
    borderRadius: 3,
    cursor: 'pointer'
  },
  btnRoot: {
    alignItems: 'center',
    margin: 'auto',
    display: 'flex',
    marginRight: '18rem',
    justifyContent: 'flex-end',
    marginBottom: 22
  },
  formStyles: {
    textAlign: 'center'
  }
};

export default Css;
