import Ract from 'react';

const Row = ({ data, headers }) => {
    const val = headers.map((header) => {
        const type = header.type.toUpperCase().trim();
        switch(type){
            case "NUMBER":
            case "TEXT": {
                return ( <span>{ data.value }</span> );
            }
            case "CUSTOM":{
                return data.render(data);
            }
        }
    });

    return(
        { val }
    );
};

const Rows = ({datas,headers}) =>{
    const val = datas.map((data,index) => {
       return(
           <Row data={ data } headers={ headers }></Row>
       );
    });

    return( {val} );
};

Rows.propTypes = {
    datas: React.propTypes.array.isRequired,
    headers: React.propTypes.array.isRequired
};

export default Rows;
