Practice MVC (Model View Controller)

Refrence : https://github.com/bali-dev-camp/03-mvc

Step-Step

1.) Install project dependencies
`npm install`

2.) Whenever you make changes to your database that are reflected in the Prisma schema, you need to manually re-generate Prisma Client to update the generated code in the node_modules/.prisma/client directory and update the `migration`:
`npx prisma generate`
`npx prisma migrate dev`
`npm run seed`
