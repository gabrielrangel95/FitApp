import styled from 'styled-components/native';

const MainContainer = styled.ImageBackground`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BeansImage = styled.Image`
  height: 80%;
  width: 50%;
  position: absolute;
  left: 0;
`;

const DumbbellImage = styled.Image`
  height: 36%;
  width: 29%;
  position: absolute;
  right: 0;
  top: 50%;
`;

const MatImage = styled.Image`
  height: 10%;
  width: 30%;
  position: absolute;
  right: 0;
  top: 80%;
`;

const Logo = styled.Image`
  width: 22px;
  height: 44px;
`;

export {
  MainContainer,
  BeansImage,
  DumbbellImage,
  MatImage,
  Logo,
};
