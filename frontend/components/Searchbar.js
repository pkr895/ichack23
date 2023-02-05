import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { motion } from 'framer-motion';
import { useState } from 'react';

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

  const [eventSelected, setEventSelected] = useState(false)

  const handleOnSelect = (item) => {
    setEventSelected(true)
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
    <motion.div style={{ width: 400, margin: 'auto' }} animate={eventSelected ? { y: '-45vh' } : {y: 0 }}
    transition={{ ease: "easeOut", duration: 2 }}>
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
    </motion.div>
  );
}
