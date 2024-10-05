import Container from './StyledComponents/Container';
import Button from './StyledComponents/Button';
import TextInput from './StyledComponents/TextInput';
import PropTypes from 'prop-types';

function OvenSettings({temp = 0, setTemp, time = 0, setTime, isCelsius = true, setIsCelsius, isFan = false, setIsFan}) {
    const handleFan = () => {
        setIsFan(fan => !fan);
    }

    const handleCelsius = () => {
        setIsCelsius(cel => !cel)
    }

    const handleNumbers = (e) => {
        let numberRegex = /[0-9\/]+/
        if (!numberRegex.test(e.key)) {
            e.preventDefault();
        }
        return Number(e.target.value)
    }

    return (
        <Container>
            <h2 data-testid="oven-settings-header" className="text-center">{isFan ? 'Fan assisted oven settings' : 'Conventional oven settings'}</h2>
            <div className="container">
                <div className="row p-2 text-center">
                    <div className="col-6">
                        <Button data-testid="fan-button" className="fs-5" type="button" onClick={handleFan}>Toggle oven type</Button>
                    </div>
                    <div className="col-6">
                        <Button data-testid="units-button" className="fs-5" type="button" onClick={handleCelsius}>Toggle unit</Button>
                    </div>
                </div>
                <div className="row p-2">
                    <label data-testid="temperature-input" className="fs-5">Temperature: <TextInput type="number" inputMode="numeric" className="fs-5" value={temp} onChange={e => setTemp(handleNumbers(e))}/>{isCelsius ? '°C' : '°F'}</label>
                    <label data-testid="unit-input" className="fs-5">Duration: <TextInput type="number" inputMode="numeric" className="fs-5" value={time} onChange={e => setTime(handleNumbers(e))}/>minutes</label>
                </div>
            </div>
        </Container>
    );
}

OvenSettings.propTypes = {
    temp: PropTypes.number,
    time: PropTypes.number,
    isFan: PropTypes.bool,
    isCelsius: PropTypes.bool,
    setTemp: PropTypes.func.isRequired,
    setTime: PropTypes.func.isRequired,
    setIsFan: PropTypes.func.isRequired,
    setIsCelsius: PropTypes.func.isRequired
}

export default OvenSettings;