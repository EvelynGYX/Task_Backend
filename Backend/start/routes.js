'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Database = use('Database')

// Route.on('/').render('welcome')
Route.get('/', async () =>{
  return await Database.table('resorts').select('*')
})

Route.get('resorts', 'ResortController.getAll')

Route.post('resorts', 'ResortController.create')

Route.post('users/login', 'UserController.login')

Route.post('users/register', 'UserController.register')

Route.post('history/create', 'HistoryController.create')

Route.get('history/show', 'HistoryController.show')

