## Static Site Generation

If a page uses Static Generation, the page HTML is generated at build time. That means in production, the page HTML is generated when you run next build. This HTML will then be reused on each request. It can be cached by a CDN.

## Why?

If you use static site generation, you can defer the expensive operation of rendering a page to the build time so it only happens once. 

## How?

Let’s say you have an endpoint that gives you all the global todos of an app.

By global todos  we mean that they are the same for all users, and hence this page can be statically generated.


