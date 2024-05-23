import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled from 'styled-components';

const Header = () => {
  return (
    <NavigationMenu.Root>
      <Logo>{'<Simon />'}</Logo>
      <NavigationMenu.List>{'<Simon.IS />'}</NavigationMenu.List>
      <NavigationMenu.List>{'<Simon.About />'}</NavigationMenu.List>
      <NavigationMenu.List>{'<Simon.Project />'}</NavigationMenu.List>
      <NavigationMenu.List>{'<Simon.Resume />'}</NavigationMenu.List>
      <NavigationMenu.List>{'<Simon.Contact />'}</NavigationMenu.List>
      <NavigationMenu.Indicator />
    </NavigationMenu.Root>
  );
};

const Logo = styled.div``;

export default Header;
