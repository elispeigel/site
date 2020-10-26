import { FunctionComponent } from "react";
import styled from "styled-components";

import {
  ContactFormProps,
  LoadingStatus,
} from "components/contact/ContactForm";
import ButtonBar from "components/contact/ButtonBar";

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
        <ButtonBar buttonType='submit' />
      ) : null}
    </Style>
  );
};

export default ContactFormBottom;
