import React, { PropTypes } from 'react';
import { Breadcrumb } from 'react-bootstrap/lib/';

const bsBreadcrumb = ({ paths }) => {
  let bgColor = '#2ecc71';

  const breadcrumbs = paths.map((path, i) => {
    if (path.name === 'Bank Example') {
      bgColor = '#222';
    } else if (path.name === 'My Account') {
      bgColor = '#222';
    }

    return (
      <Breadcrumb.Item
        key={`bc${i}`}
        href={path.href}
        active={path.active}
      >{path.name}
      </Breadcrumb.Item>);
  });

  const style = {
    borderRadius: '0px',
    backgroundColor: bgColor,
    padding: '8px 130px 8px 130px',
    marginBottom: '0px',
  };

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
