import { Button, Card, List, TextStyles } from "@cedcommerce/ounce-ui";
import { useState } from "react";
import { useEffect } from "react";
import allData from "./data";

const TaxonomyListSelect = () => {
  const [data, setData] = useState();
  const [fLavel, setFLevel] = useState();
  const [sLavel, setSLevel] = useState();
  const [lbl2, setLbl2] = useState();
  const [tLavel, setTLevel] = useState();
  const [lbl3, setLbl3] = useState();

  useEffect(() => {
    const level = [];
    const formatData = allData.trim().split("\n");
    setData(formatData);
    for (const fEl of formatData) {
      if (!fEl.includes(">")) {
        level.push(fEl);
      }
    }
    setFLevel(level);
  }, []);

  //handling data for second level list
  const handleSecond = (lbl) => {
    const sCheck = [];
    for (const sEl of data) {
      if (sEl.includes(lbl) && sEl.includes(">")) {
        const arr = sEl.trim().split(">");
        const found = sCheck.some((el) => el[1] === arr[1]);
        if (!found) {
          sCheck.push(arr);
        }
      }
    }
    setLbl2(lbl);
    setSLevel(sCheck);
  };

  //listing third level
  const handleThirdLevel = (lbl) => {
    const sCheck = [];
    for (const sEl of data) {
      if (sEl.includes(lbl) && sEl.includes(">")) {
        const arr = sEl.trim().split(">");
        const found = sCheck.some((el) => el[2] === arr[2]);
        console.log("found", found);
        if (!found) {
          sCheck.push(arr);
        }
      }
    }
    console.log("sCheck", sCheck);
    setLbl3(lbl);
    setTLevel(sCheck);
  };
  console.log("tLavel", tLavel);
  // useEffect(() => {
  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch(
  //     "https://www.google.com/basepages/producttype/taxonomy.en-US.txt",
  //     requestOptions
  //   )
  //     .then((response) => response.text())
  //     .then((result) => {
  //       // console.log("result", result);
  //       const line = result.split("\n");
  //       console.log("line", line);
  //     })
  //     .catch((error) => console.log("error", error));
  // }, []);
  return (
    <div>
      <h1>
        <Card cardType="Bordered">
          <List type="disc">
            {fLavel?.length > 0 &&
              fLavel.map((el, i) => {
                return (
                  <TextStyles textcolor="light" key={i}>
                    <Button onClick={() => handleSecond(el)}>{el}</Button>
                    {
                      <List type="disc">
                        {sLavel?.length > 0 &&
                          lbl2 === el &&
                          sLavel.map((sEl, j) => {
                            return (
                              <TextStyles textcolor="light" key={j}>
                                {sEl?.length > 2 ? (
                                  <Button
                                    onClick={() => handleThirdLevel(sEl[1])}
                                  >
                                    {sEl[1]}
                                  </Button>
                                ) : (
                                  sEl[1]
                                )}
                                {lbl3 === sEl[1] && (
                                  <List type="disc">
                                    {tLavel?.length &&
                                      tLavel.map((tEl, k) => {
                                        return (
                                          <TextStyles key={k}>
                                            {tEl[2]}
                                          </TextStyles>
                                        );
                                      })}
                                  </List>
                                )}
                              </TextStyles>
                            );
                          })}
                      </List>
                    }
                  </TextStyles>
                );
              })}
          </List>
        </Card>
      </h1>
    </div>
  );
};

export default TaxonomyListSelect;
