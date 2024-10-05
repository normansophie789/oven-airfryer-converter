import Container from './StyledComponents/Container';
import Button from './StyledComponents/Button';
import TextInput from './StyledComponents/TextInput';

function OvenSettings({temp = 0, setTemp, time = 0, setTime, isCelsius = true, setIsCelsius, isFan = false, setIsFan}) {
    const handleFan = () => {
        setIsFan(fan => !fan);
    }

    const handleCelsius = () => {
        setIsCelsius(cel => !cel)
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
                    <label data-testid="temperature-input" className="fs-5">Temperature: <TextInput inputMode="numeric" className="fs-5" value={temp} onChange={e => setTemp(e.target.value)}/>{isCelsius ? '°C' : '°F'}</label>
                    <label data-testid="unit-input" className="fs-5">Duration: <TextInput inputMode="numeric" className="fs-5" value={time} onChange={e => setTime(e.target.value)}/>minutes</label>
                </div>
            </div>
        </Container>
    );
}

export default OvenSettings;