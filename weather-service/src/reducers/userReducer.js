const initialStateUser = {
  name: "",
  password: "",
};
// reducer for user
const UserReducer = (state = initialStateUser, action) => {
  console.log("UserReducer: action", action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        state: action.payload,
      };
    default:
      return state;
  }
};

export { initialStateUser, UserReducer };
