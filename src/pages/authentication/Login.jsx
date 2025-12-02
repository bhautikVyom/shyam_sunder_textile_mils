import React from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CommonTextField } from "../../components/widgets/common_textField";
import CommonButton from "../../components/widgets/common_button";
import { AppImages } from "../../common/ImagePath";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email must be a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[!@#$%^&*_,]/, "Password must contain at least one special character")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    // setLoading(true);
    try {
      // const response = await dispatch(login(values)).unwrap();

      await new Promise((resolve) => setTimeout(resolve, 1000));

      localStorage.setItem("isLoggedIn", "true");
    
      if (values.rememberMe) {
        localStorage.setItem("rememberedEmail", values.email);
      }

      navigate("/");
    } catch (error) {
      console.log("error", error);

    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="max-w-3xl w-full px-5">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-full border-input border h-fit rounded-md shadow-lg">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <a href="/" className="flex items-center gap-2 justify-center">
              <div className="w-20 lg:w-48">
                <img
                  src={AppImages.logoIconDark}
                  alt="logo"
                  className="block dark:hidden w-full"
                />
                <img
                  src={AppImages.logoIcon}
                  alt="logoDark"
                  className="hidden dark:block w-full"
                />
              </div>
            </a>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight dark:text-white text-gray-900">
              Sign in
            </h2>
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="mt-10 space-y-6" onSubmit={formik.handleSubmit}>
              <div className="grid gap-1.5">
                <CommonTextField
                  label="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && formik.errors.email}
                />
              </div>

              <div className="grid gap-1.5">
                <CommonTextField
                  label="password"
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your password"
                  isPassword
                  error={formik.touched.password && formik.errors.password}
                />
              </div>

              <CommonButton
                type="submit"
                className="w-full"
                isLoading={formik.isSubmitting}
              >
                signIn
              </CommonButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
