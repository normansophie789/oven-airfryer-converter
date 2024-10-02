import { useEffect, useState } from 'react'
import OvenSettings from './components/OvenSettings/OvenSettings';
import AirFryerSettings from './components/AirFryerSettings/AirFryerSettings';
import styled from 'styled-components';

const MainTitle = styled.h1`
  font-family: "Jersey 10", system-ui;
  margin-top: 2rem;
`

const FAN_MULTIPLIER = 2;
const CELSIUS_ADJUST = 20;
const FAHRENHEIGHT_ADJUST = 25;

const toAirFryerTemp = (temp, adjust, multiplier) => {
  return temp -(adjust * multiplier);
}

function App() {
  const [airTemp, setAirTemp] = useState(0);
  const [airTime, setAirTime] = useState(0);

  const [ovenTemp, setOvenTemp] = useState();
  const [ovenTime, setOvenTime] = useState();
  const [ovenWithFan, setOvenWithFan] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    setAirTemp(null);
    setAirTime(null);

    if (ovenTemp > 40) {
      let adjust = isCelsius ? CELSIUS_ADJUST : FAHRENHEIGHT_ADJUST;
      let multiplier = ovenWithFan ? FAN_MULTIPLIER : 1;
      setAirTemp(toAirFryerTemp(ovenTemp, adjust, multiplier));
    }
    if (ovenTime > 0) {
      setAirTime(Math.floor(ovenTime * 0.8));
    }
  }, [ovenTemp, ovenTime, ovenWithFan, setAirTemp, setAirTime, isCelsius]);

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
