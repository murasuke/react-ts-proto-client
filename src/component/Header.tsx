import React , {useReducer, useContext, useEffect} from 'react';
import { SiteContext, SiteContextDataType } from '../utils/SiteContext';

const Header = (props: SiteContextDataType) => {
    // const { state } = useContext(SiteContext);
    return (
      <> 
        <h2>{props.pageName}:{props.userId}:{props.userName}</h2>
      </>
    );
}

export default Header; 