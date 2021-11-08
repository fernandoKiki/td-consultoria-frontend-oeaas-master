import React from 'react';

function AudiosList(props) {
    return (
        <>
            {
                props.videos.map((item, idx) => <p>{idx}</p>)
            }
        </>
    );
}

export default AudiosList;