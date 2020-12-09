import React from 'react';

const Image = props => {

  const { source, alternate, classes } = props;

  return(
    <img src={source} alt={alternate} className={classes} />
  );
}

export default Image;
