import { ReactSearchAutocomplete } from 'react-search-autocomplete';

export default function Searchbar() {
  // note: the id field is mandatory
  const items = [
    {
      id: 0,
      name: 'WW1',
    },
    {
      id: 1,
      name: 'WW2',
    },
  ];

  const handleOnSelect = (item) => {
    // the item selected
    // send request with input
    // animate up
    // display timeline
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
        onSelect={handleOnSelect}
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
