import { useFormik } from "formik";
import * as Yup from "yup";
import { CommonTextField } from "../../../components/widgets/common_textField";
import CommonButton from "../../../components/widgets/common_button";
import { Separator } from "../../../components/ui/separator";
import { Card } from "../../../components/ui/card";
import CommonBox from "../../../components/widgets/common_box";
import { Label } from "../../../components/ui/label";
import BackPath from "../../../common/BackPath";

export default function AddEditUser() {
  const initialValues = {
    name: "",
    mobile: "",
    password: "",
    role: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
    role: Yup.string().required("Role is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "At least one uppercase letter")
      .matches(/[a-z]/, "At least one lowercase letter")
      .matches(/[0-9]/, "At least one number")
      .matches(/[!@#$%^&*_,]/, "At least one special character")
      .required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <BackPath />
      <Card className="p-4 bg-background grid gap-5 mt-4 max-w-[780px]">
        <h3 className="h5-bold">Add User</h3>
        <Separator />

        <form className="grid gap-8" onSubmit={formik.handleSubmit}>
          <div className="grid gap-6 grid-cols-2 items-start">
            <CommonTextField
              label="User Name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && formik.errors.name}
            />

            <CommonTextField
              label="Mobile Number"
              type="number"
              name="mobile"
              placeholder="Enter your mobile"
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
            <CommonBox
              placeholders="select role"
              label="role"
              frameworks={[
                { value: "admin", label: "admin", name: "admin" },
                { value: "job work", label: "job work", name: "job work" },
              ]}
              name="role"
              value={formik.values.role}
              onChange={(val) => formik.setFieldValue("role", val)}
              onBlur={() => formik.setFieldTouched("role", true)}
              error={formik.touched.role && formik.errors.role}
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

            <CommonTextField
              label="Confirm Password"
              type="password"
              name="confirm_password"
              placeholder="Enter your Confirm Password"
              isPassword
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirm_password &&
                formik.errors.confirm_password
              }
            />
          </div>

          <CommonButton
            type="submit"
            size="lg"
            isLoading={formik.isSubmitting}
          >
            Submit
          </CommonButton>
        </form>
      </Card>
    </>
  );
}
