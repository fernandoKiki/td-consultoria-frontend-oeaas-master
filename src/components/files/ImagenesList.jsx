import React from 'react';

function ImagenesList(props) {
    if(props.imagenes.length === 0)
        return <p>No hay imágenes...</p>

    return (
        <>
            {
                props.imagenes.map((item, idx) => <img className="img img-fluid" key={idx} src={`http://localhost:3006/imagenes/file/${item.id}`} />)
            }
        </>
    );
}

export default ImagenesList;