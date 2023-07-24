# Read Me

Welcome to my website components repository! This component library made to make it easy to build websites and cut development time in half (hopefully)
I use it for my Web Agency (https://loskutech.com) to build websites for my clients. All of the components optimized to reach 100% in Lighthouse and Google PageSpeed Insights.
Why i made this, you may ask? Well, i'm a lazy person and i don't like to write the same code over and over again. So i made this to make my life easier and to help other people to make their life easier too. I don't like to use too many external libraries, so i made this with only React and Next.js.

I have my own animation utility which i use to animate the components, you can find it in the utils folder. It is very simple and using intersection Observer, you can use it with server side rendering too, you can find docs in the file. You can find it in "./lib/utils/AnimateOnView.js"

I'm planning to add more components and sections in the future, so stay tuned!
I hope you enjoy it and find it useful!

## Getting Started

To get started you can clone this repository and install the dependencies

```bash
    git clone [this repository]
    cd [this repository]
    npm install

```

To use the components and sections you can import them from the components folder

```javascript
import { Button } from "../lib/components/Button";
import { Hero } from "../lib/sections/Hero";
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
