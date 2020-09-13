import styled from "styled-components";

import { ContentType } from "pages";
import Form from "components/Form";
import ButtonBar from "components/ButtonBar";
import { FunctionComponent } from "react";


interface ContactProps {
  onContentChange: (newValue: ContentType) => void;
}

const Wrapper = styled.div`
  /* width: 100%; */
`;



const Contact: FunctionComponent<ContactProps> = ({ onContentChange }) => (
  <Wrapper>
    <Form onContentChange={onContentChange}/>
  </Wrapper>
)

export default Contact;