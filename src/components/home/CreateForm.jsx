import {
  Button,
  Card,
  Datepicker,
  FormChild,
  FormElement,
  TextField,
} from "@cedcommerce/ounce-ui";
import React from "react";

const CreateForm = ({
  name,
  setName,
  setAge,
  gender,
  setGender,
  handleCreate,
}) => {
  return (
    <div className="main-container">
      <Card>
        <FormElement>
          <FormChild>
            <TextField
              type="text"
              name="Name"
              placeHolder="Enter your name"
              onChange={(e) => setName(e)}
              value={name}
            />
          </FormChild>
        </FormElement>
        <FormElement>
          <FormChild>
            <Datepicker
              name="Age"
              onChange={(e) => setAge(e?._d)}
              picker="date"
              placement="bottomLeft"
              showToday
              size="middle"
            />
          </FormChild>
        </FormElement>
        <FormElement>
          <FormChild>
            <TextField
              type="text"
              name="Gender"
              placeHolder="Enter your age"
              onChange={(e) => setGender(e)}
              value={gender}
            />
          </FormChild>
        </FormElement>
        <FormElement>
          <FormChild>
            <div className="create-btn">
              <Button onClick={handleCreate}>CREATE</Button>
            </div>
          </FormChild>
        </FormElement>
      </Card>
    </div>
  );
};

export default CreateForm;
