import { Grid } from "@cedcommerce/ounce-ui";
import React from "react";

const List = ({ data }) => {
  const columns = [
    {
      align: "center",
      dataIndex: "name",
      key: "name",
      title: "Name",
      width: 100,
    },
    {
      align: "center",
      dataIndex: "age",
      key: "age",
      title: "Age",
      width: 100,
    },
    {
      align: "center",
      dataIndex: "gender",
      key: "gender",
      title: "Gender",
      width: 100,
    },
  ];
  return (
    <div>
      <Grid columns={columns} dataSource={data} />
    </div>
  );
};

export default List;
