import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import Field from 'components/Field';
import {
  IInputs,
  LoadingStatus,
  ContactFormProps,
} from 'components/ContactForm';
import { ITheme } from 'styles/theme';

const Style = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

const Email = styled.input`
  height: 100%;
  appearance: none;
  background: ${({ theme }: { theme: ITheme }) => theme.colors.tan};
  color: ${({ theme }: { theme: ITheme }) => theme.colors.blue};
  border: none;
  font: ${({ theme }: { theme: ITheme }) => theme.fontSizes.smaller} 'Brandon';
  text-decoration: underline
    ${({ theme }: { theme: ITheme }) => theme.colors.green};
  padding: 0;

  :focus {
    outline: none;
    text-decoration: none;
  }
`;

const Message = styled.textarea`
  appearance: none;
  height: max-content;
  width: 35vw;
  background: ${({ theme }: { theme: ITheme }) => theme.colors.tan};
  color: ${({ theme }: { theme: ITheme }) => theme.colors.blue};
  text-decoration: underline
    ${({ theme }: { theme: ITheme }) => theme.colors.green};
  border: none;
  font: ${({ theme }: { theme: ITheme }) => theme.fontSizes.smaller} 'Brandon';
  resize: none;
  padding: 0;

  :focus {
    outline: none;
  }
`;

const RespMessageWrapper = styled.div`
  display: grid;
  justify-content: center;
`;

const RespMessage = styled.div`
  background: ${({ theme }: { theme: ITheme }) => theme.colors.tan};
  color: ${({ theme }: { theme: ITheme }) => theme.colors.blue};
  font: ${({ theme }: { theme: ITheme }) => theme.fontSizes.smaller} 'Brandon';
  overflow-wrap: break-word;
  padding-right: ${({ theme }: { theme: ITheme }) =>
    theme.relationalSizes.horizontal.regular};
  padding-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.relationalSizes.horizontal.regular};
  width: fit-content(10vw);
`;

const Form = () => {
  const { register, errors } = useForm<IInputs>();

  return (
    <>
      <Field errors={errors} title="email" value="email">
        <Email
          name="email"
          type="email"
          placeholder=""
          ref={register({ required: true })}
        />
      </Field>
      <Field errors={errors} title="message" value="message">
        <Message name="message" ref={register({ required: true })} />
      </Field>
    </>
  );
};

const Success = () => (
  <RespMessageWrapper>
    <RespMessage>
      'Thank you for reaching out. Your message was successfully sent.'
    </RespMessage>
  </RespMessageWrapper>
);

const Failure = () => (
  <RespMessage>
    'Thank you for reaching out. Unfortunately there was an issue and your
    message was not successfully sent. Please try again or reach me at
    eli.speigel@gmail.com'
  </RespMessage>
);

const getBody = (loadingStatus: LoadingStatus) => {
  switch (loadingStatus) {
    case LoadingStatus.INITIAL:
      return <Form />;
    case LoadingStatus.SUCCESS:
      return <Success />;
    case LoadingStatus.FAILURE:
      return <Failure />;
    default:
      break;
  }
};

const ContactFormBody: FunctionComponent<ContactFormProps> = ({
  loadingStatus,
}) => {
  return <Style>{getBody(loadingStatus)}</Style>;
};

export default ContactFormBody;
