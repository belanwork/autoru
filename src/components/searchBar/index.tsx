import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { configInterface, docsInterface } from 'store/reducers/soleReducer';
import { setSearchData, setSearchDataAction } from '../../store/actions';
import { rootState } from '../../store/reducers';
import s from './style.scss';

type Props = {
  config: configInterface,
  setSearchData : (value: docsInterface) => setSearchDataAction,
}


const SearchBar = (props: Props) => {
  const { setSearchData, config } = props;
  const { searchWaitBeforeRequestTimeout, searchBadRequestTimeout, searchUrl } = config;
  const [searchBarValue, setSearchBarValue] = useState('');
  const [delayedValue, setDelayedValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const initRequest = setTimeout(() => {
      if (searchBarValue) {
        console.log('Прошла 1 секунда, запускаю поиск');
        setDelayedValue(searchBarValue);
      }
    }, searchWaitBeforeRequestTimeout);
    return () => {
      clearTimeout(initRequest);
    };
  },[searchBarValue]);

  useEffect(() => {
    if (delayedValue) {
      const controller = new AbortController();
      const { signal } = controller;
      const url = `${searchUrl}${searchBarValue}&page=1`;
      let badRequest : ReturnType<typeof setTimeout>;
      new Promise((resolve,reject) => {
        fetch(url, {
          signal
        })
          .then((res) => {
            clearTimeout(badRequest);
            if (res.ok) {
              console.log('REQUEST OK!');
              return res.json();
            }
            return Promise.reject(new Error('Bad connection'));
          })
          .then((json) => resolve(setSearchData(json)))
          .catch((e) => {
            reject(new Error('ABORT KEK W!'));
          });
        badRequest = setTimeout(() => {
          console.log('bad request');
          controller.abort();
          reject(`Time is over ${searchBadRequestTimeout}`);
        }, searchBadRequestTimeout);
      })
        .catch((e) => {
          debugger;
          console.error(e);
          setErrorMessage(e);
        });
      return () => {
        console.log('Abort request! RERENDER');
        clearTimeout(badRequest);
        controller.abort();
      };
    }
  },[delayedValue]);
  return (
    <div className={s.componentBox}>
      <input
        type="text"
        value={searchBarValue}
        onChange={(e) => {
          setSearchBarValue(e.currentTarget.value);
        }}
        className={s.input}
      />
      <button
        onClick={() => {
          console.log(searchBarValue);
          setDelayedValue(searchBarValue);
        }}
        className={s.button}
      >SEARCH</button>
      {errorMessage && <div>
        {errorMessage}
      </div>}
    </div>
  );
};

const mapStateToProps = (store:rootState) => {
  const { config } = store.soleReducer;
  return {
    config
  };
};

const mapDispatchToProps = {
  setSearchData: (value: string) => (setSearchData(value)),
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
