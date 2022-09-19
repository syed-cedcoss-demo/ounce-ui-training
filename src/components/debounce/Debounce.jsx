import { Button } from "@cedcommerce/ounce-ui";
import { getCall } from "../../APIs/Apis";

const Debounce = () => {
  const getData = async () => {
    const data = await getCall("https://jsonplaceholder.typicode.com/photos");
    console.log("data", data);
  };

  //*********Debouncing login **************** */
  let isReady = true;
  const btnClick = () => {
    const waiter = () => (isReady = true);

    if (isReady) {
      console.log("Call", isReady);
      isReady = false;
      clearTimeout(waiter);
      setTimeout(() => waiter(), 3000);
      getData();
    }
  };

  return (
    <div className="select-container">
      <Button content="Click for load" type="Primary" onClick={btnClick} />
    </div>
  );
};

export default Debounce;
