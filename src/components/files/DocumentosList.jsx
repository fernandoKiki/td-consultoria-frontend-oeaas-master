import React from 'react';

function DocumentosList(props) {
    return (
        <>
            {
                props.videos.map((item, idx) => <p>{idx}</p>)
            }
        </>
    );
}

export default DocumentosList;