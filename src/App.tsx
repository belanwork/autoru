import React from 'react';
import s from './style.scss';
import SearchBar from './components/searchBar';
import SearchContent from './components/SearchContent';
import { connect } from 'react-redux';
import { rootState } from 'store/reducers';
import { responseInterface } from 'store/reducers/soleReducer';

type Props = {
  searchData : Array<responseInterface>,
}

const App = (props : Props) => {
  const { searchData } = props;
  return (
    <div className={s.componentContainer}>
      <header className={s.header}>
        <SearchBar/>
      </header>
      {Boolean(searchData.length) && <main className={s.main}>
        <SearchContent/>
      </main>
      }
    </div>
  );
};

const mapStateToProps = (store:rootState) => {
  const { searchData } = store.soleReducer;
  return {
    searchData
  };
};

export default connect(mapStateToProps)(App);
