import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: ${props => props.theme.spacing(6)};
  text-align: center;
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.light};
`;

export const TitleContactsSection = styled.h2`
  margin-bottom: ${props => props.theme.spacing(8)};
  text-align: center;
  font-size: ${props => props.theme.fontSizes.mediumPlus};
`;
