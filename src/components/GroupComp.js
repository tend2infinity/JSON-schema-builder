import { Fade, Tooltip, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import React, { useEffect, useState } from "react";
import RadioComp from "./RadioComp";
import SelectComp from "./SelectComp";
import SwitchComp from "./SwitchComp";
import InputComp from "./InputComp";

function GroupComp(props) {
  const { item,setLoader } = props;
  const [radioProps, setRadioProps] = useState([]);
  const compareFn = (a, b) => {
    if (a.sort < b.sort) return -1;
    if (a.sort > b.sort) return 1;
    return 0;
  };
  useEffect(() => {
    let arr = [];
    item.subParameters && item.subParameters.sort(compareFn)
    item.subParameters &&
      item.subParameters.map((j) => {
        if (j.uiType === "Ignore") {
          arr.push(j);
        }
      });
      arr.sort(compareFn);
    setRadioProps(arr);
  }, [item]);

  return (
    <div
      style={{
        display: item.uiType === "Group" ? "flex" : "none",
        // alignItems: "center",
        flexDirection: "column",
        padding: "1rem",
        border: "1px solid #D3D3D3",
        borderRadius: "4px",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid rgb(211, 211, 211)",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "600",
            marginRight: "0.5rem",
          }}
          className={item.validate.required ? "required" : ""}
          id={item.jsonKey}
        >
          {item.label}
        </Typography>
        {item.description.length > 0 && (
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title={item.description}
          >
            <InfoIcon sx={{ color: "#153462", fontSize: "1.1rem" }} />
          </Tooltip>
        )}
      </div>
      {item.subParameters &&
        item.subParameters.map((subItem) => {
          return (
            <div>
              
              {subItem.uiType == "Radio" &&
              <RadioComp
                id={subItem.jsonKey}
                item={subItem}
                radioProps={radioProps}
              />}
               {subItem.uiType=="Select" && <SelectComp id={subItem.jsonKey} item={subItem}/>}
               {subItem.uiType=="Switch" && <SwitchComp id={subItem.jsonKey} item={subItem}/>}
               {subItem.uiType=="Input" && <InputComp id={subItem.jsonKey} item={subItem}/>}
            </div>
          );
        })}
    </div>
  );
}

export default GroupComp;
