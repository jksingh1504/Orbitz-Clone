import { Box, Tabs, Tab } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./Home.module.css";
import styled from "styled-components";

export const Firstsection = () => {
  const [valueTab, setValueTab] = useState(0);
  const classes = {
    checkboxes: {
      display: "flex",
      alignItems: "center",
      margin: "17px 3px",
    },
    btn: {
      width: "230px",
      height: "69px",
      backgroundColor: "rgb(200,50,89)",
    },
    eachTab: {
      height: "90px",
      textTransform: "none",
      width: "16.5%",
    },
    tabs: {
      width: "100%",
      margin: "0px",
      paddingBottom: "8px",
      height: "80px",
    },
    containerSearchBox: {
      position: "absolute",
      top: 50,
      left: 140,
      width: "80%",
      margin: "auto",
      height: "330px",
      borderRadius: "1px",
      padding: "0px 8px",
      backgroundColor: "white",
      boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    },
    tb: {
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly !important",
    },
    lite: {
      fill: "#616161",
    },
  }
  const handleTabChange = (event, newValue) => {
    setValueTab(newValue);
  };

  return (
    <MainCont>
      <div className={styles.home}>
        <Box className={classes.containerSearchBox}>
          <Box className={classes.tabs}>
            <Tabs
              value={valueTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              className={classes.tb}
              textColor="primary"
        
            >
              <Tab label="Stays" />
              <Tab label="Flights" />
              <Tab label="Cars" />
              <Tab label="Packages" />
              <Tab label="Things to do" />
              <Tab label="Cruises" />
            </Tabs>
          </Box>
          {/* <Divider className={classes.div} /> */}
          {/* <SearchCompact /> */}
        </Box>
      </div>
      {/* <div className={styles.bot}><HelpBot /></div> */}

     
    </MainCont>
  );
};

//-------------------styled components--------------------

const MainCont = styled.div`
  background-color: #f5f5f5;
`;
const StaticDivs = styled.div`
  margin: auto;
  max-width: 1180px;
  margin: auto;
`;
