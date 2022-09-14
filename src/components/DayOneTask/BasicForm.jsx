import { useState } from "react";
import {
  Button,
  Card,
  FlexChild,
  FlexLayout,
  MainLayout,
  TextField,
} from "@cedcommerce/ounce-ui";

const BasicForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleUsername = (e) => {
    if (/[^0-9a-zA-Z]/.test(e)) {
      return false;
    } else {
      setUsername(e);
    }
  };

  const handlePassword = (e) => {
    console.log("e", e);
    if (/[^0-9]/.test(e)) {
      return;
    } else setPassword(e);
  };

  const handleSubmit = () => {
    if (username && password) {
      console.log("username", username);
      console.log("password", password);
    }
  };

  return (
    <div className="form-container">
      <MainLayout>
        <h1>Basic Form</h1>
        <Card>
          <Card cardType="bordered">
            <FlexLayout
              childWidth="fullWidth"
              spacing="extraLoose"
              direction="vertical"
            >
              <FlexChild>
                <TextField
                  name="Username:"
                  type="text"
                  placeHolder="enter your username"
                  value={username}
                  onChange={(e) => handleUsername(e)}
                />
              </FlexChild>
            </FlexLayout>
            <FlexLayout
              childWidth="fullWidth"
              spacing="extraLoose"
              direction="vertical"
            >
              <FlexChild>
                <TextField
                  name="Password"
                  type="text"
                  placeHolder="enter your password"
                  value={password}
                  onChange={(e) => handlePassword(e)}
                />
              </FlexChild>
            </FlexLayout>
            <div className="submit-button">
              <Button onClick={handleSubmit}>LOGIN</Button>
            </div>
          </Card>
        </Card>
      </MainLayout>
    </div>
  );
};

export default BasicForm;
