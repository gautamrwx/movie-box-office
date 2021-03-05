import React, { useState } from 'react';
import ActorGrid from '../components/Actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';

const Home = () => {
  const [input, setInput] = useLastQuery();
  const [results, setresults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowsSelected = searchOption === 'shows';

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setresults(result);
    });
  };

  const onSearchBoxChange = ev => {
    setInput(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const renderResult = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }

    if (results && results.length > 0) {
      // Render Shows or Actors
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }

    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onSearchBoxChange}
        value={input}
        onKeyDown={onKeyDown}
      />

      <label htmlFor="shows-search">
        Shows
        <input
          id="shows-search"
          type="radio"
          value="shows"
          checked={isShowsSelected}
          onChange={onRadioChange}
        />
      </label>

      <label htmlFor="actors-search">
        Actors
        <input
          id="actors-search"
          type="radio"
          value="people"
          checked={!isShowsSelected}
          onChange={onRadioChange}
        />
      </label>

      <button type="button" onClick={onSearch}>
        Click Me
      </button>

      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;
