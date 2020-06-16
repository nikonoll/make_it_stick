This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

Spinning up the DB
This project uses prisma as ORM and has a dockerized instance of MYSQL hooked up to it. Spin it up by:
```bash
docker-compose -d up
```
See you prisma interface here [http://localhost:4466/_admin](http://localhost:4466/_admin).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Architecture / Setup
### Uses PRISMA for ORM/DB management

Schema is defined in ./datamodel.prisma.
Schema can be updated by running
```bash
prisma deploy
```

### API endpoints
All endpoints are defined in API folder with dynamic routing from next.js.
Example [http://localhost:3000/api/decks](http://localhost:3000/api/decks)