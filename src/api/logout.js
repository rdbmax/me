const { IN } = window;

export default () => new Promise((resolve) => {
  IN.User.logout(resolve);
});
