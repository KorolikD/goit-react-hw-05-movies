import male from '../img/male.jpg';
import female from '../img/female.jpg';

export const imgLincByGender = (pathToImg, gender) => {
  return pathToImg !== null
    ? `https://image.tmdb.org/t/p/w500${pathToImg}`
    : `${gender === 1 ? female : male}`;
};
