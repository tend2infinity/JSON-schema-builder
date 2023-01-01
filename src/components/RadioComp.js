import { Fade, Tab, Tabs, Tooltip } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import SelectComp from "./SelectComp";
import InputComp from "./InputComp";
import SwitchComp from "./SwitchComp";

function RadioComp(props) {
  const { item, radioProps,loader } = props;
  const compareFn = (a, b) => {
    if (a.sort < b.sort) return -1;
    if (a.sort > b.sort) return 1;
    return 0;
  };
  const def = item.uiType == "Radio" ? item.validate.defaultValue : "";
  const [tabVal, setTabVal] = useState(def);
  const handleTabValChange = (event, newValue) => {
    setTabVal(newValue);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{ display: item.uiType === "Radio" ? "flex" : "none" }}
        key={item.jsonKey}
      >
        <Tabs
          label={item.label}
          id={item.jsonKey}
          value={tabVal}
          onChange={handleTabValChange}
          centered
          //   variant="fullWidth"
          //   style={{alignItems:"center", justifyContent:"center"}}
        >
          {item.validate &&
            item.validate.options &&
            item.validate.options.map((m) => {
              return <Tab label={m.label} value={m.value} />;
            })}
        </Tabs>
      </div>
      {radioProps.map((r) => {
        return r.conditions.map((c) => {
          if (c.op == "==" && c.value == tabVal && c.action == "enable") {
            r.subParameters.sort(compareFn)
            return r.subParameters.map((param) => {
              return (
                <div>
                  <SelectComp item={param} /> <InputComp item={param} />{" "}
                  <SwitchComp item={param} />
                </div>
              );
            });
          }
        });
      })}
    </div>
  );
}

export default RadioComp;
