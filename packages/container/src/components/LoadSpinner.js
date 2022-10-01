import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    absoluteCenter: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  });
});

const LoadSpinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.absoluteCenter}>
      <CircularProgress />
    </div>
  );
};

export default LoadSpinner;
