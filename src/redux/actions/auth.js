import axios from 'axios'
import { toast } from 'react-toastify'

export const registerAction = (authData) => async(dispatch) => {
    try {
        const {data} = await axios.post('https://stackprojectbe.onrender.com/register', authData)

        dispatch({type:'REGISTER', payload: data})

        window.location = '/'
    } catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 5000,
            });
    }
}

export const loginAction = (authData) => async(dispatch) => {
    try {
        const {data} = await axios.post('https://stackprojectbe.onrender.com/login', authData)

        dispatch({type:'LOGIN', payload: data})

        window.location = '/'
    } catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 5000,
            });
    }
}

// export const registerAction = (authData) => async (dispatch) => {
//   try {
//     const { data } = await axios.post("http://localhost:8000/register", authData);

//     dispatch({ type: "REGISTER", payload: data });

//     window.location = "/";
//   } catch (error) {
//     console.log(error);
//     toast(
//       error?.response?.data?.msg || "Kayıt sırasında bir hata oluştu.",
//       {
//         position: "top-right",
//         autoClose: 5000,
//       }
//     );
//   }
// };

// export const loginAction = (authData) => async (dispatch) => {
//   try {
//     const { data } = await axios.post("http://localhost:8000/login", authData);

//     dispatch({ type: "LOGIN", payload: data });

//     window.location = "/";
//   } catch (error) {
//     console.log(error);
//     toast(
//       error?.response?.data?.msg || "Giriş sırasında bir hata oluştu.",
//       {
//         position: "top-right",
//         autoClose: 5000,
//       }
//     );
//   }
// };