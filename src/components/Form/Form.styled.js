import styled from 'styled-components';
import { ErrorMessage, Field, Form as FormikForm } from 'formik'; 



export const Title = styled.h2`
    font-weight: 500;
    font-size: 36px;
    line-height: 1.5;
    color:  #2F4F4F;
    text-align: center;`

export const ContactFormStyled = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 4px 64px;
  box-sizing: border-box;
  background-color: #2F4F4F;
`;
export const StyledLabel = styled.label`
 font-size: 18px;
 font-weight: 500;
    color:  #F6F4EB;
`;

export const StyledInput = styled(Field)`
  font-size: 16px;
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

export const AddBtn = styled.button`
  background-color: #F6F4EB;
  color: #2F4F4F;
  font-size: 16px;
  padding: 8px;
 
`;
