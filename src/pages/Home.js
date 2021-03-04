import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setresults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowsSelected = searchOption === 'shows';

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setresults(result);
    });
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSearchBoxChange = ev => {
    setInput(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResult = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }

    if (results && results.length > 0) {
      // Render Shows or Actors
      return results[0].show
        ? results.map(item => <div key={item.show.id}>{item.show.name}</div>)
        : results.map(item => (
            <div key={item.person.id}>{item.person.name}</div>
          ));
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
          value="show"
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
