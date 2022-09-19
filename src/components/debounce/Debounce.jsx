import { Button } from "@cedcommerce/ounce-ui";
import { useState } from "react";

const Debounce = () => {
  const [status, setStatus] = useState(false);
  let isReady = true;
  const btnClick = () => {
    const waiter = () => {
      isReady = true;
      setStatus(!isReady);
    };
    if (isReady) {
      console.log("Call", isReady);
      isReady = false;
      setStatus(!isReady);
      clearTimeout(waiter);
      setTimeout(() => waiter(), 3000);
    }
  };
  return (
    <div className="select-container">
      <Button
        content="Click for load"
        type="Primary"
        onClick={btnClick}
        loading={status}
      />
    </div>
  );
};

export default Debounce;
