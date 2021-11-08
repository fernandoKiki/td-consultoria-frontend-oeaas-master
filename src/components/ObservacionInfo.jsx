import React from 'react';
import { Button, Tabs, Tab } from 'react-bootstrap';
import { IoMdCreate, IoMdReturnLeft } from 'react-icons/io';
import Nombre from './fields/Nombre';
import Objetivos from './fields/Objetivos';
import TratamientoTemporalInfo from './fields/TratamientoTemporalInfo';
import UploadFilesButton from './files/UploadFIlesButton';
import * as ObservacionApi from '../api/ObservacionApi';
import ImagenesList from './files/ImagenesList';
import VideosList from './files/VideosList';

class ObservacionInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: 'imagenes',
            videoSelected: '',
            loading: true,
            id: '',
            nombre: '',
            objetivos: [],
            observadores: [],
            tratamientoTemporal: {},
            imagenes: [],
            videos: []
        }
    }

    componentDidMount() {
        this.getObservacion();
    }

    getObservacion = () => {
        ObservacionApi.getObservacion(this.props.match.params.id).then(data => {
            this.setState({
                loading: false,
                id: data.observacion.id,
                nombre: data.observacion.nombre,
                objetivos: data.observacion.objetivos,
                tratamientoTemporal: data.observacion.tratamientoTemporal,
                imagenes: data.imagenes,
                videos: data.videos
            });
        });
    }

    handleKey = (key) => {
        this.setState({
            key: key
        });
    }

    setVideo = (idx) => {
        console.log(idx);
        this.setState({
            videoSelected: this.state.videos[idx].id
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>Cargando...</p>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-12">
                        <Button variant="outline-danger" className="mr-2" onClick={() => this.props.history.push("/observaciones")}><IoMdReturnLeft /> Atrás</Button>
                        <Button variant="outline-primary" className="mr-2"><IoMdCreate /> Editar</Button>
                        <UploadFilesButton
                            getObservacion={this.getObservacion}
                            idObservacion={this.state.id} />
                        <div className="row mt-4">
                            <div className="col-lg-6">
                                <Nombre value={this.state.nombre} />
                                <Objetivos objetivos={this.state.objetivos} />
                            </div>
                            <div className="col-lg-6">
                                <TratamientoTemporalInfo
                                    tratamientoTemporal={this.state.tratamientoTemporal} />
                            </div>
                        </div>
                        <br />
                        <Tabs
                            id="files-tabs"
                            active={this.state.key}
                            onSelect={(k) => this.handleKey(k)}>
                            <Tab
                                eventKey="imagenes"
                                title="Imágenes">
                                <ImagenesList imagenes={this.state.imagenes} />
                            </Tab>
                            <Tab
                                eventKey="audios"
                                title="Audios">
                                asd
                            </Tab>
                            <Tab
                                eventKey="documentos"
                                title="Documentos">
                                asd
                            </Tab>
                            <Tab
                                eventKey="videos"
                                title="Videos">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <VideosList
                                            selectedVideo={this.state.selectedVideo}
                                            setVideo={this.setVideo}
                                            videos={this.state.videos}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        {
                                            this.state.videoSelected === '' ? '' :
                                                <video style={{ width: '100%' }} id="videoPlayer" controls>
                                                    <source src={`http://localhost:3007/videos/stream/${this.state.videoSelected}`} type="video/mp4"></source>
                                                </video>
                                        }
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}

export default ObservacionInfo;