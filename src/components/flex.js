import styled from 'styled-components';
import {
  flexWrap,
  flexDirection,
  alignSelf,
  space,
  color,
  width,
  fontSize,
  position,
  height,
  minWidth,
  maxWidth,
  alignItems,
  alignContent,
  justifyContent,
  justifySelf,
  textAlign
} from 'styled-system';

const Flex = styled.div(
  {
    display: 'flex'
  },
  space,
  color,
  width,
  fontSize,
  position,
  height,
  minWidth,
  maxWidth,
  flexWrap,
  alignSelf,
  flexDirection,
  alignItems,
  alignContent,
  justifyContent,
  justifySelf,
  textAlign
);

Flex.displayName = 'Flex';

Flex.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center'
};

export default Flex;

// Flex.propTypes = {
//   ...flexWrap.propTypes,
//   ...flexDirection.propTypes,
//   ...alignItems.propTypes,
//   ...justifyContent.propTypes
// }
