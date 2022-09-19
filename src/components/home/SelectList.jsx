import { Select, Card, ButtonDropdown } from "@cedcommerce/ounce-ui";
import { useState, useEffect } from "react";
const SelectList = ({ data }) => {
  const [option, setOption] = useState();

  useEffect(() => {
    console.log("data", data);
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
          // name="Name"
          onChange={function noRefCheck() {}}
          options={[
            {
              group: [],
              label: data?.length && data[51]?.title?.substring(0, 30),
              value: data?.length && data[51]?.title,
            },
            {
              group: option,
              label: "Collection Of headings",
              value: "2.0",
            },
          ]}
          placeholder="Select Todo"
          popoverContainer="element"
          // selectHelp="Write help text here"
          thickness="thin"
        />
      </Card>
      {/* <Card title="using dropdown button">
        <ButtonDropdown
          list={[
            {
              //   icon: <Home size={20} />,
              label: "Dropdown Item 1",
              onClick: function noRefCheck() {},
            },
            {
              //   icon: <Home size={20} />,
              label: "Dropdown Item 2",
              onClick: function noRefCheck() {},
            },
            {
              //   icon: <Home size={20} />,
              label: "Dropdown Item 3",
              onClick: function noRefCheck() {},
            },
          ]}
          thickness="large"
          title="More Actions"
          type="none"
        />
      </Card> */}
    </div>
  );
};

export default SelectList;
