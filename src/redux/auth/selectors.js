export const selectUserData = (state) => state.auth.userData;
export const selectUserDataIsLoading = (state) => state.auth.isLoading;
export const selectUserDataError = (state) => state.auth.error;
export const selectUserDataIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserDataIsRefreshing = (state) => state.auth.isRefrashing;
export const selectUserDataToken = (state) => state.auth.token;
