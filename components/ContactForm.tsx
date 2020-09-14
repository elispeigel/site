
import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import axios from "axios"

import Field from 'components/Field';
import ButtonBar from './ButtonBar';
import { ITheme } from 'styles/theme';

interface IInputs {
  email: string;
  body: string;
}


const Style = styled.form`
  height: max-content;
  display: grid;
  align-items: center;
  grid-template-columns: min-content max-content min-content;
  grid-template-rows: min-content max-content min-content;
`;

const Top = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

const Middle = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

const Bottom = styled.div`
  grid-column: 3;
  grid-row: 3;
`;

const Fields = styled.div``;


const Email = styled.input`
  height: 100%;
  appearance: none;
  background: ${({ theme }: { theme: ITheme}) => theme.colors.tan};
  color: ${({ theme }: { theme: ITheme}) => theme.colors.blue};
  border: none;
  font: ${({ theme }: { theme: ITheme}) => theme.fontSizes.smaller} 'Brandon';
  text-decoration: underline ${({ theme }: { theme: ITheme}) => theme.colors.green};
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
  background: ${({ theme }: { theme: ITheme}) => theme.colors.tan};
  color: ${({ theme }: { theme: ITheme}) => theme.colors.blue};
  text-decoration: underline ${({ theme }: { theme: ITheme}) => theme.colors.green};
  border: none;
  font: ${({ theme }: { theme: ITheme}) => theme.fontSizes.smaller} 'Brandon';
  resize: none;
  padding: 0;

  :focus {
   outline: none;
  }
`;

export const sendContactMail = async (data) => {

    try {
        const res = await axios({
            method: "post",
            url: "/api/contact",
            headers: {
                "Content-Type": "application/json"
            },
            data
        })
        return res

    } catch (error) {
        return error
    }
}


const ContactForm: FunctionComponent = () => {
  const { register, handleSubmit, errors } = useForm<IInputs>();
  const onSubmit = async (data) => {
    const res = await sendContactMail(data);

    if (res.status < 300) {
        console.log('success')
    } else {
      console.log('failure')
    }
  };

  return (
    <Style onSubmit={handleSubmit(onSubmit)}>
      <Top>
        <ButtonBar symbol='⤂' buttonType='button'/>
      </Top>
      <Middle>
        <Fields>
          <Field
            errors={errors}
            title='email'
            value='email'
          >
            <Email name='email' type='email' placeholder='' ref={register({ required: true })}/>
          </Field>
          <Field
            errors={errors}
            title='message'
            value='message'
          >
            <Message name='message' ref={register({ required: true })}/>
          </Field>
        </Fields>
      </Middle>
      <Bottom>
        <ButtonBar symbol='⤃' buttonType='submit' />
      </Bottom>
    </Style>
  )
}

export default ContactForm;