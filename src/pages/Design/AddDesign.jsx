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

const AddDesign = () => {
  // store uploaded images for 4 slots
  const [images, setImages] = useState([null, null, null, null]);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    const updatedImages = [...images];
    updatedImages[index] = previewUrl;
    setImages(updatedImages);
  };

  // Remove Image function
  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = null;
    setImages(updatedImages);
  };

  return (
    <div className="grid gap-4">
      <BackPath />
      <h3 className="h5-bold">Add Design</h3>

      <Card className="p-3">
        <form className="grid gap-5">

          <div className="flex items-center justify-between gap-4">
            <div className="max-w-96">
              <CommonTextField
                label="Design No."
                placeholder="Enter Design No."
              />
            </div>
            <CommonButton type="submit">
              <div className="flex items-center gap-2">
                <LuCircleFadingPlus /> Add
              </div>
            </CommonButton>
          </div>

          <Separator />

          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={item} className="p-4 rounded-2xl shadow-card grid gap-6">
                <div>
                  <Label htmlFor={`design_image_${index}`} className="cursor-pointer block">

                    {!images[index] && (
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

                  {images[index] && (
                    <div className="size-48 shadow-card rounded-2xl overflow-hidden relative mx-auto">
                      <img
                        src={images[index]}
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
              </div>
            ))}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddDesign;
