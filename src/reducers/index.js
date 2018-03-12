const initialState = {
  john: 0,
  paul: 0,
  george: 0,
  ringo: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_JOHN':
      console.log("John!");
      return Object.assign({}, state, {
        john: state.john + 1
      })

    case 'VOTE_PAUL':
      console.log("Paul!");
      return Object.assign({}, state, {
        paul: state.paul + 1
      })

    case 'VOTE_GEORGE':
      console.log("George!");
      return Object.assign({}, state, {
        george: state.george + 1
      })

    case 'VOTE_RINGO':
      console.log("Ringo!");
      return Object.assign({}, state, {
        ringo: state.ringo + 1
      })

    default:
      return state

  }
}
