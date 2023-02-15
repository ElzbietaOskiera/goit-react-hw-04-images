import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchSearchImage = async (searchQuery, page) => {
  const response = await axios.get('/', {
    params: {
      key: '31909320-ece6c66b553ffde1a87f2fdb6',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: page,
    },
  });
  return response.data;
};
