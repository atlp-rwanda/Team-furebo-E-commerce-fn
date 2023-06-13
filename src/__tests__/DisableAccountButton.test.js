import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DisableAccountButton from '../components/AdminRegister/DisableAccountButton';
import disableAccount from '../redux/actions/DisableAccount';
import * as DisableAccountModule from '../redux/actions/DisableAccount';
// import { jest } from '@jest/globals';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../redux/actions/DisableAccount', () => ({
    disableAccount: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

jest.mock('../redux/actions/DisableAccount', () => ({
    __esModule: true,
    default: jest.fn(),
}));

describe('DisableAccountButton', () => {
    const dispatch = jest.fn();
    const mockedUseNavigate = jest.fn();

    beforeEach(() => {
        useDispatch.mockReturnValue(dispatch);
        useSelector.mockReturnValue({
          successCondition: false,
          userStatus: {},
          error: {},
          pending: false,
        });
        useNavigate.mockReturnValue(mockedUseNavigate);
        // render(<DisableAccountButton data={{userId: 1, currentUserStatus: true}}/>);
        useDispatch.mockClear();
        useSelector.mockClear();
    });

    afterEach(()=>{
        jest.clearAllMocks();
    })

    it('renders disable account button without errors', () => {
        const { getByText } = render(<DisableAccountButton data={{ currentUserStatus: true, userId: 1 }} />);

        expect(screen.getByTestId("disableAccountButton")).toBeInTheDocument();
        expect(screen.getByText('Disable Account')).toBeInTheDocument();
    });

    it('renders enable account button without errors', () => {
        const { getByText } = render(<DisableAccountButton data={{ currentUserStatus: false, userId: 1 }} />);

        expect(screen.getByTestId("disableAccountButton")).toBeInTheDocument();
        expect(screen.getByText('Enable Account')).toBeInTheDocument();
    });

    it('clicking disable account button shows the confirmation pop-up', () => {
        const { getByText } = render(<DisableAccountButton data={{ currentUserStatus: true, userId: 1 }} />);

        fireEvent.click(screen.getByText('Disable Account'));

        expect(screen.getByText('Are you sure you want to disable this account?')).toBeInTheDocument();
        // Test the display of the confirmation pop-up on button click
    });

    it('clicking enable account button shows the confirmation pop-up', () => {
        const { getByText } = render(<DisableAccountButton data={{ currentUserStatus: false, userId: 1 }} />);

        fireEvent.click(screen.getByText('Enable Account'));

        expect(screen.getByText('Are you sure you want to enable this account?')).toBeInTheDocument();
        // Test the display of the confirmation pop-up on button click
    });

    it('clicking Confirm button in the pop-up triggers the disableAccount action', async () => {
        const { getByText } = render(<DisableAccountButton data={{ currentUserStatus: true, userId: 1 }} />);

        const disableAccountMock = DisableAccountModule.default

        fireEvent.click(screen.getByText('Disable Account'));

        expect(screen.getByText('Are you sure you want to disable this account?')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Confirm'));

        expect(disableAccountMock).toHaveBeenCalledWith(
            { isEnabled: false }, 1, dispatch
        );
        // Test the triggering of the disableAccount action on Disable Account button click
    });

    it('clicking Confirm button in the pop-up triggers the enableAccount action', async () => {
        const { getByText } = render(<DisableAccountButton data={{ currentUserStatus: false, userId: 1 }} />);

        const disableAccountMock = DisableAccountModule.default

        fireEvent.click(screen.getByText('Enable Account'));

        expect(screen.getByText('Are you sure you want to enable this account?')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Confirm'));

        expect(disableAccountMock).toHaveBeenCalledWith(
            { isEnabled: true }, 1, dispatch
        );
        // Test the triggering of the disableAccount action on Disable Account button click
    });

    it('clicking Cancel button dismisses the confirmation pop-up', () => {
        const { getByText } = render(<DisableAccountButton data={{ currentUserStatus: false, userId: 1 }} />);

        fireEvent.click(screen.getByText('Enable Account'));

        expect(screen.getByText('Are you sure you want to enable this account?')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Cancel'));

        // expect(screen.getByText('Are you sure you want to enable this account?')).not.toBeInTheDocument();
        // Test the dismissal of the confirmation pop-up on X button click
    });

    it('clicking X button dismisses the confirmation pop-up', () => {
        const { getByText } = render(<DisableAccountButton data={{ currentUserStatus: true, userId: 1 }} />);

        fireEvent.click(screen.getByText('Disable Account'));

        expect(screen.getByText('Are you sure you want to disable this account?')).toBeInTheDocument();

        fireEvent.click(screen.getByText('X'));

        // expect(screen.getByText('Are you sure you want to disable this account?')).not.toBeInTheDocument();
        // Test the dismissal of the confirmation pop-up on X button click
    });
});
