<!-- @@@ author _vee -->
<!-- 01/11/22 -->

# Simple Crude App For Learning Data Flow Between Client ->Api->Db

//This is a simple learning project for Amnate Tech Interns

This is a small project to illustrate the communitcation between a client , the server and the database

The front end we will use svelte.

We will create a simple todo app, that has the ability to persist data in a database

On the backend we will use Express and prisma (ORM) to access the database

To reduce complexity of the api, we will forego prisma and use mysqli connector directly

Db we use mysql.

## Server Side (Express + Mysl)

On the server side we have our Api which acts as the middle between the client (Front) and the Back (Model)/Database
Most business logic is performed here, data is processed here before it is persisted to the db or sent to the client.

Process
We design the database schema and set up the actual database (Simply put we create our database as per the requirements)

Design the api, as per the the system requirements

Create the api,(Backend) to server and the controller.

- Set up the express server
- create the routes (eg) in routes/ we create todos as the actual route  

### Examples

- so to view to do's we visit      /todos
- create we post to                /todos
- to view one todo we get from      /todos/{todo-one}
- to delete to do we post to /todos/delete/{todo}  

Restful api conventions state that routes be based our the resources being acted on, we can think
of these resources as system entities (think objects in oop, stuff with properties and methods), examples include .. users,transactions,todos, houses,admins, logins etc.

create an express server and expose the routes to , view, create update and delete todos

### Setup

Use express generator

```javascript
npx express-generator

// navigate in the app and install the modules
// npm
npm install 

// yarn
yarn install

```

Install the Some Other modules eg

```js
//cors - (This is to allow cross origin requests) given 
//we have the api and the client on different servers. 
yarn add cors

yarn add mysql
```

#### Db Exports

Databse files are xported in db folder

### development (sever)

in routes/todo.js we define our endpoints

```js
// get all todos
router.get('/',(req,res)=>{

    // get all the todos from the db and send them to the client
})


// add one todo
router.post('/',(req,res)=>{

    let {todoDetails}=req.body

    // check if to do exists

    if(exists){

        // return message with exists
    }else{


        // insert todo in the db
    }
})



// update one todo
router.post('/update/:todoId',(req,res)=>{

    let {todoDetails}=req.body

    let todoId=req.params;


    if(exists){

        // update todo
    }
})



// delete one todo
router.post('/delete/:todoId',(req,res)=>{

    let {todoDetails}=req.body

    let todoId=req.params;


    // check if to do exists

    if(exists){

        // delete todo
    }
})



```

## Client Side (Svelte App)

Here we set up a vite-svelte app that will serve as the client
One might ask why we dont use sveltekit. Sveltekit being a fullstack framework would be limiting the number
of frontend tools to explore

## setup

``` js

    // get vite 
    npm create vite@latest

    // select y to procees
    // select project name
    // choose svelte
    // chose javascript


    // cd into the project 
    //install the packages
    yarn install 

    //install some extra packages
    yarn add axios // to perfrom fetch reqs, (we can use native fetch)
    
    yarn add svelte-navigator // for client side routing

    // run the dev server
    // npm
    npm run dev 

    // yarn 
    yarn run dev

```

once the set up is complete we can navigate to the browser and check the running client.

### development (client)

Folder Structure

``` html
  
  <!-- most of our code will be  inside the src folder-->
  -> src
    -> routes <!--Client Side Routes-->
        -> Home.svelte <!--Home Route-->
        -> Todos.svelte <!--Home Route-->

    -> components <!--Client Side Routes-->
        ->Todos.svelte    <!--Todo List Component-->
        ->Todo.svelte    <!-- Todo Component-->


    -> config  <!--This is a config folder will all the confif files -->

        <!--We could use environment variables but its easier exporting a var--> 
        ->api.config.js  <!--This file will have all the config related to the api eg urls-->
```
