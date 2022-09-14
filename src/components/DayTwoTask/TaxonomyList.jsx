import React from "react";

const TaxonomyList = () => {
  const str = `Animals & Pet Supplies
Animals & Pet Supplies > Live Animals
Animals & Pet Supplies > Pet Supplies
Animals & Pet Supplies > Pet Supplies > Bird Supplies
Animals & Pet Supplies > Pet Supplies > Bird Supplies > Bird Cage Accessories
Animals & Pet Supplies > Pet Supplies > Bird Supplies > Bird Cage Accessories > Bird Cage Bird Baths
Animals & Pet Supplies > Pet Supplies > Bird Supplies > Bird Cage Accessories > Bird Cage Food & Water Dishes
Animals & Pet Supplies > Pet Supplies > Dog Supplies
Animals & Pet Supplies > Pet Supplies > Dog Supplies > Dog Apparel`;

  const dd = str.split(">");
  console.log(dd);
  return <div>TaxonomyList</div>;
};

export default TaxonomyList;
