import { useState } from "react";
import { Card } from "../../../components/ui/card";
import { CommonTextField } from "../../../components/widgets/common_textField";
import CommonTable from "../../../common/CommonTable";

const User = () => {

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
          <span className="text-green-600 font-semibold">Active</span>
        ) : (
          <span className="text-red-600 font-semibold">Inactive</span>
        ),
    },
  ];

  return (
    <div className="grid gap-6">
      <h3 className="text-xl tab:text-2xl font-bold">User List</h3>

      <div className="flex items-center justify-between gap-4 max-lg:flex-col">
        <div className="lg:max-w-72 w-full grid gap-1">
          <CommonTextField
            type="text"
            placeholder="Search..."
            className="w-full"
          />
        </div>
      </div>

      <CommonTable columns={columns} rows={staticUsers || []} />

    </div>
  );
};

export default User;
