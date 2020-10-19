import { FunctionComponent } from 'react';
import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';

import { ContactFormProps, LoadingStatus } from 'components/ContactForm';
import ButtonBar from 'components/ButtonBar';

const Style = styled.div`
  grid-column: 3;
  grid-row: 3;
`;

const getBottom = (loadingStatus: LoadingStatus) => {
  switch (loadingStatus) {
    case LoadingStatus.INITIAL:
      return <ButtonBar symbol="✉" buttonType="submit" />;
    case LoadingStatus.LOADING:
      return <BeatLoader />;
    case LoadingStatus.SUCCESS:
      return null;
    case LoadingStatus.FAILURE:
      return null;
    default:
      break;
  }
};

const ContactFormBottom: FunctionComponent<ContactFormProps> = ({
  loadingStatus,
}) => {
  return <Style>{getBottom(loadingStatus)}</Style>;
};

export default ContactFormBottom;
