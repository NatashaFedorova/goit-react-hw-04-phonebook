import styled from 'styled-components';
import { Form, Field } from 'formik';
import {
  Button,
  Text,
} from 'components/constants/DefaultStyleComponents.styled';

export const DataForm = styled(Form)`
  padding: ${props => props.theme.spacing(4)};
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.accent};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-right: ${props => props.theme.spacing(2)};
  color: #fff;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeight.medium};
`;

export const Input = styled(Field)`
  width: calc(100% - 15px);
  margin-top: ${props => props.theme.spacing(3)};
  margin-bottom: ${props => props.theme.spacing(6)};
  padding: ${props => props.theme.spacing(2)};
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeight.normal};
`;

export const BtnSubmit = styled(Button)`
  margin: 0 auto;
`;

export const Error = styled(Text)`
  color: ${props => props.theme.colors.error};
  margin: ${props => props.theme.spacing(6)} auto;
  margin-top: 0;
`;
