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
import { useFormik } from "formik";
import * as Yup from "yup";
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
          description: Yup.string().required("description is required")
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
          description: ""
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

  return (
    <div className="grid gap-4">
      <BackPath />
      <h3 className="h5-bold">Add Design</h3>

      <Card className="p-3">
        <form className="grid gap-5" onSubmit={formik.handleSubmit}>

          <div className="flex items-center justify-between gap-4">
            <div className="max-w-96">
              <CommonTextField
                label="Design No."
                placeholder="Enter Design No."
              />
            </div>
            <CommonButton
              type="button"
              onClick={() =>
                formik.setFieldValue("designs", [
                  ...formik.values.designs,
                  { image: null, title: "" },
                ])
              }
            >
              <div className="flex items-center gap-2">
                <LuCircleFadingPlus /> Add
              </div>
            </CommonButton>
          </div>

          <Separator />

          <div className="grid grid-cols-2 gap-6">
            {formik.values.designs?.map((item, index) => (
              <div key={item} className="p-4 rounded-2xl shadow-card grid gap-6">
                <div>
                  <Label htmlFor={`design_image_${index}`} className="cursor-pointer block">

                    {!previewImages[index] && (
                      <div className="border border-dashed border-primary/50 rounded-2xl h-48 w-full flex items-center justify-center flex-col gap-3">
                        <IoIosCloudUpload className="size-14 opacity-50" />
                        <div className="grid gap-1 text-center">
                          <h5 className="h5-bold leading-none">Drop your image here.</h5>
                          <p className="p-regular text-primary/70 leading-none">
                            Supports JPG & PNG
                          </p>
                        </div>
                      </div>
                    )}

                  </Label>

                  {previewImages[index] && (
                    <div className="size-48 shadow-card rounded-2xl overflow-hidden relative mx-auto">
                      <img
                        src={item?.image[index]}
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
                />

                <CommonTextarea
                  label="matching Title"
                  placeholder={`Enter Image Ma Title`}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end">
            <CommonButton
              className="sm:max-w-36 w-full"
              type="submit"
            >
              submit
            </CommonButton>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddDesign;
