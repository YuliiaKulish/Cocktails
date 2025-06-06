import { letters } from '../letters';

export const markup = letters
  .map(
    letter =>
      /*Html */`<li class='hero__item'><button class='hero__btn' type='button'>${letter}</button></li>`
  )
  .join('');