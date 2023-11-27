import { useRef } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import { LinkOnBtn } from './GoBackBtn.styled';

export const GoBackBtn = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <LinkOnBtn to={backLinkHref.current}>
      <IoChevronBack />
      Go back
    </LinkOnBtn>
  );
};
