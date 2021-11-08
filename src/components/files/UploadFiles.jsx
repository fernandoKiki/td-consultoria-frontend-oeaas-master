import React from 'react';
import { Form, Button, ProgressBar } from 'react-bootstrap';
import axios from 'axios';

class UploadFiles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0
        }

        this.imagenesInput = React.createRef();
        this.videosInput = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const body = new FormData()
        for(let i = 0;i < this.imagenesInput.current.files.length; i++) {
            body.append('imagenes', this.imagenesInput.current.files[i]);
        }
        for(let i = 0;i < this.videosInput.current.files.length; i++) {
            body.append('videos', this.videosInput.current.files[i]);
        }

        const requestConfig = {
            onUploadProgress: (progressEvent) => {
                this.setState({
                    progress: Math.floor((progressEvent.loaded * 100) / progressEvent.total)
                });
            }
        }
        
        axios.post(`http://localhost:3003/observaciones/subirArchivos?id=${this.props.idObservacion}`, body, requestConfig)
            .then(res => res.data)
            .then(data => {
                this.props.getObservacion();
                this.props.toggleModal(false);
            });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.File
                        id="audio-files"
                        label="Archivos de imagen"
                        ref={this.imagenesInput} />
                </Form.Group>
                <Form.Group>
                    <Form.File
                        id="video-files"
                        label="Archivos de video"
                        ref={this.videosInput} />
                </Form.Group>
                <div className="mt-2 mb-2">
                    <ProgressBar now={this.state.progress} />
                </div>
                <Form.Group>
                    <Button variant="success" type="submit">Aceptar</Button> <Button variant="danger" onClick={() => this.props.toggleModal(false)} >Cancelar</Button>
                </Form.Group>
            </Form>
        );
    }
}

export default UploadFiles;