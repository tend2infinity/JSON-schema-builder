import { Alert, Snackbar } from "@mui/material";
import React from "react";

function Snack(props) {
  const { openSnack, handleCloseSnack, parseSuccess } = props;
//   console.log(parseSuccess);
  return (
    <Snackbar
      open={openSnack}
      autoHideDuration={6000}
      onClose={handleCloseSnack}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleCloseSnack}
        severity= {parseSuccess? "success":"error" }
        sx={{ width: "100%" }}
      >
        {parseSuccess? "Valid JSON parsed successfully!":"Invalid JSON" }
      </Alert>
    </Snackbar>
  );
}

export default Snack;
