import { Fade, Switch, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";

function SwitchComp(props) {
  const { item,loader } = props;
  const init = item.validate.defaultValue;
  const [checked, setChecked] = useState(init);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      {item.uiType === "Switch" && (
        <div
          style={{
            display:
              (item.uiType === "Switch" && !item.disable) ? "flex" : "none",
            alignItems: "center",
            justifyContent:"center",
            padding: "1rem",
            border: "1px solid #D3D3D3",
            borderRadius: "4px",
            margin: "1rem 0rem",
          }}
        >
          <div style={{ display: "flex", flexGrow: 1, marginRight: "2rem" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "700", marginRight: "0.5rem", marginTop:"0.5rem" }}
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
            <Switch
              id={item.jsonKey}
              checked={checked}
              onChange={handleChange}
              helperText={item.placeholder}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SwitchComp;
