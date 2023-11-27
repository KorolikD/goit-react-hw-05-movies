import { RiArrowRightSLine } from 'react-icons/ri';
import { Container, NavLink } from './AdditionalInformation.styled';

export const AdditionalInformation = () => {
  return (
    <>
      <h3>Additional Information</h3>
      <Container>
        <NavLink to={'cast'}>
          <RiArrowRightSLine />
          Cast
        </NavLink>
        <NavLink to={'reviews'}>
          <RiArrowRightSLine />
          Reviews
        </NavLink>
      </Container>
    </>
  );
};
