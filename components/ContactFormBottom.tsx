import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ContactFormProps, LoadingStatus } from 'components/ContactForm';
import ButtonBar from 'components/ButtonBar';

const Style = styled.div`
  grid-column: 3;
  grid-row: 3;
`;

const ContactFormBottom: FunctionComponent<ContactFormProps> = ({
  loadingStatus,
}) => {
  return (
    <Style>
      {loadingStatus === LoadingStatus.INITIAL ? (
        <ButtonBar buttonType="submit" />
      ) : null}
    </Style>
  );
};

export default ContactFormBottom;
