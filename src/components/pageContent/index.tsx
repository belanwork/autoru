import React, { useEffect } from 'react';
import { docsInterface, responseInterface } from '../../store/reducers/soleReducer';
import BookContent from '../bookContent';
import s from './style.scss';

type Props = {
    pageData: responseInterface,
    pageIndex: number,
    coverUrl: string,
}

const PageContent = (props: Props) => {
  const { pageData, pageIndex, coverUrl } = props;
  const { docs } = pageData;
  return (
    <div className={s.componentBox}>
      {docs.map((book: docsInterface, bookIndex:number) => {
        return (
          <BookContent
            key={`page-${pageIndex}-${bookIndex}`}
            bookData={book}
            coverUrl={coverUrl}
          />);
      })}
    </div>
  );
};


export default PageContent;