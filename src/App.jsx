import { useEffect, useState } from 'react'
import OvenSettings from './components/OvenSettings';
import AirFryerSettings from './components/AirFryerSettings';
import styled from 'styled-components';
import { convertTemp, convertTime } from './utils/ovenToAirfryerConverter';
import './App.css';

const MainTitle = styled.h1`
  font-family: "Jersey 10", system-ui;
  margin-top: 2rem;
`

function App() {
  const [airTemp, setAirTemp] = useState(0);
  const [airTime, setAirTime] = useState(0);

  const [ovenTemp, setOvenTemp] = useState();
  const [ovenTime, setOvenTime] = useState();
  const [ovenWithFan, setOvenWithFan] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    setAirTemp(convertTemp(ovenTemp, ovenWithFan ? 'fan' : 'conventional', isCelsius ? 'c' : 'f'));
    setAirTime(convertTime(ovenTime));
  }, [ovenTemp, ovenTime, ovenWithFan, setAirTemp, setAirTime, isCelsius, convertTemp, convertTime]);

  return (
    <div className="container-md">
      <div className="row">
        <MainTitle className="display-3 text-center">&gt;OVEN TO AIRFRYER CONVERTER</MainTitle>
        <p className="fs-2 text-center">Temperature and timer converter for air fryer cooking</p>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <OvenSettings
            temp={ovenTemp} setTemp={setOvenTemp} 
            time={ovenTime} setTime={setOvenTime} 
            isCelsius={isCelsius} setIsCelsius={setIsCelsius} 
            isFan={ovenWithFan} setIsFan={setOvenWithFan}
          />
        </div>
        <div className="col-12 col-md-6">
          <AirFryerSettings 
            time={airTime}
            temp={airTemp}
            unit={isCelsius ? '°C' : '°F'}
          />
        </div>
      </div>
    </div>
  )
}

export default App
