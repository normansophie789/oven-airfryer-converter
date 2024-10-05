import { expect, test, describe } from 'vitest';
import { render, screen } from "@testing-library/react";
import AirFryerSettings from '../../components/AirFryerSettings';

describe('AirFryerSettings', () => {
    beforeEach(() => {
        render(<AirFryerSettings temp={200} time={10} unit={'*C'} />)
    });

    test('it should render the AirFryerSettings component', () => {
        expect(screen.getByText('Temperature: 200*C')).toBeInTheDocument();
        expect(screen.getByText('Duration: 10 minutes')).toBeInTheDocument();
    })
});