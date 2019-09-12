import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TaskAdd from '../TaskAdd';
export default function AlertDialog(props) {
    const { onClose, selectedValue, open } = props;

    function handleClose() {
      onClose(false);
    }
  
    function handleListItemClick(value) {
      onClose(value);
    }
 


  return (
    <div>
      
    </div>
  );
}
