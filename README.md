This is a starter template for [Learn Next.js](https://nextjs.org/learn).# NextJs
## Installation
First I create new Next.js app using create-next-app, which sets up everything automatically:
After the installation is complete, Install next, react and react-dom in my project using npm install next react react-dom
Afther that install  JSON Server using npm install -g json-server
Install concurrently using npm install concurrently command
add "serve": "concurrently \"npm run dev\" \"npm run mock\"" and "mock": "json-server -w db.json -p 4000 -d 450"command in package.json file
## Usage
Create JSON server ,create database db.json file
After that create layout.js component and fetch data from server using fetch("http://localhost:4000/posts") and render articles,then add layout.module.css file and give design.
Then create postdata.js component for form create and import form.module.css,and give design.
finaly run my project using npm run serve command.
