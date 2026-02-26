# Source code of my personal website built with React and SCSS.

## Procedure to run:
### Please clone the repo first
### Then navigate to the directory

In the project directory, first run: `npm install`
Then run: `npm start`

This will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

For testing: `npm test`

## Procedure to deploy:
## Open [Vercel](https://vercel.com/signup)
### Deploy using the dashboard

- Click Continue under From Git Repository.
- Click Install Now For GitHub and you’ll be prompted to install Vercel for GitHub.
- Click Import Project from GitHub.
- Click Import and write your project name.
- Choose root directory.
- As we have created our app using create-react-app, Vercel will auto-detect the suitable configuration.
- Click Deploy
* BINGO!

## SEO (so "Waqar Shahid" shows up in search)

The site includes meta tags, Open Graph, Twitter Cards, JSON-LD (Person schema), `robots.txt`, and `sitemap.xml`.

**After deploy:**

1. **Set your real URL**  
   Replace `https://waqarshahid.vercel.app` with your actual Vercel URL (e.g. `https://your-project.vercel.app`) or custom domain in:
   - `public/index.html` (canonical, og:url, og:image, twitter:image, JSON-LD)
   - `public/robots.txt` (Sitemap line)
   - `public/sitemap.xml` (`<loc>`)

2. **Google Search Console**  
   - Go to [Google Search Console](https://search.google.com/search-console).  
   - Add your property (your site URL).  
   - Submit your sitemap: `https://your-site.com/sitemap.xml`.


# Contact
-------

* GitHub ([mwaqarshahid](http://github.com/mwaqarshahid))
* LinkedIn ([Waqar Shahid](https://www.linkedin.com/in/waqarshahid/))
* Email ([waqar-shahid@hotmail.com](mailto:waqar-shahid@hotmail.com))

Made with ❤️ by Waqar Shahid from Pakistan.
