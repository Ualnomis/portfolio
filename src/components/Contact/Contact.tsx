import * as React from 'react';
import PageSection from '../PageSection';
import * as Form from '@radix-ui/react-form';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { SentResultProps } from '../../types';
import { motion } from 'framer-motion';

function Contact() {
  const [isSent, setIsSent] = React.useState<boolean>(false);
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append('access_key', 'e6f6a38f-bc3e-491b-b593-1ad75153a26f');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setIsSent(true);
      setIsSuccess(true);
      event.currentTarget.reset();
    } else {
      setIsSent(true);
      setIsSuccess(false);
    }
  };

  const handleTryAgain = () => {
    setIsSent(false);
    setIsSuccess(false);
  };

  return (
    <PageSection header="Contact" id="contact">
      <FormWrapper>
        {isSent && isSuccess && (
          <SentResultWrapper $isSuccess={isSuccess}>
            <SentResultIconWrapper>
              <Icon icon="teenyicons:tick-circle-solid" />
            </SentResultIconWrapper>
            <SentResultMessage>Success!</SentResultMessage>
          </SentResultWrapper>
        )}
        {isSent && !isSuccess && (
          <SentResultWrapper $isSuccess={isSuccess}>
            <SentResultIconWrapper>
              <Icon icon="teenyicons:x-circle-solid" />
            </SentResultIconWrapper>
            <SentResultMessage>Oops! Something went wrong!</SentResultMessage>
            <TryAgainButton onClick={handleTryAgain}>Try Again</TryAgainButton>
          </SentResultWrapper>
        )}
        {!isSent && (
          <Form.Root onSubmit={onSubmit}>
            <FormField name="name">
              <LabelMessageWrapper>
                <FormLabel>First Name</FormLabel>
                <FormMessage match="valueMissing">
                  Please enter your name
                </FormMessage>
              </LabelMessageWrapper>
              <FormControl type="text" required />
              <FormControldecorationLine />
            </FormField>
            <FormField name="email">
              <LabelMessageWrapper>
                <FormLabel>Email </FormLabel>
                <FormMessage match="valueMissing">
                  Please enter your email
                </FormMessage>
                <FormMessage match="typeMismatch">
                  Please enter validate email
                </FormMessage>
              </LabelMessageWrapper>
              <FormControl type="email" required />
              <FormControldecorationLine />
            </FormField>
            <FormField name="message">
              <LabelMessageWrapper>
                <FormLabel>Message </FormLabel>
                <FormMessage match="valueMissing">
                  Please enter your message
                </FormMessage>
              </LabelMessageWrapper>
              <FormControl asChild required>
                <TextArea></TextArea>
              </FormControl>
              <FormControldecorationLine />
            </FormField>
            <FormSubmit>Submit</FormSubmit>
          </Form.Root>
        )}
      </FormWrapper>
    </PageSection>
  );
}

const SentResultWrapper = styled.div<SentResultProps>`
  color: ${(props) => {
    return props.$isSuccess ? 'var(--color-success)' : 'var(--color-error)';
  }};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SentResultIconWrapper = styled.div`
  font-size: 5rem;
  color: inherit;
`;
const SentResultMessage = styled.div`
  font-size: 1.75rem;
  color: inherit;
`;

const TryAgainButton = styled.button`
  margin-top: 32px;
  font-size: 1.75rem;
  color: var(--color-muted);
  background: var(--color-error);
  border: 0;
  padding: var(--padding);
  border-radius: var(--inner-radius);
`;

const FormWrapper = styled.div`
  background: var(--color-muted);
  --padding: 16px;
  padding: var(--padding);
  --inner-radius: 8px;
  border-radius: calc(var(--inner-radius) + var(--padding));
`;

const TextArea = styled.textarea`
  resize: vertical;
`;

const FormField = styled(Form.Field)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 32px 0;
`;

const FormControl = styled(Form.Control)`
  appearance: none;
  border: 0;
  background: inherit;
  color: inherit;
  min-height: 64px;
  font-size: 1.25rem;

  &:focus {
    outline: none;
  }
`;

const FormSubmit = styled(Form.Submit)`
  border: 0;
  height: 60px;
  position: relative;
  color: inherit;
  text-shadow: rgba(0, 0, 0, 0.15) 1px 1px 1px;
  font-size: 1.25rem;
  height: 60px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  width: 175px;
  --magic-rainbow-color-newsletter-signup-button-0: hsl(230deg, 100%, 45%);
  --magic-rainbow-color-newsletter-signup-button-1: hsl(240deg, 100%, 45%);
  --magic-rainbow-color-newsletter-signup-button-2: hsl(260deg, 100%, 55%);
  transition:
    --magic-rainbow-color-newsletter-signup-button-0 1625ms linear,
    --magic-rainbow-color-newsletter-signup-button-1 1625ms linear,
    --magic-rainbow-color-newsletter-signup-button-2 1625ms linear;
  background: radial-gradient(
    circle at top left,
    var(--magic-rainbow-color-newsletter-signup-button-2),
    var(--magic-rainbow-color-newsletter-signup-button-1),
    var(--magic-rainbow-color-newsletter-signup-button-0)
  );
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 2px;
    left: 6px;
    right: 6px;
    height: 20%;
    background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0)
    );
    border-radius: 20px 20px 100px 100px / 14px 14px 30px 30px;
    pointer-events: none;
  }

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 30%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.17));
    border-radius: 0px 0px 4px 4px;
    pointer-events: none;
  }
`;

const LabelMessageWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const FormMessage = styled(Form.Message)`
  color: var(--color-error);
`;

const FormLabel = styled(Form.Label)`
  ${FormField}:focus-within & {
    color: var(--color-primary);
  }
`;

const FormControldecorationLine = styled(motion.div)`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  pointer-events: none;
  height: 3px;
  border-radius: 2px;
  background: var(--color-text);
  opacity: 0.6;

  ${FormField}:focus-within & {
    background: var(--color-primary);
    transform: translateY(10px);
    transition: transform 250ms ease-in-out;
  }
`;

export default Contact;
