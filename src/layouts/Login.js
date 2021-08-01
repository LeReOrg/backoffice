import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./LoginPageStyled";
import { useForm } from "react-hook-form";
import CustomForm from "./CustomForm.js";
import { useLogin } from "../hooks/useAuthentication";
import { errorCodeState } from "../lib/recoil-root";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { mutate, data } = useLogin();
  let history = useHistory();

  const [errorCode, setErrorCode] = useRecoilState(errorCodeState);
  console.log(data)
  const { register, handleSubmit, watch } = useForm({
    criteriaMode: "all",
    reValidateMode: "onChange",
    mode: "onChange",
  });
  useEffect(() => {
    if(data && data.user.role === 'DRIVER'){
      history.push("/admin")
    }
  },[data])
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  let email = watch("email");
  let password = watch("password");

  const loginHandle = async (data) => {
    mutate(data);
  };
  return (
    <div className={classes.main_page_login}>
      <div className={classes.main_page_content}>
        <div className={classes.main_page_contentTitle}>Đăng nhập</div>
        <form onSubmit={handleSubmit(loginHandle)}>
          <p className={classes.emailTitle}>Email hoặc SĐT</p>
          <CustomForm
            inputType="input"
            className={classes.emailFormLogin}
            nameInput="email"
            name={register}
            placeholder="Nhập Email hoặc số điện thoại"
          />
          <p className={classes.passwordTitle}>Mật khẩu</p>

          <CustomForm
            className={classes.passwordFormLogin}
            name={register}
            nameInput="password"
            placeholder="Nhập mật khẩu"
            inputOption="password"
            inputType="input"
          />
          {errorCode.code === 3 && email && password && (
            <p style={{ color: "red", fontStyle: "italic" }}>
              Xin vui lòng kiểm tra lại email/password
            </p>
          )}
          <div style={{ textAlign : "center" }}>
            <button type="submit">Đăng nhập</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
