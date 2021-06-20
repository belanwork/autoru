import React, { useEffect } from 'react';
import { docsInterface } from '../../store/reducers/soleReducer';
import s from './style.scss';
import noImage from './no-image.png';

type Props = {
    bookData: docsInterface,
    coverUrl: string,
}

const BookContent = (props: Props) => {
  const { bookData, coverUrl } = props;
  const { title, cover_i, author_name } = bookData;
  return (
    <div className={s.componentBox}>
      <div className={s.imgBox}>
        <div
          className={s.img}
          style={{
            backgroundImage: cover_i ? `url(${coverUrl}id/${cover_i}-M.jpg)` : `url(${noImage})`
          }}
        >
        </div>
      </div>
      <div className={s.infoBox}>
        <div className={s.infoTitle}>
          <p className={s.infoTitleHeaderStart}>&#60;Title&#62;</p>
          <p className={s.infoTitleValue}>{title}</p>
          <p className={s.infoTitleHeaderEnd}>&#60;&#47;Title&#62;</p>
        </div>
        <div className={s.infoAuthor}>
          <p className={s.infoAuthourHeaderStart}>&#60;Authour&#62;</p>
          <p className={s.infoAuthourValue}>{author_name}</p>
          <p className={s.infoAuthourHeaderEnd}>&#60;&#47;Authour&#62;</p>
        </div>
      </div>
    </div>
  );
};


export default BookContent;