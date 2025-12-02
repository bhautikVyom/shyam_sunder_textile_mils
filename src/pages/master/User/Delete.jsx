import React from "react";
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { PiSealWarningFill } from "react-icons/pi";
import CommonDialog from "../../../components/widgets/common_dialog";

const Delete = ({ isOpen, setIsOpen, isDelete, handleDelete }) => {

  return (
    <CommonDialog isOpen={isOpen} onClose={() => setIsOpen("")}>
      <div className="flex items-center justify-center">
        <PiSealWarningFill className="lg:text-7xl text-5xl text-destructive" />
      </div>
      <DialogHeader className="py-5">
        <DialogTitle className="text-2xl text-center">
          Are you sure?
        </DialogTitle>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Are you sure you want to delete this item?
        </p>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline" >
            close
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button
            onClick={handleDelete}
            type="button"
            variant="destructive"
          >
            delete
          </Button>
        </DialogClose>
      </DialogFooter>
    </CommonDialog>
  );
};

export default Delete;
