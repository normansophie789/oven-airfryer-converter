import PropTypes from "prop-types";
import Container from "./StyledComponents/Container";

function AirFryerSettings({temp, time, unit}) {
    let displayTemp = temp ? `${temp}${unit}` : '';
    let displayTime = time ? `${time} minutes` : '';

    return (
        <Container>
            <div className="container">
                <div className="row">
                    <h2 className="text-center">Suggested air fryer settings</h2>
                </div>
                <div className="row">
                    <p className="fs-5">Temperature: {displayTemp}</p>
                    <p className="fs-5">Duration: {displayTime}</p>
                </div>
            </div>
        </Container>
    );
}

AirFryerSettings.propTypes = {
    temp: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
}

export default AirFryerSettings;