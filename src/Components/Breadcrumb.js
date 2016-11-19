import React, { PropTypes } from 'react';
import { Breadcrumb } from 'react-bootstrap/lib/';

const bsBreadcrumb = ({ paths }) => {
  const style = {
    borderRadius: '0px',
    backgroundColor: '#2ecc71',
    padding: '8px 130px 8px 130px',
  };
  const breadcrumbs = paths.map(path =>
    <Breadcrumb.Item href={path.href} active={path.active}>{path.name}</Breadcrumb.Item>
  );

  return (
    <div>
      <Breadcrumb style={style}>
        {breadcrumbs}
      </Breadcrumb>
    </div>
  );
};
bsBreadcrumb.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.object),
};
export default bsBreadcrumb;
