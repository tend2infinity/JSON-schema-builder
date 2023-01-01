import { Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import Snack from "../components/Snack";


function Editor(props) {
  const { json, handleJsonChange, handleJsonSubmit, handleJsonClear,openSnack,handleCloseSnack,parseSuccess } = props;
  const snackProps = {
    openSnack,
    handleCloseSnack,
    parseSuccess
  };
//   console.log(json);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", flexBasis:0.5 }}
    >
      <Snack {...snackProps} />
      
      <Paper
        sx={{
          //   backgroundColor: "#F6F6F6",
          padding: "2rem",
          margin: "2rem 4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        elevation={2}
      >

        {" "}
        <TextField
          placeholder="Paste your UI schema here"
          sx={{ width:"25rem" ,maxWidth: "30rem",height:"auto", backgroundColor: "#F6F6F6" }}
          multiline
          value={json}
          onChange={handleJsonChange}
          rows={20}
          //   maxRows={20}
          variant="outlined"
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: "#153462",
              marginTop: "1rem",
            }}
            onClick={handleJsonSubmit}
          >
            <Typography style={{ color: "white", fontWeight: "900" }}>
              Render Form
            </Typography>
          </Button>
          <Button
            variant="outlined"
            style={{
              border: "2px solid #153462",
              marginTop: "1rem",
              marginLeft: "1rem",
            }}
            onClick={handleJsonClear}
          >
            <Typography style={{ color: "#153462", fontWeight: "900" }}>
              Clear text
            </Typography>
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Editor;
