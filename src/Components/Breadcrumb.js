import React, { PropTypes } from 'react';
import { Breadcrumb as bsBreadcrumb } from 'react-bootstrap/lib/';

const Breadcrumb = ({ paths }) => {
  paths.map(path =>
    <bsBreadcrumb.Item href={path.href}>{path.name}</bsBreadcrumb.Item>
  );
};
Breadcrumb.PropTypes = {
  paths: PropTypes.arrayOf(PropTypes.object),
};
export default Breadcrumb;
