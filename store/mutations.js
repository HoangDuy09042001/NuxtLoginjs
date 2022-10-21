export default {
    changeStatus(state, newState) {
      state.status = newState;
      console.log(state.status);
    },
    changeInfor(state, newInfor) {
      if (state.status === "success") {
        state.userInfor = newInfor;
        console.log(state.userInfor);
      }
    },
  }