import { FunctionComponent, useState } from 'react';
import { DeepMap, FieldError, useForm } from 'react-hook-form';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/router'

import ButtonBar from 'components/ButtonBar';
import ContactFormBody from 'components/ContactFormBody';
import ContactFormBottom from 'components/ContactFormBottom';
import { datacatalog_v1beta1 } from 'googleapis';

export interface IInputs {
  email: string;
  body: string;
}

export enum LoadingStatus {
  INITIAL,
  LOADING,
  SUCCESS,
  FAILURE,
}

export interface ContactFormProps {
  loadingStatus: LoadingStatus;
  errors?: DeepMap<IInputs, FieldError>;
  register?: any;
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

export const sendContactMail = async (data, setLoadingStatus, router) => {
  try {
    setLoadingStatus(LoadingStatus.LOADING);
    const res = await axios({
      method: 'post',
      url: 'https://mailthis.to/espeigel',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    }).then(() => {
      setLoadingStatus(LoadingStatus.SUCCESS);
      router.push('https://mailthis.to/confirm')
    });
  } catch (error) {
    setLoadingStatus(LoadingStatus.FAILURE);
    return error;
  }
};

const ContactForm: FunctionComponent = () => {
  const { errors, handleSubmit, register } = useForm<IInputs>();

  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>(
    LoadingStatus.INITIAL
  );

  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data, 'data');

    sendContactMail({ message: JSON.stringify(data) }, setLoadingStatus, router);
  };

  return (
    <Style onSubmit={handleSubmit(onSubmit)}>
      <Top>
        <ButtonBar symbol="⤂" buttonType="button" />
      </Top>
      <ContactFormBody errors={errors} loadingStatus={loadingStatus} register={register} />
      <ContactFormBottom loadingStatus={loadingStatus} />
    </Style>
  );
};

export default ContactForm;
