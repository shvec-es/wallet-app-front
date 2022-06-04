import { createGlobalStyle } from 'styled-components';

import CirceRegularOtf from 'assets/fonts/Circe-Regular.otf';
import CirceBoldOtf from 'assets/fonts/Circe-Bold.otf';
import PoppinsRegularTtf from 'assets/fonts/Poppins-Regular.ttf';
import PoppinsBoldTtf from 'assets/fonts/Poppins-Bold.ttf';
import SegoeUiTtf from 'assets/fonts/segoeui.ttf';
import SegoeUiBoldTtf from 'assets/fonts/segoeuib.ttf';

const FontStyles = createGlobalStyle`
@font-face {
    font-family: 'Circe';
    font-weight: 400;
    src: local('Circe'),
      url(${CirceRegularOtf}) format('opentype');
  }
  
  @font-face {
    font-family: 'Circe';
    font-weight: 700;
    src: local('Circe'), url(${CirceBoldOtf}) format('opentype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    src: local('Poppins'),
      url(${PoppinsRegularTtf}) format('truetype');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-weight: 700;
    src: local('Poppins'),
      url(${PoppinsBoldTtf}) format('TrueType');
  }
  
  @font-face {
    font-family: 'Segoe UI';
    font-weight: 400;
    src: local('Segoe UI'), url(${SegoeUiTtf}) format('truetype');
  }
  
  @font-face {
    font-family: 'Segoe UI';
    font-weight: 700;
  
    src: local('Segoe UI'), url(${SegoeUiBoldTtf}) format('truetype');
  }
`;

export default FontStyles;