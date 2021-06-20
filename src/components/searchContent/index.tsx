import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { configInterface, docsInterface, responseInterface } from '../../store/reducers/soleReducer';
import { rootState } from '../../store/reducers';
import PageContent from '../pageContent';
import s from './style.scss';

type Props = {
  searchData : Array<responseInterface>,
  config: configInterface,
}

const SearchContent = (props: Props) => {
  const { searchData, config } = props;
  const { coverUrl } = config;

  return (
    <div className={s.componentBox}>
      {searchData.map((page: responseInterface, pageIndex:number) => {
        return (
          <PageContent
            pageData={page}
            pageIndex={pageIndex}
            key={`page-${pageIndex}`}
            coverUrl={coverUrl}
          />);
      })}
    </div>
  );
};

const mapStateToProps = (store:rootState) => {
  const { searchData, config } = store.soleReducer;
  return {
    searchData,
    config
  };
};


export default connect(mapStateToProps)(SearchContent);