import axios from 'axios';

// Fetch Data
const getData = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const { data } = await axios.get(url);
  return data;
};

const longStringFromData = arrayOfData => {
  // Create string that interpolats all titles of each into this way

  // 1 . 1st leter of each todo
  // 2. Then second letterof each todo...etc...
  // Include WS
  const stringCache = {};
  arrayOfData.reduce((acc, cur) => {
    for (let i = 0; i < cur.title.length; i += 1) {
      if (!acc[i]) {
        acc[i] = cur.title[i];
      }
      acc[i] += cur.title[i];
    }
    return acc;
  }, stringCache);
  return Object.values(stringCache).join('');
};

const processData = async () => {
  // Untrue and divis by 7 & useriD & even
  const data = await getData();
  const response = data.filter(
    todo =>
      todo.completed === false && todo.id % 7 === 0 && todo.userId % 2 === 0
  );
  const stringedTitles = longStringFromData(response);
  return stringedTitles;
};

processData().then(data => console.log(data));
