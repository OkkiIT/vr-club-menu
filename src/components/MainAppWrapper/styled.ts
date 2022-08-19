import styled from 'styled-components';
import { headerHeight } from '../../consts/styles';

export const MainWrapper = styled.main`
  height: calc(100% - ${headerHeight});
  position: relative;
`;