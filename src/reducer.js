export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDwr9V-lNOl7WZoZRRq-UAAbmx8pTJXMqBNPnBu8pmgFOhZ7sKoq2TrlmF7nquCwX85HyIYJxmrqG31ZyuGBVRCNVZjyRRGtOzMOoBqfOspIKXgIPMdPMU3f9H9iIoASrPzPnprFp-6O7tMIO8E3gOGp31Bt_Gc5yPKWQnAP_TlFs57",
};
export var reducer = (state, action) => {
  console.log(action);

  // Action => type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
