import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setresults] = useState(null);

  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
      setresults(result);
    });
  };

  const renderResult = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }

    if (results && results.length > 0) {
      return results.map(item => (
        <div key={item.show.id}>{item.show.name}</div>
      ));
    }

    return null;
  };

  const onSearchBoxChange = ev => {
    setInput(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onSearchBoxChange}
        value={input}
        onKeyDown={onKeyDown}
      />
      <button type="button" onClick={onSearch}>
        Click Me
      </button>

      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;
