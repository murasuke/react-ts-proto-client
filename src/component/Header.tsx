import React, { VFC } from 'react';
import { SiteContextDataType } from '../utils/SiteContext';

const Header: VFC<SiteContextDataType> = (props) => {
  const { pageName, userId, userName } = props;

  return (
    <>
      <h2>
        {pageName}:{userId}:{userName}
      </h2>
    </>
  );
};

export default Header;
