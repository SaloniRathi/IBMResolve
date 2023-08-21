
import React from 'react';
import {
    Header,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem,
    HeaderMenu,
    Theme
} from '@carbon/react';
class DashboardHeader extends React.PureComponent {

    render() {
        return <div>
             <Theme theme="g100">
            <Header aria-label="IBM Platform Name">
            <HeaderName
                href="#"
                prefix="IBM MaaS360 | With Watson "
            >
                 "Platform"
            </HeaderName>
            <HeaderNavigation aria-label="IBM [Platform]">
                <HeaderMenuItem href="#">Important Links</HeaderMenuItem>
            </HeaderNavigation>
        </Header>
        </Theme>
        </div>
    }
}

export default DashboardHeader;