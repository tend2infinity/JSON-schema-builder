import {
  Fade,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";

function InputComp(props) {
  const { item,setLoader } = props;
  return (
    <div>
      {item.uiType === "Input" && (
        <div
          style={{
            display: (item.uiType === "Input" && !item.disable) ? "flex" : "none",
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
            variant="outlined"
            helperText={item.placeholder}
            label={item.label}
            required={item.validate.required}
            disabled={item.disable}
            sx={{backgroundColor:"#F0F8FF"}}
          />
        </div>
      )}
    </div>
  );
}

export default InputComp;
