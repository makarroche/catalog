## Getting Started

Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000] with your browser to see the result.


## Tech Stack
I decided to use React and Next.js for the project. I have a lot of experience with this stack and I think it's the best choice for this project, since it allows me to create a modern and responsive UI with ease.

## Comments

- I used some Framer motion for animations.
- There aren't many loading states because the app is basic, but should there be async data, I would add loading states for feedback.
- Pagination will have to be more robust once more movies are added
- I focused on mobile and dekstop responsiveness, tablet needs a bit of work
- Error handling is basic, but should there be async data, I would add error handling for feedback.
- Lazy loading is implemented for images
- I added tests for the Card component, they can be run with `npm test`