#Server Side
Create initial folder and package.json

mkdir server
cd server
npm init --yes

npm install express mongoose cors mongodb dotenv graphql-http graphql ruru --save
npm install -D typescript ts-node-dev @types/express @types/cors

Generating tsconfig.json
npx tsc --init

Watching file changes and build directory
npm install -D nodemon
