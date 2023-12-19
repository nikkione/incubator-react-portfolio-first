import React from 'react';
import styled from "styled-components";
import { Button } from '../../../components/Button';
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"subject"}/>
                    <Field placeholder={"message"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    
`

const StyledForm = styled.form`
max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin:0 auto;
  
  textarea {
    resize: none;
    height: 155px;
  }
`
const Field = styled.input`
  width: 100%;
  border: 1px solid ${Theme.colors.borderColor};
  background-color: ${Theme.colors.secondaryBg};
  padding: 7px 15px;

  color: ${Theme.colors.font};
  font-family: Poppins,sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
  
  &::placeholder {
    color: ${Theme.colors.placeholderColor};
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 1px solid ${Theme.colors.borderColor}
  }
`
