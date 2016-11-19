import React, { PropTypes } from 'react';
import { Breadcrumb as bsBreadcrumb } from 'react-bootstrap/lib/';

const Breadcrumb = ({ paths }) => {
  const breadcrumbs = paths.map(path =>
    <bsBreadcrumb.Item href={path.href}>{path.name}</bsBreadcrumb.Item>
  );

  return (
    <bsBreadcrumb>{breadcrumbs}</bsBreadcrumb>
  );
};
Breadcrumb.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.object),
};
export default Breadcrumb;
