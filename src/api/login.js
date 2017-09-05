const { IN } = window;

export default () => new Promise((resolve, reject) => {
  IN.User.authorize(() => {
    IN.API.Raw('/people/~').result(resolve).error(reject);
  });
});
