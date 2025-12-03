import { useState } from "react";
import { Card } from "../../../components/ui/card";
import { CommonTextField } from "../../../components/widgets/common_textField";
import CommonTable from "../../../common/CommonTable";
import CommonButton from "../../../components/widgets/common_button";
import { CircleFadingPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const User = () => {

  const navigate = useNavigate()
  const staticUsers = [
    {
      _id: "1",
      name: "John Doe",
      email: "john@example.com",
      rank: "Gold",
      isActive: true,
      img: "https://i.pravatar.cc/150?img=1",
      isDeleted: false,
    },
    {
      _id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      rank: "Silver",
      isActive: false,
      img: "https://i.pravatar.cc/150?img=2",
      isDeleted: false,
    },
    {
      _id: "3",
      name: "Mike Johnson",
      email: "mike@example.com",
      rank: "Bronze",
      isActive: true,
      img: "https://i.pravatar.cc/150?img=3",
      isDeleted: false,
    },
    {
      _id: "4",
      name: "Sarah Wilson",
      email: "sarah@example.com",
      rank: "Platinum",
      isActive: true,
      img: "https://i.pravatar.cc/150?img=4",
      isDeleted: false,
    },
    {
      _id: "5",
      name: "David Brown",
      email: "david@example.com",
      rank: "Gold",
      isActive: false,
      img: "https://i.pravatar.cc/150?img=5",
      isDeleted: false,
    }
  ];

  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "rank", headerName: "Rank", flex: 1 },
    {
      field: "isActive",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row }) =>
        row.isActive ? (
          <span className="text-green font-semibold">Active</span>
        ) : (
          <span className="text-destructive font-semibold">Inactive</span>
        ),
    }
  ];

  const handleEdit = () => {
    alert("edit Dialog")
  }

  const handleDelete = () => {
    alert("Delete")
  }

  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-center gap-2">
        <h3 className="text-xl tab:text-2xl font-bold">User List</h3>
        <CommonButton
          type="submit"
          onClick={() => navigate('/master/user/add')}
        >
          <div className="flex items-center gap-2">
            <CircleFadingPlus />
            add
          </div>
        </CommonButton>
      </div>

      <div className="flex items-center justify-between gap-4 max-lg:flex-col">
        <div className="lg:max-w-72 w-full grid gap-1">
          <CommonTextField
            type="text"
            placeholder="Search..."
            className="w-full"
          />
        </div>
      </div>

      <CommonTable
        columns={columns}
        rows={staticUsers || []}
        showEdit={true}
        showDelete={true}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  );
};

export default User;
