import * as React from 'react';
import FocusLock from 'react-focus-lock';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import HTMLStyleTag from '../HTMLStyleTag';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { IoClose } from 'react-icons/io5';
import { QUERIES } from '../../constants';
import { RemoveScroll } from 'react-remove-scroll';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

const MobileNavigationMenu = ({
  handleDismiss,
}: {
  handleDismiss: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return createPortal(
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <Wrapper>
          <CloseButton onClick={handleDismiss}>
            <CloseIcon aria-hidden="true" focusable="false" />
            <VisuallyHidden.Root>Close Nvigation Menu</VisuallyHidden.Root>
          </CloseButton>
          <NavigationMenuRoot>
            <NavigationMenuList>
              <NavigationListItem>
                <HTMLStyleTag>About</HTMLStyleTag>
              </NavigationListItem>
              <NavigationListItem>
                <HTMLStyleTag>SKill</HTMLStyleTag>
              </NavigationListItem>
              <NavigationListItem>
                <HTMLStyleTag>Project</HTMLStyleTag>
              </NavigationListItem>
              <NavigationListItem>
                <HTMLStyleTag>Contract</HTMLStyleTag>
              </NavigationListItem>
            </NavigationMenuList>
            <NavigationMenu.Indicator />
          </NavigationMenuRoot>
        </Wrapper>
      </RemoveScroll>
    </FocusLock>,
    document.querySelector('#mobile-nav-portal'),
  );
};

const NavigationMenuList = styled(NavigationMenu.List)`
  display: flex;
  list-style-type: none;
  flex-direction: column;
  font-size: 3rem;
  width: 75vh;
`;

const NavigationListItem = styled(NavigationMenu.Item)`
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const NavigationMenuRoot = styled(NavigationMenu.Root)`
  height: var(--header-height);
  display: flex;
  align-items: center;
  color: var(--color-text);
  height: 100vh;
`;

const Wrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: revert;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    background: var(--color-blurred-background);
    backdrop-filter: blur(8px);
  }
`;

const CloseIcon = styled(IoClose)``;

const CloseButton = styled.button`
  position: absolute;
  background: none;
  border: 0;
  margin: 0;
  padding: 0;
  color: var(--color-text);
  font-size: 3rem;
  right: 50px;
  top: 50px;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export default MobileNavigationMenu;
