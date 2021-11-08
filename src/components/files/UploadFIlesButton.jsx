import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { IoMdCloudUpload } from 'react-icons/io';
import UploadFiles from './UploadFiles';

function UploadFilesButton(props) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Button variant="outline-success" className="mr-2" onClick={() => setShowModal(true)}><IoMdCloudUpload /> Subir archivos</Button>
            <Modal show={showModal} onHide={setShowModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Subir archivos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UploadFiles
                        getObservacion={props.getObservacion}
                        idObservacion={props.idObservacion}
                        toggleModal={setShowModal} 
                        />
                </Modal.Body>
            </Modal>
        </>
    );

}

export default UploadFilesButton;