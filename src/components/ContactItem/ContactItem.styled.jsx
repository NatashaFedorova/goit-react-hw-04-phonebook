import styled from 'styled-components';
import {
  Text,
  Button,
} from 'components/constants/DefaultStyleComponents.styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`;
export const About = styled(Text)``;

export const BtnDelete = styled(Button)`
  padding: ${props => props.theme.spacing(3)};
`;
