import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/SamGrah/personal-site.git', // Update to point to your repository
    user: {
      name: 'Sam Graham', // update to use your name
      email: 'segrah@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);