import styled from 'styled-components/native';

const MainContainer = styled.ImageBackground`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  width: 44px;
  height: 88px;
  margin-bottom: 12;
`;

const Loader = styled.ActivityIndicator``;


export {
  MainContainer,
  Logo,
  Loader,
};
