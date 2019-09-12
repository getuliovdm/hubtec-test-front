import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useStoreActions } from "easy-peasy";
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
import TaskEdit from "../TaskEdit";

const styles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  hoverEdit: {
    "&:hover": {
      background: "#FF5756"
    }
  },
  hoverDelete: {
    "&:hover": {
      background: "#113260"
    }
  },
  title: {
    color: "#113260"
  },
  finalDate: {},
  card: {
    backgroundColor: "#EDF1F6"
  },
  deleteIcon: {
    color: "#FF5756"
  },
  editIcon: {
    color: "#113260"
  },
  description: {
    color: "#113260"
  }
});
export default function TaskCard({ task }) {
  const deleteTask = useStoreActions(action => action.taskStore.deleteTask);
  const { title, description, finalDate } = task;
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const classes = styles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title={title}
        subheader={finalDate}
        action={
          <div>
            <IconButton
              className={classes.hoverEdit}
              aria-label="add to favorites"
              onClick={handleClickOpen}
            >
              <EditIcon className={classes.editIcon} />
            </IconButton>
            <IconButton
              className={classes.hoverDelete}
              aria-label="share"
              onClick={() => deleteTask(task)}
            >
              <DeleteIcon className={classes.deleteIcon} />
            </IconButton>
          </div>
        }
      />
      <CardContent>
        <Typography
          className={classes.description}
          variant="body2"
          component="p"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TaskEdit task={task} handleClose={handleClose}></TaskEdit>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
