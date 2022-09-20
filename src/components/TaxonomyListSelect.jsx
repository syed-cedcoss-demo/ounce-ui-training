import { Card, Select, Tag } from "@cedcommerce/ounce-ui";
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
  const [sixLevel, setSixLevel] = useState();
  const [lbl1, setLbl1] = useState();
  const [lbl2, setLbl2] = useState();
  const [lbl3, setLbl3] = useState();
  const [lbl4, setLbl4] = useState();
  const [lbl5, setLbl5] = useState();
  const [lbl6, setLbl6] = useState();

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
    // for state reset
    setTLevel("");
    setFourLevel("");
    setFiveLevel("");
    setSixLevel("");
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
    // for state reset
    setFourLevel("");
    setFiveLevel("");
    setSixLevel("");
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
    // for state reset
    setFiveLevel("");
    setSixLevel("");
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
    // for state reset
    setSixLevel("");
  };

  //handling data for six level list
  const handleSixLevel = (lbl) => {
    const check = [];
    for (const elem of data) {
      if (elem.includes(lbl) && elem.includes(">")) {
        const arr = elem.trim().split(">");
        const found = check.some((el) => el?.label?.trim() === arr[5]?.trim());
        if (!found) {
          check.push({
            label: arr[5],
            value: arr[5],
          });
        }
      }
    }
    setLbl5(lbl);
    setSixLevel(check);
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
  const optionsLbl6 = [
    {
      group: fiveLevel,
      label: "Select your low level category",
      value: "5",
    },
  ];
  const handleRemove = (id) => {
    console.log("id", id);
    if (id === 1) {
      setSLevel("");
      setTLevel("");
      setFourLevel("");
      setFiveLevel("");
      setSixLevel("");
      setLbl1("no");
      setLbl2("no");
      setLbl3("no");
      setLbl4("no");
      setLbl5("no");
      setLbl6("no");
    } else if (id === 2) {
      setTLevel("");
      setFourLevel("");
      setFiveLevel("");
      setSixLevel("");
      setLbl2("no");
      setLbl3("no");
      setLbl4("no");
      setLbl5("no");
      setLbl6("no");
    } else if (id === 3) {
      setFourLevel("");
      setFiveLevel("");
      setSixLevel("");
      setLbl3("no");
      setLbl4("no");
      setLbl5("no");
      setLbl6("no");
    } else if (id === 4) {
      setFiveLevel("");
      setSixLevel("");

      setLbl4("no");
      setLbl5("no");
      setLbl6("no");
    } else if (id === 5) {
      setSixLevel("");
      setLbl5("no");
      setLbl6("no");
    } else if (id === 3) {
      setLbl6("no");
    }
  };
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
        {lbl1 && lbl1 !== "no" && (
          <Tag destroy={() => handleRemove(1)}> {lbl1}</Tag>
        )}

        {sLevel?.length > 0 && (
          <Select
            dropDownheight={600}
            name="Select mid level"
            onChange={(e) => handleThirdLevel(e)}
            options={optionsLbl2}
            required
            value={lbl2}
            showBadges={true}
          />
        )}
        {lbl2 && lbl2 !== "no" && (
          <Tag destroy={() => handleRemove(2)}> {lbl1}</Tag>
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
        {lbl3 && lbl3 !== "no" && (
          <Tag destroy={() => handleRemove(3)}> {lbl3}</Tag>
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
        {lbl4 && lbl4 !== "no" && (
          <Tag destroy={() => handleRemove(4)}> {lbl4}</Tag>
        )}
        {fiveLevel?.length > 1 && (
          <Select
            dropDownheight={600}
            name="Select low level"
            onChange={(e) => handleSixLevel(e)}
            options={optionsLbl5}
            required
            value={lbl5}
          />
        )}
        {lbl5 && lbl5 !== "no" && (
          <Tag destroy={() => handleRemove(5)}> {lbl5}</Tag>
        )}
        {sixLevel?.length > 1 && (
          <Select
            dropDownheight={600}
            name="Select low level"
            onChange={(e) => setLbl6(e)}
            options={optionsLbl6}
            required
            value={lbl6}
          />
        )}
        {lbl6 && lbl6 !== "no" && (
          <Tag destroy={() => handleRemove(6)}> {lbl1}</Tag>
        )}
      </Card>
    </div>
  );
};

export default TaxonomyListSelect;
