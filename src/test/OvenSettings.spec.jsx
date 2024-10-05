import { expect, test, describe, vi } from 'vitest';
import { render, screen, fireEvent } from "@testing-library/react";
import OvenSettings from '../components/OvenSettings';

describe('OvenSettings', () => {
    beforeEach(() => {
        render(<OvenSettings isFan={false} isCelsius={true} setTemp={vi.fn()} temp={400} setIsCelsius={vi.fn()} setIsFan={vi.fn()} setTime={vi.fn()} />);
    });

    test('it should render the Oven Settings component', () => {
        expect(screen.getByTestId('oven-settings-header')).toBeInTheDocument();
        expect(screen.getByTestId('temperature-input')).toBeInTheDocument();
        expect(screen.getByTestId('unit-input')).toBeInTheDocument();
        expect(screen.getByTestId('fan-button')).toBeInTheDocument();
        expect(screen.getByTestId('units-button')).toBeInTheDocument();

        expect(screen.getByText((text) => text.includes('°C'))).toBeInTheDocument();
        expect(screen.queryByText((text) => text.includes('°F'))).not.toBeInTheDocument();
    });
});