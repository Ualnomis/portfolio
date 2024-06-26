import FocusLock from 'react-focus-lock';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import HTMLStyleTag from '../HTMLStyleTag';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Icon } from '@iconify/react';
import { RemoveScroll } from 'react-remove-scroll';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import SmoothScrollTo from '../SmoothScrollTo';

const MobileNavigationMenu = ({
  handleDismiss,
}: {
  handleDismiss: () => void;
}) => {
  return createPortal(
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <Wrapper>
          <CloseButton onClick={handleDismiss}>
            <Icon
              icon="line-md:menu-to-close-transition"
              aria-hidden="true"
              focusable="false"
            />
            <VisuallyHidden.Root>Close Nvigation Menu</VisuallyHidden.Root>
          </CloseButton>
          <NavigationMenuRoot>
            <NavigationMenuList>
              <NavigationListItem>
                <SmoothScrollTo id="about" callback={handleDismiss}>
                  <HTMLStyleTag>About</HTMLStyleTag>
                </SmoothScrollTo>
              </NavigationListItem>
              <NavigationListItem>
                <SmoothScrollTo id="skill" callback={handleDismiss}>
                  <HTMLStyleTag>SKill</HTMLStyleTag>
                </SmoothScrollTo>
              </NavigationListItem>
              <NavigationListItem>
                <SmoothScrollTo id="project" callback={handleDismiss}>
                  <HTMLStyleTag>Project</HTMLStyleTag>
                </SmoothScrollTo>
              </NavigationListItem>
              <NavigationListItem>
                <SmoothScrollTo id="contact" callback={handleDismiss}>
                  <HTMLStyleTag>Contract</HTMLStyleTag>
                </SmoothScrollTo>
              </NavigationListItem>
            </NavigationMenuList>
            <NavigationMenu.Indicator />
          </NavigationMenuRoot>
        </Wrapper>
      </RemoveScroll>
    </FocusLock>,
    document.querySelector('#mobile-nav-portal') as Element,
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
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  background: var(--color-blurred-background);
  backdrop-filter: blur(8px);
`;

const CloseButton = styled.button`
  position: absolute;
  background: none;
  border: 0;
  margin: 0;
  padding: 0;
  color: var(--color-text);
  font-size: 3rem;
  right: 32px;
  top: 24px;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export default MobileNavigationMenu;
