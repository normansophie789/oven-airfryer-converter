import './OvenSettings.css'
import styled from 'styled-components';
import { Container } from '../StyledComponents/Container';

const TextInput = styled.input`
    background-color: #000000;
    border-width: 0 0 3px 0;
    border-color: #4af626;
    border-style: solid;
    padding: 5px;
    margin: 2px;
    width: 5rem;
    background-color: rgba(0,0,0,0);
    color: #4af626;
    &:focus {
        outline: none;
    }
`

const Button = styled.button`
    line-height: 1em;
    border-color: #4af626;
    border-width: 3px;
    border-style: solid;
    margin: 0 1rem;
    font-family: inherit;
    color: #4af626;
    background-color: #000000;
    padding: 5px;
    &:active {
        background-color: #4af626;
        color: #000000;
    }
`

function OvenSettings({temp = 0, setTemp, time = 0, setTime, isCelsius = true, setIsCelsius, isFan = false, setIsFan}) {
    const handleFan = () => {
        setIsFan(fan => !fan);
    }

    const handleCelsius = () => {
        setIsCelsius(cel => !cel)
    }
    
    return (
        <Container>
            <h2 className="text-center">{isFan ? 'Fan assisted oven settings' : 'Conventional oven settings'}</h2>
            <div className="container">
                <div className="row p-2 text-center">
                    <div className="col-6">
                        <Button className="fs-5" type="button" onClick={handleFan}>Toggle oven type</Button>
                    </div>
                    <div className="col-6">
                        <Button className="fs-5" type="button" onClick={handleCelsius}>Toggle unit</Button>
                    </div>
                </div>
                <div className="row p-2">
                    <label className="fs-5">Temperature: <TextInput inputMode="numeric" className="fs-5" value={temp} onChange={e => setTemp(e.target.value)}/>{isCelsius ? '°C' : '°F'}</label>
                    <label className="fs-5">Duration: <TextInput inputMode="numeric" className="fs-5" value={time} onChange={e => setTime(e.target.value)}/>minutes</label>
                </div>
            </div>
        </Container>
    );
}

export default OvenSettings;