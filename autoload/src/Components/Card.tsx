import styled from "styled-components";
import { Box } from "rebass";

const Card = styled(Box)`
  border: solid 1px #f5f5f5;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  border-radius: 6px;
`;

Card.defaultProps = {
  p: { sm: 0, md: 3 }
};

export default Card;

