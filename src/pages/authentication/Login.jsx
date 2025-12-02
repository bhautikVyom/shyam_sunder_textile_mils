import React from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CommonTextField } from "../../components/widgets/common_textField";
import CommonButton from "../../components/widgets/common_button";
import { AppImages } from "../../common/ImagePath";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = { mobile: "", password: "" };

  const validationSchema = Yup.object({
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "At least one uppercase letter")
      .matches(/[a-z]/, "At least one lowercase letter")
      .matches(/[0-9]/, "At least one number")
      .matches(/[!@#$%^&*_,]/, "At least one special character")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
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

  const formik = useFormik({ initialValues, validationSchema, onSubmit: handleSubmit });

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-[#0f0f0f] dark:via-[#1a1a1a] dark:to-[#0f0f0f] p-4">

      <div className="w-full max-w-md bg-white dark:bg-[#141414] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-8 animate-fadeIn">

        <div className="flex flex-col items-center">
          <div className="w-24 mb-6">
            <img src={AppImages.logoIconDark} alt="logo" className="block dark:hidden w-full" />
            <img src={AppImages.logoIcon} alt="logoDark" className="hidden dark:block w-full" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            Welcome Back
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
            Sign in to continue to your dashboard
          </p>
        </div>

        <form className="mt-10 space-y-6" onSubmit={formik.handleSubmit}>
          <CommonTextField
            label="Mobile Number"
            type="number"
            name="mobile"
            placeholder="Enter your mobile number"
            value={formik.values.mobile}
            maxLength={10}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              if (value.length <= 10) {
                formik.setFieldValue("mobile", value);
              }
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.mobile && formik.errors.mobile}
          />

          <CommonTextField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            isPassword
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
          />

          <CommonButton
            type="submit"
            className="w-full py-3 text-lg rounded-xl"
            isLoading={formik.isSubmitting}
          >
            Sign In
          </CommonButton>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;