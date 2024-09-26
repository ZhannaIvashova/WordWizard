import { StyledMissingText, StyledMissingImg } from './styleMissing';
import error404 from '/images/error404.png';

export function Missing() {
  return (
    <>
      <StyledMissingText>
        <h1>404 Страница не найдена</h1>
      </StyledMissingText>
      <StyledMissingImg src={error404}/>
    </>
  );
}

