module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  plugins: ['jest'],
  rules: { //Я так понимаю, что в обновлении уже нет этого правила ?!
    'standard/no-callback-literal': 0,
}
};
