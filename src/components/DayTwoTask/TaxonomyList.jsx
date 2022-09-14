import { useEffect } from "react";

const TaxonomyList = () => {
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.google.com/basepages/producttype/taxonomy.en-US.txt",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        // console.log("result", result);
        const line = result.split("\n");
        console.log("line", line);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return <div>TaxonomyList</div>;
};

export default TaxonomyList;
