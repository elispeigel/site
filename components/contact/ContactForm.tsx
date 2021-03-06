import { FunctionComponent, useState } from "react";
import { DeepMap, FieldError, useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";

import ButtonBar from "components/contact/ButtonBar";
import ContactFormBody from "components/contact/ContactFormBody";
import ContactFormBottom from "components/contact/ContactFormBottom";

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

export const sendContactMail = async (data, setLoadingStatus) => {
  try {
    setLoadingStatus(LoadingStatus.LOADING);
    await axios({
      method: "post",
      url: "https://mailthis.to/espeigel",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    });
  } catch (error) {
    setLoadingStatus(LoadingStatus.FAILURE);
    return error;
  }

  setLoadingStatus(LoadingStatus.SUCCESS);
};

const ContactForm: FunctionComponent = () => {
  const { errors, handleSubmit, register } = useForm<IInputs>();

  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>(
    LoadingStatus.INITIAL
  );

  const onSubmit = async (data) => {
    sendContactMail({ message: JSON.stringify(data) }, setLoadingStatus);
  };

  return (
    <Style onSubmit={handleSubmit(onSubmit)}>
      <Top>
        <ButtonBar buttonType='button' />
      </Top>
      <ContactFormBody
        errors={errors}
        loadingStatus={loadingStatus}
        register={register}
      />
      <ContactFormBottom loadingStatus={loadingStatus} />
    </Style>
  );
};

export default ContactForm;
