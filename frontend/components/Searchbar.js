import { ReactSearchAutocomplete } from 'react-search-autocomplete';

export default function Searchbar() {
  // note: the id field is mandatory
  const items = [
    {
      id: 0,
      name: 'WW2',
    },
    {
      id: 1,
      name: 'WW1',
    },
    {
      id: 2,
      name: 'Basic',
    },
    {
      id: 3,
      name: 'PHP',
    },
    {
      id: 4,
      name: 'Java',
    },
  ];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log('Focused');
  };

  const formatResult = (item) => {
    return (
      <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
    );
  };

  return (
    <div style={{ width: 400, margin: 'auto' }}>
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
        formatResult={formatResult}
        styling={{
          border: '8px solid #421648',
          borderRadius: '35px',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          hoverBackgroundColor: 'rgba(255, 255, 255, 0.6)',
          iconColor: '#421648',
        }}
        // showIcon={false}
        showNoResults={false}
        showNoResultsText={false}
      />
    </div>
  );
}
