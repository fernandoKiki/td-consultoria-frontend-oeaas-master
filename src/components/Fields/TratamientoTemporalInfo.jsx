import React from 'react';

function TratamientoTemporalInfo(props) {
    if (props.tratamientoTemporal !== null) {
        return (
            <>
                <p><strong>Planificación:</strong> {props.tratamientoTemporal.planificacion}</p>
                <p><strong>Fecha Inicio:</strong> {props.tratamientoTemporal.fechaInicio.split('T')[0]}</p>
                <p><strong>Fecha Fin:</strong> {props.tratamientoTemporal.fechaFin === null ? 'No tiene' : props.tratamientoTemporal.fechaFin}</p>
                <p><strong>Canal de Comunicación: </strong>{props.tratamientoTemporal.canalComunicacion}</p>
            </>
        );
    }
    return (<p>No se puede mostrar el Tratamiento Temporal</p>);
}

export default TratamientoTemporalInfo;