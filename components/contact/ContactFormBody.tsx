import { FunctionComponent } from "react";
import styled from "styled-components";
import PuffLoader from "react-spinners/PuffLoader";

import Field from "components/contact/Field";
import {
  LoadingStatus,
  ContactFormProps,
} from "components/contact/ContactForm";
import { ITheme, theme } from "styles/theme";

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
  font-family: "Brandon", "Helvetica Neue";
  font-weight: 500;
  font-style: italic;
  font-size: ${({ theme }: { theme: ITheme }) => theme.fontSizes.smaller};
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
  font: ${({ theme }: { theme: ITheme }) => theme.fontSizes.smaller} "Brandon";
  resize: none;
  padding: 0;

  :focus {
    outline: none;
  }
`;

const RespMessage = styled.div`
  background: ${({ theme }: { theme: ITheme }) => theme.colors.tan};
  padding-right: ${({ theme }: { theme: ITheme }) =>
    theme.relationalSizes.horizontal.regular};
  padding-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.relationalSizes.horizontal.regular};
  max-width: 75vw;
`;

const MessageText = styled.p`
  color: ${({ theme }: { theme: ITheme }) => theme.colors.blue};
  font: ${({ theme }: { theme: ITheme }) => theme.fontSizes.smaller} "Brandon";
  overflow-wrap: break-word;
`;

const Form = ({ errors, register }) => {
  return (
    <>
      <Field errors={errors} title='email' value='email'>
        <Email
          name='email'
          type='email'
          placeholder=''
          ref={register({ required: true })}
        />
      </Field>
      <Field errors={errors} title='message' value='message'>
        <Message name='message' ref={register({ required: true })} />
      </Field>
    </>
  );
};

const Success = () => (
  <RespMessage>
    <MessageText>
      Thank you for reaching out. Your message was successfully sent.
    </MessageText>
  </RespMessage>
);

const Failure = () => (
  <RespMessage>
    <MessageText>
      Thank you for reaching out. Unfortunately there was an issue and your
      message was not successfully sent. Please try again or contact me at
      eli.speigel@gmail.com.
    </MessageText>
  </RespMessage>
);

const PuffLoaderWrapper = styled.div`
  min-height: 30vh;
  width: 75vw;
  display grid;
  align-items: center;
  justify-items: center;
`;

const StyledPuffLoader = styled(PuffLoader)`
  width: min-content;
`;

const getBody = (loadingStatus: LoadingStatus, errors, register) => {
  switch (loadingStatus) {
    case LoadingStatus.INITIAL:
      return <Form errors={errors} register={register} />;
    case LoadingStatus.LOADING:
      return (
        <PuffLoaderWrapper>
          <StyledPuffLoader color={theme.colors.blue} size='20vh' />
        </PuffLoaderWrapper>
      );
    case LoadingStatus.SUCCESS:
      return <Success />;
    case LoadingStatus.FAILURE:
      return <Failure />;
    default:
      break;
  }
};

const ContactFormBody: FunctionComponent<ContactFormProps> = ({
  errors,
  loadingStatus,
  register,
}) => {
  return <Style>{getBody(loadingStatus, errors, register)}</Style>;
};

export default ContactFormBody;
