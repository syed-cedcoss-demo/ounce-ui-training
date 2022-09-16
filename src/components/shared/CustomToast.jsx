import { ToastWrapper, Toast } from "@cedcommerce/ounce-ui";

const CustomToast = ({ type }) => {
  return (
    <div>
      <ToastWrapper>
        <Toast
          message="Welcome"
          onDismiss={function noRefCheck() {}}
          timeout={3000}
          type={type}
        />
      </ToastWrapper>
    </div>
  );
};

export default CustomToast;
