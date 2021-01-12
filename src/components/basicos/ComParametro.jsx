import React from 'react';

export default (props) => {
    //props é somente leitura!!
    //Isso não pode: props.titulo = "Outro titulo"
    return(
        <>
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
        </>
    );
};