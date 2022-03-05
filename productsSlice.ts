import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      {
        id: 1,
        name: 'Bread',
        price: 1,
        quantity: 5,
        subProducts: [
          {
            id: 2,
            name: 'Flavour',
            price: 2,
            quantity: 2,
          },
        ],
      },
      {
        id: 3,
        name: 'Biere',
        price: 2,
        quantity: 10,
        subProducts: [
          {
            id: 4,
            name: 'Water',
            price: 0,
            quantity: 5,
          },
        ],
      },
    ],
  },
  reducers: {},
});

export default counterSlice.reducer;
