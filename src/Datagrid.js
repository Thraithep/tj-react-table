import React from 'react';

import Rows from './Row';
import Headers from './Headers';

const Datagrid = ({datas,headers}) => {
    return(
        <div>
            <Headers headers={ headers }></Headers>
            <Rows datas={ datas } headers={ headers }></Rows>
        </div>
    );
};

export default Datagrid;