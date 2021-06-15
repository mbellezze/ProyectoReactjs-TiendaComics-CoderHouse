import React from 'react';

const data = [
    { txt: 'Descripcion 1' },
    { txt: 'Descripcion 2' },
    { txt: 'Descripcion 3' },
]

const Descripcion = ({ titulo, i }) => {
    return <React.Fragment key={i}>
        <h6>{titulo}</h6>
    </React.Fragment>      
}

export const Item = props => {
    const listaDescripciones = data.map((element, i) => <Descripcion titulo={element.txt} i={i} />);
    return  <div>
        {listaDescripciones}    
        </div>
}