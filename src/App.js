/* eslint-disable react/prop-types */
import React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
import { AppBar, Tabs, Tab } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { themeOptions } from "./customTheme";
import ReactExample from "./Todo/ReactExample";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

export const App = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, index) => {
    setTabIndex(index);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={createTheme(themeOptions)}>
        {/* <CssBaseline /> */}
        <AppBar position="static">
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            variant="scrollable"
            textColor="inherit"
            indicatorColor="secondary"
            scrollButtons
            aria-label="preview-window-tabs"
            allowScrollButtonsMobile
          >
            <Tab label="ReactJS" />
            <Tab label="Instructions" />
            <Tab label="Sign Up" />
            <Tab label="Dashboard" />
            <Tab label="Blog" />
            <Tab label="Pricing" />
            <Tab label="Checkout" />
          </Tabs>
        </AppBar>
        <div>
          <TabPanel value={tabIndex} index={0}>
            <ReactExample />
          </TabPanel>
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
};
