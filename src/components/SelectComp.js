import { Fade, MenuItem, TextField, Tooltip, Typography } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
function SelectComp(props) {
  const { item,setLoader } = props;

  return (
    <div>
      {item.uiType === "Select" && (
        <div
          style={{
            display: (item.uiType === "Select"&& !item.disable) ? "flex" : "none",
            alignItems: "center",
            padding: "1rem",
            border: "1px solid #D3D3D3",
            borderRadius: "4px",
            margin: "1rem 0rem",
          }}
        >
          <div style={{ display: "flex", flexGrow: 1, marginRight: "8rem" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "700", marginRight: "0.5rem" }}
              className={item.validate.required ? "required" : ""}
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
          <TextField
            id={item.jsonKey}
            select
            label={item.label}
            defaultValue={item.validate.defaultValue}
            helperText={item.placeholder}
            sx={{ width: "15rem",backgroundColor:"#F0F8FF" }}
          >
            {item.validate &&
              item.validate.options &&
              item.validate.options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
        </div>
      )}
    </div>
  );
}

export default SelectComp;
