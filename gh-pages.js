import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/sutin1234/sveltekit-github-pages.git', // Update to point to your repository
        user: {
            name: 'Thinny By Sveltekit', // update to use your name
            email: 'poly.dev2018@gmail.com' // Update to use your email
        },
        dotfiles: false
    },
    () => {
        console.log('Deploy to github pages Complete!');
    }
);