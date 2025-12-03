import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import {
  Factory,
  Boxes,
  Users,
  IndianRupee
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("design");
  const [timeRange, setTimeRange] = useState("monthly");

  const tabCard = [
    { name: "Total Orders", value: "1,248", revenue: "This Month", icon: <Factory /> },
    { name: "Inventory Items", value: "5,762", revenue: "In Warehouse", icon: <Boxes /> },
    { name: "Employees", value: "92", revenue: "Active Workers", icon: <Users /> },
    { name: "Revenue", value: "₹18.4L", revenue: "This Month", icon: <IndianRupee /> },
  ]

  const dataSet = {
    design: {
      weekly: [
        { label: "Mon", value: 10 },
        { label: "Tue", value: 160 },
        { label: "Wed", value: 14 },
        { label: "Thu", value: 200 },
        { label: "Fri", value: 180 },
      ],
      monthly: [
        { label: "Jan", value: 500 },
        { label: "Feb", value: 200 },
        { label: "Mar", value: 800 },
        { label: "Apr", value: 150 },
        { label: "May", value: 690 },
      ],
      yearly: [
        { label: "2021", value: 5000 },
        { label: "2022", value: 100 },
        { label: "2023", value: 6800 },
      ],
    },

    category: {
      weekly: [
        { label: "Mon", value: 90 },
        { label: "Tue", value: 10 },
        { label: "Wed", value: 190 },
        { label: "Thu", value: 130 },
        { label: "Fri", value: 200 },
      ],
      monthly: [
        { label: "Jan", value: 400 },
        { label: "Feb", value: 100 },
        { label: "Mar", value: 50 },
        { label: "Apr", value: 640 },
        { label: "May", value: 800 },
      ],
      yearly: [
        { label: "2021", value: 4000 },
        { label: "2022", value: 500 },
        { label: "2023", value: 8000 },
      ],
    },

    grn: {
      weekly: [
        { label: "Mon", value: 200 },
        { label: "Tue", value: 170 },
        { label: "Wed", value: 220 },
        { label: "Thu", value: 260 },
        { label: "Fri", value: 240 },
      ],
      monthly: [
        { label: "Jan", value: 800 },
        { label: "Feb", value: 900 },
        { label: "Mar", value: 950 },
        { label: "Apr", value: 1100 },
        { label: "May", value: 1030 },
      ],
      yearly: [
        { label: "2021", value: 7800 },
        { label: "2022", value: 8200 },
        { label: "2023", value: 9100 },
      ],
    },
  };

  const chartData = dataSet[activeTab][timeRange];

  return (
    <div className="grid gap-6">

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {tabCard?.map((list, index) => (
          <Card key={index} className="py-2">
            <CardHeader className="flex flex-row justify-between items-center pb-2">
              <CardTitle>{list?.name}</CardTitle>
              <span className="h-5 w-5 text-primary">
                {list?.icon}
              </span>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{list?.value}</p>
              <p className="text-sm text-muted-foreground">{list?.revenue}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-between gap-4">
        <Tabs defaultValue="design" onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="category">Category</TabsTrigger>
            <TabsTrigger value="grn">GRN</TabsTrigger>
          </TabsList>
        </Tabs>

        <Tabs defaultValue="monthly" onValueChange={setTimeRange}>
          <TabsList>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Card className="p-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            {activeTab.toUpperCase()} — {timeRange.toUpperCase()} Chart
          </CardTitle>
        </CardHeader>

        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

    </div>
  );
};

export default Dashboard;
