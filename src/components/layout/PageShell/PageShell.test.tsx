import { render } from '@testing-library/react';
import React from 'react';
import PageShell, { PageShellProps } from './PageShell';

describe('PageShell', () => {
    const defaultProps: PageShellProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<PageShell {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('PageShell')).toBeTruthy();
    });
});
