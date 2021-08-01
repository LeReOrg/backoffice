import { useMutation, useQuery } from "react-query";
import axios from "axios";
import config from "../../config";
import { useRecoilState } from "recoil";
import { userState, errorCodeState } from "../../lib/recoil-root";

// const saveLoginByFireBase = async (params) => {
//   const { data } = await axios.post(
//     `${config.api}/authentication/firebase`,
//     params
//   );
//   return data;
// };
// const useSignUp = () => {
//   const [errorCode, setErrorCode] = useRecoilState(errorCodeState);
//   const [currentUser, setcurrentUser] = useRecoilState(userState);

//   return useMutation(signUp, {
//     onSuccess: (data) => {
//       setcurrentUser(data);
//       return data;
//     },
//     onError: (error) => {
//       error &&
//         setErrorCode((preState) => ({
//           ...preState,
//           status: error.response.status,
//           message: error.response.data,
//           code: 2,
//         }));
//     },
//   });
// };

// const signUp = async (params) => {
//   const { data } = await axios.post(
//     `${config.api}/authentication/register`,
//     params
//   );
//   return data;
// };
// const useLoginByFireBase = () => {
//   const [currentUser, setcurrentUser] = useRecoilState(userState);
//   return useMutation(saveLoginByFireBase, {
//     onSuccess: (data) => {
//       setcurrentUser(data);
//     },
//     onError: () => {
//       alert("there was an error");
//     },
//   });
// };
const logInEmailAndPassword = async (params) => {
  const { data } = await axios.post(
    `${config.api}/authentication/login`,
    params
  );
  return data;
};
const useLogin = () => {
  const [errorCode, setErrorCode] = useRecoilState(errorCodeState);
  const [currentUser, setcurrentUser] = useRecoilState(userState);

  return useMutation(logInEmailAndPassword, {
    onSuccess: (data) => {
      setcurrentUser(data);
      return data;
    },
    onError: (error) => {
      
    },
  });
};
export {
  logInEmailAndPassword,
  useLogin,
};
