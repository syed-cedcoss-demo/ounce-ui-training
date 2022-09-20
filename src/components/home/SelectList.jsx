import { Select, Card, Badge } from "@cedcommerce/ounce-ui";
import { useState, useEffect } from "react";
const SelectList = ({ data }) => {
  const [option, setOption] = useState();
  const [selectedData, setSelectedData] = useState();

  useEffect(() => {
    const lbl = [];
    if (data?.length) {
      for (const el of data) {
        if (el?.id < 50) lbl.push({ label: el?.title, value: el?.title });
      }
      setOption(lbl);
    }
  }, [data]);

  return (
    <div className="select-container">
      <Card title="using select">
        <Select
          dropDownheight={250}
          onChange={(e) => setSelectedData(e)}
          options={[
            {
              group: [],
              label: data?.length && data[51]?.title?.substring(0, 30),
              value: data?.length && data[51]?.title,
            },
            {
              group: option,
              label: "Second collection",
              value: "Value of second collection",
            },
          ]}
          placeholder="Select Todo"
          popoverContainer="element"
          thickness="thin"
        />
        <br />
        {selectedData && (
          <Badge
            helpText="This is the selected value of dropdown"
            position="bottom"
            size="small"
            type="Positive-200"
          >
            {selectedData}
          </Badge>
        )}
      </Card>
    </div>
  );
};

export default SelectList;
