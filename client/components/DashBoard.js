// components/DashboardHeader.js
import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
} from '@carbon/react';


function DashboardHeader1() {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Dashboard Header">
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName href="#" prefix="IBM">
            Carbon Dashboard
          </HeaderName>
          <HeaderNavigation aria-label="Dashboard Navigation">
            <HeaderMenuItem href="#">Home</HeaderMenuItem>
            <HeaderMenuItem href="#">Analytics</HeaderMenuItem>
            <HeaderMenuItem href="#">Settings</HeaderMenuItem>
          </HeaderNavigation>
         
        </Header>
      )}
    />
  );
}

export default DashboardHeader1;
