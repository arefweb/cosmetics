
function reducer(state , action) { 
  switch (action.type) {
    case "ADD_TO_CART":
      let itemToAdd = state.cartItem.find((item) => {
        return item.id === action.payload.id;
      });
      if (!itemToAdd) {
        return {
          ...state,
          cartItem: [...state.cartItem, action.payload],
          total: parseFloat(state.total) + parseFloat(action.payload.price),
          count: parseInt(state.count) + parseInt(action.payload.itemCount),
        };
      } else {
        itemToAdd.itemCount += 1;
        const totalValues = state.cartItem.reduce(
          (sum, item) => {
            let calcCount = sum.count + item.itemCount;
            let calcTotal = sum.total + item.itemCount * item.price;
            return { total: calcTotal, count: calcCount };
          },
          { total: 0, count: 0 }
        );
        return {
          ...state,
          count: totalValues.count,
          total: totalValues.total,
        };
      }

    case "INCREMENT":
      let itemToIncrement = state.cartItem.find((item) => {
        return item.id === action.payload;
      });
      if (itemToIncrement) {
        itemToIncrement.itemCount += 1;
        const totalValues = state.cartItem.reduce(
          (sum, item) => {
            let calcCount = sum.count + item.itemCount;
            let calcTotal = sum.total + item.itemCount * item.price;
            return { total: calcTotal, count: calcCount };
          },
          { total: 0, count: 0 }
        );
        return {
          ...state,
          count: totalValues.count,
          total: totalValues.total,
        };
      }
      return state ;

    case "DECREMENT":
      let itemToDecrement = state.cartItem.find((item) => {
        return item.id === action.payload;
      });
      if (itemToDecrement) {
        if (itemToDecrement.itemCount > 1) {
          itemToDecrement.itemCount -= 1;
          const totalValues = state.cartItem.reduce(
            (sum, item) => {
              let calcCount = sum.count + item.itemCount;
              let calcTotal = sum.total + item.itemCount * item.price;
              return { total: calcTotal, count: calcCount };
            },
            { total: 0, count: 0 }
          );
          return {
            ...state,
            count: totalValues.count,
            total: totalValues.total,
          };
        }
      }
      return state ;

    case "REMOVE":
      let itemToRemove = state.cartItem.find((item) => {
        return item.id === action.payload;
      });
      if (itemToRemove) {
        itemToRemove.itemCount = 0;
        const totalValues = state.cartItem.reduce(
          (sum, item) => {
            let calcCount = sum.count + item.itemCount;
            let calcTotal = sum.total + item.itemCount * item.price;
            return { total: calcTotal, count: calcCount };
          },
          { total: 0, count: 0 }
        );
        const removed = state.cartItem.filter((item) => {
          return item.id != action.payload;
        });
        return {
          ...state,
          cartItem: [...removed],
          count: totalValues.count,
          total: totalValues.total,
        };
      } 
      return state;

    default:
      return state;
  }
}

export default reducer;