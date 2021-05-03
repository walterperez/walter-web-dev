import styled from "styled-components";
// Constants
import { PRIMARY_COLOR, PRIMARY_COLOR_DARK } from "../../styles/constants";

const UnderLine = styled.div`
  position: relative;
  flex: 1;
  width: 100px;
  height: 5px;
  border-radius: 10px;
  background: linear-gradient(
    to right,
    ${PRIMARY_COLOR_DARK},
    ${PRIMARY_COLOR}
  );
  z-index: 10;
`;

export default UnderLine;
