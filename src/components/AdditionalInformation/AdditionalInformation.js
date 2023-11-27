import { RiArrowRightSLine } from 'react-icons/ri';
import { Container, LinkWraper, NavLink } from './AdditionalInformation.styled';

export const AdditionalInformation = () => {
  return (
    <>
      <h3>Additional Information</h3>
      <Container>
        <LinkWraper>
          <RiArrowRightSLine />
          <NavLink to={'cast'}>Cast</NavLink>
        </LinkWraper>
        <LinkWraper>
          <RiArrowRightSLine />
          <NavLink to={'reviews'}>Reviews</NavLink>
        </LinkWraper>
      </Container>
    </>
  );
};
