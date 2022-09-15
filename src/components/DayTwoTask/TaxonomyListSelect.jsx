import { Card, Select } from "@cedcommerce/ounce-ui";
import { useState } from "react";
import { useEffect } from "react";
import allData from "./data";

const TaxonomyListSelect = () => {
  const [data, setData] = useState();
  const [fLevel, setFLevel] = useState();
  const [sLevel, setSLevel] = useState();
  const [lbl1, setLbl1] = useState();
  const [lbl2, setLbl2] = useState();
  const [tLevel, setTLevel] = useState();
  //   const [lbl3, setLbl3] = useState();

  useEffect(() => {
    const level = [];
    const formatData = allData.trim().split("\n");
    setData(formatData);
    for (const fEl of formatData) {
      if (!fEl.includes(">")) {
        level.push({
          label: fEl,
          value: fEl,
        });
      }
    }
    setFLevel(level);
  }, []);

  //handling data for second level list
  const handleSecondLevel = (lbl) => {
    console.log("lbl", lbl);
    const check = [];
    for (const sEl of data) {
      if (sEl.includes(lbl) && sEl.includes(">")) {
        const arr = sEl.trim().split(">");
        const found = check.some((el) => el?.label === arr[1]);
        if (!found) {
          check.push({
            label: arr[1],
            value: arr[1],
          });
        }
      }
    }
    setLbl1(lbl);
    setSLevel(check);
  };

  //handling data for third level list
  const handleThirdLevel = (lbl) => {
    const check = [];
    for (const sEl of data) {
      if (sEl.includes(lbl) && sEl.includes(">")) {
        const arr = sEl.trim().split(">");
        const found = check.some((el) => el?.label === arr[2]);
        if (!found) {
          check.push({
            label: arr[2],
            value: arr[2],
          });
        }
      }
    }
    setLbl2(lbl);
    setTLevel(check);
  };
  const optionsLbl1 = [
    {
      group: fLevel,
      label: "Select your top level category",
      value: "0",
    },
  ];
  const optionsLbl2 = [
    {
      group: sLevel,
      label: "Select your mid level category",
      value: "0",
    },
  ];
  const optionsLbl3 = [
    {
      group: tLevel,
      label: "Select your mid level category",
      value: "0",
    },
  ];

  return (
    <div>
      <Card>
        <Select
          dropDownheight={600}
          name="Select top level"
          onChange={(e) => handleSecondLevel(e)}
          options={optionsLbl1}
          required
          value={lbl1}
        />
        {sLevel?.length && (
          <Select
            dropDownheight={600}
            name="Select mid level"
            onChange={(e) => handleThirdLevel(e)}
            options={optionsLbl2}
            required
            value={lbl2}
          />
        )}
        {tLevel?.length && (
          <Select
            dropDownheight={600}
            name="Select low level"
            // onChange={(e) => handleThirdLevel(e)}
            options={optionsLbl3}
            required
            value={lbl2}
          />
        )}
      </Card>
    </div>
  );
};

export default TaxonomyListSelect;
