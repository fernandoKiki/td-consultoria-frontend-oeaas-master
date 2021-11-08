import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { IoMdPlay } from 'react-icons/io';

function VideosList(props) {
    if(props.videos.length === 0)
        return <p>No hay videos para mostrar</p>;

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th> </th>
                    <th>Nombre</th>
                    <th>Formato</th>
                    <th>Tamaño (MB)</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.videos.map((item, idx) =>
                        <tr key={idx}>
                            <td>
                                <Button 
                                size="sm" 
                                variant="outline-primary"
                                onClick={() => props.setVideo(idx)}>
                                    {parseInt(props.selectedVideo) === item.id ? <IoMdPlay /> : ' '}
                                </Button>
                            </td>
                            <td>{item.nombre}</td>
                            <td>{item.formato.split('/')[1]}</td>
                            <td>{(item.bytes / 1000000)}</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    );
}

export default VideosList;