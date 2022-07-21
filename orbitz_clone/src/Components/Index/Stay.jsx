import React from "react";
import { Button, Checkbox, Input, Stack } from "@chakra-ui/react";

export const Stay = () => {
  return (
    <div>
      <label style={{ display: "flex",justifyContent:"space-between" }}>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p></p>

     
      </label>

      <label style={{ display: "flex" }}>
        <Input placeholder="medium size" size="md" />

        <Input className="checkin" type="date" placeholder="check in" size="md" />
        <Input type="date" placeholder="check in" size="md" />
        <Input type="text" placeholder="Adult 1 person" size="md" />
      </label>
      <Stack spacing={[1, 5]} direction={["column", "row"]}>
        <Checkbox size="lg" colorScheme="teal" defaultChecked>
          Add a flight
        </Checkbox>
        <Checkbox size="lg" colorScheme="teal" defaultChecked>
          Add a car
        </Checkbox>
      </Stack>
      <Button colorScheme='red' variant='solid'>
    Submit
  </Button>
    </div>
  );
};
