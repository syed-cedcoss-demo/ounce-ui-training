import { Card, Select } from "@cedcommerce/ounce-ui";
import { useState } from "react";
import { useEffect } from "react";
import allData from "./data";

const TaxonomyListSelect = () => {
  const [data, setData] = useState();
  const [fLevel, setFLevel] = useState();
  const [sLevel, setSLevel] = useState();
  const [tLevel, setTLevel] = useState();
  const [fourLevel, setFourLevel] = useState();
  const [fiveLevel, setFiveLevel] = useState();
  const [lbl1, setLbl1] = useState();
  const [lbl2, setLbl2] = useState();
  const [lbl3, setLbl3] = useState();
  const [lbl4, setLbl4] = useState();
  const [lbl5, setLbl5] = useState();

  //handling data for first level list
  useEffect(() => {
    const level = [];
    const formatData = allData.trim().split("\n");
    setData(formatData);
    for (const elm of formatData) {
      if (!elm.includes(">")) {
        level.push({
          label: elm,
          value: elm,
        });
      }
    }
    setFLevel(level);
  }, []);

  //handling data for second level list
  const handleSecondLevel = (lbl) => {
    const check = [];
    for (const elem of data) {
      if (elem.includes(lbl) && elem.includes(">")) {
        const arr = elem.trim().split(">");
        const found = check.some((el) => el?.label?.trim() === arr[1]?.trim());
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
    for (const elem of data) {
      if (elem.includes(lbl) && elem.includes(">")) {
        const arr = elem.trim().split(">");
        const found = check.some((el) => el?.label?.trim() === arr[2]?.trim());
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

  //handling data for four level list
  const handleFourLevel = (lbl) => {
    const check = [];
    for (const elem of data) {
      if (elem.includes(lbl) && elem.includes(">")) {
        const arr = elem.trim().split(">");
        const found = check.some((el) => el?.label?.trim() === arr[3]?.trim());
        if (!found) {
          check.push({
            label: arr[3],
            value: arr[3],
          });
        }
      }
    }
    setLbl3(lbl);
    setFourLevel(check);
  };

  //handling data for Five level list
  const handleFiveLevel = (lbl) => {
    const check = [];
    for (const elem of data) {
      if (elem.includes(lbl) && elem.includes(">")) {
        const arr = elem.trim().split(">");
        const found = check.some((el) => el?.label?.trim() === arr[4]?.trim());
        if (!found) {
          check.push({
            label: arr[4],
            value: arr[4],
          });
        }
      }
    }
    setLbl4(lbl);
    setFiveLevel(check);
  };

  //select options
  const optionsLbl1 = [
    {
      group: fLevel,
      label: "Select your top level category",
      value: "1",
    },
  ];
  const optionsLbl2 = [
    {
      group: sLevel,
      label: "Select your mid level category",
      value: "2",
    },
  ];
  const optionsLbl3 = [
    {
      group: tLevel,
      label: "Select your low level category",
      value: "3",
    },
  ];
  const optionsLbl4 = [
    {
      group: fourLevel,
      label: "Select your low level category",
      value: "4",
    },
  ];
  const optionsLbl5 = [
    {
      group: fiveLevel,
      label: "Select your low level category",
      value: "5",
    },
  ];

  console.log("1", lbl1);
  console.log("2", lbl2);
  console.log("3", lbl3);
  console.log("4", lbl4);
  console.log("5", lbl5);
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
        {sLevel?.length > 0 && (
          <Select
            dropDownheight={600}
            name="Select mid level"
            onChange={(e) => handleThirdLevel(e)}
            options={optionsLbl2}
            required
            value={lbl2}
          />
        )}
        {tLevel?.length > 1 && (
          <Select
            dropDownheight={600}
            name="Select low level"
            onChange={(e) => handleFourLevel(e)}
            options={optionsLbl3}
            required
            value={lbl3}
          />
        )}
        {fourLevel?.length > 1 && (
          <Select
            dropDownheight={600}
            name="Select low level"
            onChange={(e) => handleFiveLevel(e)}
            options={optionsLbl4}
            required
            value={lbl4}
          />
        )}
        {fiveLevel?.length > 1 && (
          <Select
            dropDownheight={600}
            name="Select low level"
            onChange={(e) => setLbl5(e)}
            options={optionsLbl5}
            required
            value={lbl5}
          />
        )}
      </Card>
    </div>
  );
};

export default TaxonomyListSelect;
