import Ract from 'react';

const Row = ({ data, header }) => {
    const val = () => {
        const type = header.type.toUpperCase().trim();
        switch(type){
            case "NUMBER":
                case "TEXT": {
                    return ( <span>{ d.value }</span> );
                }
                case "CUSTOM":{
                    return d.render(d);
                }
        }
    };

    return(
        { val }
    );
};

const Rows = ({datas,headers}) =>{
    const val = datas.map((data,index) => {
       return(
           <Row data={ data } header={ headers[index] }></Row>
       );
    });

    return( {val} );
};

Rows.propTypes = {
    datas: React.propTypes.array.isRequired,
    headers: React.propTypes.array.isRequired
};

export default Rows;
