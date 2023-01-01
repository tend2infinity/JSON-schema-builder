import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import GroupComp from "../components/GroupComp";
import InputComp from "../components/InputComp";
import SelectComp from "../components/SelectComp";
import SwitchComp from "../components/SwitchComp";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/system";

function Form(props) {
  const { parsedJson } = props;
  const [loader, setLoader] = useState(false);
  const compareFn = (a, b) => {
    if (a.sort < b.sort) return -1;
    if (a.sort > b.sort) return 1;
    return 0;
  };
  useEffect(() => {
    setLoader(true);
    parsedJson.sort(compareFn);
    setLoader(false);
  }, [parsedJson]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Paper
        sx={{
          //   backgroundColor: "#F6F6F6",
          padding: "2rem",
          margin: "2rem 4rem",
        }}
        elevation={2}
      >
        {loader && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
        {parsedJson.map((item, index) => {
          return (
            <div>
              <InputComp id={item.jsonKey} item={item} setLoader={setLoader}/>
              <GroupComp id={item.jsonKey} item={item} setLoader={setLoader}/>
              <SelectComp id={item.jsonKey} item={item} setLoader={setLoader}/>
              <SwitchComp id={item.jsonKey} item={item} setLoader={setLoader}/>
            </div>
          );
        })}
      </Paper>
    </div>
  );
}

export default Form;
