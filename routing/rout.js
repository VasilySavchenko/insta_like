export const APP_ROUTES = [
  {
    id: 'sign-in',
    url: '/sign-in',
    page: mainPaige,
    title: 'Sign In | Instagram',
  },
  {
    id: 'home',
    url: '/',
    page: {
      render() {
        console.log('Rendered Home');
      },
      remove() {
        console.log('Removed Home');
      },
    },
    title: 'Home | Instagram',
  },
];
