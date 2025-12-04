import * as Yup from "yup";
import React, { useState } from "react";
import { Card } from "../../components/ui/card";
import BackPath from "../../common/BackPath";
import { CommonTextField } from "../../components/widgets/common_textField";
import { Separator } from "../../components/ui/separator";
import CommonButton from "../../components/widgets/common_button";
import { LuCircleFadingPlus } from "react-icons/lu";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { IoIosCloudUpload } from "react-icons/io";
import { Trash2 } from "lucide-react";
import { MdOutlineModeEdit } from "react-icons/md";
import { useFormik } from "formik";
import { CommonTextarea } from "../../components/widgets/common_textarea";

const AddDesign = () => {
  const [previewImages, setPreviewImages] = useState([]);

  const validationSchema = Yup.object({
    design_no: Yup.string().required("Design number is required"),
    designs: Yup.array()
      .of(
        Yup.object({
          image: Yup.mixed().required("Image is required"),
          title: Yup.string().required("Matching title is required"),
          description: Yup.string().required("Description is required"),
        })
      )
      .min(1, "At least one design required"),
  });

  const formik = useFormik({
    initialValues: {
      design_no: "",
      designs: [
        {
          image: null,
          title: "",
          description: "",
        },
      ],
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Final Submit:", values);
      alert("Form Submitted!");
    },
  });

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    const updatedPreview = [...previewImages];
    updatedPreview[index] = previewUrl;
    setPreviewImages(updatedPreview);

    formik.setFieldValue(`designs[${index}].image`, file);
  };

  const removeImage = (index) => {
    const updatedPreview = [...previewImages];
    updatedPreview[index] = null;
    setPreviewImages(updatedPreview);

    formik.setFieldValue(`designs[${index}].image`, null);
  };

  const deleteDesign = (index) => {
    const updatedPreview = [...previewImages];
    updatedPreview.splice(index, 1);
    setPreviewImages(updatedPreview);

    const updatedDesigns = [...formik.values.designs];
    updatedDesigns.splice(index, 1);
    formik.setFieldValue("designs", updatedDesigns);
  };

  return (
    <div className="grid gap-4">
      <BackPath />
      <h3 className="h5-bold">Add Design</h3>

      <Card className="p-3">
        <form className="grid gap-6" onSubmit={formik.handleSubmit}>
          <div className="flex items-center justify-between gap-4">
            <div className="max-w-96">
              <CommonTextField
                label="Design No."
                placeholder="Enter Design No."
                name="design_no"
                value={formik.values.design_no}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.design_no && formik.errors.design_no}
              />
            </div>

            <div className="flex items-center gap-3">
              <CommonButton type="button">
                <div className="flex items-center gap-2">
                  <MdOutlineModeEdit /> Edit
                </div>
              </CommonButton>
              <CommonButton
                type="button"
                onClick={() =>
                  formik.setFieldValue("designs", [
                    ...formik.values.designs,
                    { image: null, title: "", description: "" },
                  ])
                }
              >
                <div className="flex items-center gap-2">
                  <LuCircleFadingPlus /> Add
                </div>
              </CommonButton>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-2 gap-6">
            {formik.values.designs?.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl shadow-card grid gap-6"
              >
                <div>
                  <div className="relative">
                    <Label
                      htmlFor={`design_image_${index}`}
                      className="cursor-pointer block"
                    >
                      {!previewImages[index] && (
                        <div
                          className={`border border-dashed rounded-2xl h-48 w-full flex items-center justify-center flex-col gap-3
                            ${
                              formik.touched.designs?.[index]?.image &&
                              formik.errors.designs?.[index]?.image
                                ? "border-destructive" // error border
                                : "border-primary/50" // normal border
                            }
                          `}
                        >
                          <IoIosCloudUpload className="size-14 opacity-50" />
                          <div className="grid gap-1 text-center">
                            <h5 className="h5-bold leading-none">
                              Drop your image here.
                            </h5>
                            <p className="p-regular text-primary/70 leading-none">
                              Supports JPG & PNG
                            </p>
                          </div>
                        </div>
                      )}
                    </Label>

                    {formik.touched.designs?.[index]?.image &&
                      formik.errors.designs?.[index]?.image && (
                        <p className="text-destructive text-xs absolute -bottom-3.5 leading-none!">
                          {formik.errors.designs?.[index]?.image}
                        </p>
                      )}
                  </div>

                  {previewImages[index] && (
                    <div className="size-48 shadow-card rounded-2xl overflow-hidden relative mx-auto">
                      <img
                        src={previewImages[index]}
                        alt="Design Preview"
                        className="w-full h-full object-cover"
                      />

                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-0 right-0 size-10 rounded-bl-2xl flex items-center justify-center bg-destructive cursor-pointer"
                      >
                        <Trash2 className="size-5 text-background" />
                      </button>
                    </div>
                  )}

                  <Input
                    id={`design_image_${index}`}
                    className="hidden"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, index)}
                  />
                </div>

                <CommonTextField
                  label="matching Title"
                  placeholder={`Enter Image Ma Title`}
                  name={`designs[${index}].title`}
                  value={formik.values.designs[index].title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.designs?.[index]?.title &&
                    formik.errors.designs?.[index]?.title
                  }
                />

                <CommonTextarea
                  label="description"
                  placeholder={`Enter Image description`}
                  name={`designs[${index}].description`}
                  value={formik.values.designs[index].description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.designs?.[index]?.description &&
                    formik.errors.designs?.[index]?.description
                  }
                />
                {formik.values.designs?.length > 1 && (
                  <div className="flex items-center justify-end">
                    <CommonButton
                      className="sm:max-w-36 w-full"
                      type="button"
                      variant="destructive"
                      onClick={() => deleteDesign(index)}
                    >
                      delete
                    </CommonButton>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end">
            <CommonButton className="sm:max-w-36 w-full" type="submit">
              submit
            </CommonButton>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddDesign;
