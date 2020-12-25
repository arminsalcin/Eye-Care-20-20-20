import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 70px 65px 70px;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Divider = styled.div`
  width: 25%;
  height: 1px;
  background-color: white;
`;

export const TimeText = styled.p`
  font-size: 6.25em;
`;

export const InfoText = styled.p`
  font-size: 1.3em;
  font-style: italic;
`;

export const Heading = styled.h1`
  font-size: 2.1em;
  font-weight: 500;
`;

export const Link = styled.a`
  position: absolute;
  bottom: 4px;
  font-weight: 400;
  font-size: 0.8em;
  color: inherit;
`;
