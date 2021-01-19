import axios from 'axios';
const token = localStorage.getItem('token');

//----------------------------------------------------------------------
const EditOperation = (data) => {
  axios
    .put(`https://ginnovation-server.herokuapp.com/api/profile/data`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((resp) => {
      console.log(resp);
      if (resp.data.status === 'success') {
        alert('Successfully Edited Data');
      } else {
        alert('Oops! There is a error');
      }
    })
    .catch((err) => {
      console.log(err.response);
      alert('Something went wrong!');
    });
};
export default EditOperation;
