import { FunctionComponent, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import axios from 'axios';

import ButtonBar from 'components/ButtonBar';
import ContactFormBody from 'components/ContactFormBody';
import ContactFormBottom from 'components/ContactFormBottom';

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

export const sendContactMail = async (data, setLoadingStatus) => {
  try {
    setLoadingStatus(LoadingStatus.LOADING);
    const res = await axios({
      method: 'post',
      url: 'https://mailthis.to/eli.speigel@gmail.com',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    }).then(() => {
      setLoadingStatus(LoadingStatus.SUCCESS);
    });
    // .then(function () {
    //   window.location.href = 'https://mailthis.to/confirm'
    // })
  } catch (error) {
    setLoadingStatus(LoadingStatus.FAILURE);
    return error;
  }
};

const ContactForm: FunctionComponent = () => {
  const { handleSubmit } = useForm<IInputs>();
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>(
    LoadingStatus.INITIAL
  );

  const onSubmit = async (data) => {
    sendContactMail(data, setLoadingStatus);
    console.log(data, 'data');
  };

  return (
    <Style onSubmit={handleSubmit(onSubmit)}>
      <Top>
        <ButtonBar symbol="⤂" buttonType="button" />
      </Top>
      <ContactFormBody loadingStatus={loadingStatus} />
      <ContactFormBottom loadingStatus={loadingStatus} />
    </Style>
  );
};

export default ContactForm;
