import * as React from 'react';
import PageSection from '../PageSection';
import * as Form from '@radix-ui/react-form';
import styled from 'styled-components';

function Contact() {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'e6f6a38f-bc3e-491b-b593-1ad75153a26f');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
      console.log(result);
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <PageSection header="Contact">
      <FormRoot onSubmit={onSubmit}>
        <FormField name="name">
          <Form.Label>First Name</Form.Label>
          <FormControl type="text" />
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your name
          </Form.Message>
        </FormField>
        <FormField name="email">
          <Form.Label>Email </Form.Label>
          <FormControl type="email" />
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your email
          </Form.Message>
        </FormField>
        <FormField name="message">
          <Form.Label>Message </Form.Label>
          <FormControl asChild>
            <TextArea></TextArea>
          </FormControl>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your email
          </Form.Message>
        </FormField>
        <FormSubmit>Submit</FormSubmit>
      </FormRoot>
    </PageSection>
  );
}

const FormRoot = styled(Form.Root)`
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
  display: flex;
  flex-direction: column;
  margin: 16px 0;
`;

const FormControl = styled(Form.Control)`
  appearance: none;
  border: 0;
  background: inherit;
  color: var(--color-text);
  border-bottom: white solid 3px;
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

export default Contact;
