import React from "react";
import styles from "./First.module.css";
import { Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Stay } from "./Stay";
import { Flight } from "./Flight";
import { Car } from "./Car";
import { Pacakges } from "./Pacakges";
import { Things_to_do } from "./Things_to_do";
import { Curises } from "./Curises";

export const First = () => {
  return (
    <div className={styles.home}>
      <br /><br /><br /><br />
      <Box className={styles.containerSearchBox}>
        <Tabs>
          <TabList style={{ justifyContent: "center" }}>
            <Tab>Stay</Tab>
            <Tab>Flight</Tab>
            <Tab>Cars</Tab>
            <Tab>Pacakges</Tab>
            <Tab>things to do</Tab>
            <Tab>Curises</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Stay />
            </TabPanel>
            <TabPanel>
              <Flight />
            </TabPanel>
            <TabPanel>
              <Car />
            </TabPanel>
            <TabPanel>
              <Pacakges />
            </TabPanel>
            <TabPanel>
              <Things_to_do />
            </TabPanel>
            <TabPanel>
              <Curises />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};
