import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ModalWindow = ({ open, onClose }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // State variables for the selected values of the dropdowns
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");

  const handleDropdown1Change = (event) => {
    setSelectedValue1(event.target.value);
  };

  const handleDropdown2Change = (event) => {
    setSelectedValue2(event.target.value);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={isSmallScreen ? "xs" : "md"}
      fullWidth
    >
      <DialogTitle>Get a Quote</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Client Type</InputLabel>
              <Select
                value={selectedValue1} // Provide the selected value
                onChange={handleDropdown1Change}
              >
                <MenuItem value="Business Owner">Business Owner</MenuItem>
                <MenuItem value="CA/CS/CWA">CA/CS/CWA</MenuItem>
                <MenuItem value="Professional Firm of Accountants/Tax Practitioner">
                  Professional Firm of Accountants/Tax Practitioner
                </MenuItem>
                <MenuItem value="Professional Affiliates (Student of CA/CS/CWA)">
                  Professional Affiliates (Student of CA/CS/CWA)
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Transaction Type</InputLabel>
              <Select
                value={selectedValue2} // Provide the selected value
                onChange={handleDropdown2Change}
              >
                <MenuItem value="Upto 500">Upto 500</MenuItem>
                <MenuItem value="1000">1000</MenuItem>
                <MenuItem value="5000">5000</MenuItem>
                <MenuItem value="More than 5000">More than 5000</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalWindow;
