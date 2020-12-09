import React from 'react';

import '../../style/gallery.css';

const Row = props => {

  const content = props.content;

  return(
    <div className="row">
      {content}
    </div>
  );
}

export default Row;
