//Method #1
// var http = require('http');

// //we're refering to the library
// http.createServer(function(request,response){
// 	response.end('Hello World');
// }).listen(7000);
// //we can use any port but 8000 which is for production

// console.log('Server is running on port 7000');

//Method 2 using express

// var express = require('express'); //express module
// var app = express(); //defininig our app as an instance of express
// var apiRouter = express.Router();
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/article-app');



// var Article = require('./app/models/Article')
// // app.use(function(next){
// // 	console.log('Hey, somebody hit the server')
// // 	next();
// // });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// apiRouter.route('/articles')

// 	.post(function(request, response){
// 		console.log(request.body);
// 		var Article = new Article(request.body);

// 		article.save(function(error) {
// 			if (error) console.log('Could not create b/c:', error);

// 			response.json({message: 'Article succesfully created'});

// 			})
// 	})

// 	.get(articlesController.index);


// apiRouter.route('/article/:article_id')

// 	.get(function(request, response){
// 		var id = request.params.article_id

// 		Article.findById(id, function(error, article){
// 			if (error) console.error('could not find article');

// 			response.json(article);
// 		})
// 	})

// 	.patch(function(request,response){
// 		var id = request.params.article_id;
// 		var data = request.body; 

// 		Article.findById(id, function(error, article){
// 			if (error) console.error('could not update article');

// 			Object.keys(data).forEach(function(key){
// 				article.set(key, data[key]); // set replaces the vale of a field with the specified value
// 			});

// 			article.save(function(error){
// 				if(error) console.error('could not patch');

// 				response.json({message: 'article was succesfully updated'});

// 			});
// 		})
// 	});



// app.get('/', function(request, response){
// 	response.send('whatever you want, i changed the text')
// })

// app.use(apiRouter);

// app.listen(7000);

// console.log('Server is running on port 7000');


// //SAM CODE works better

// var express = require('express')
// // allows you to parse request bodies and use them. Without it you can not set up an API.
// var bodyParser = require('body-parser')
// var mongoose = require('mongoose')
// var articlesController = require('./app/controllers/articlesController')

// var app = express()
// var apiRouter = express.Router()
// // the express router, routes API's
// var Article = require("./app/models/Article")
// // <mongo db protocal>://<host>:<port>/<db name>
// mongoose.connect('mongodb://localhost:27017/article-app')

// // middleware allows us to intercept data between req/res
// // use bodyparser as middleware to handle the req/res
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// apiRouter.route('/articles')
//   // when /articles is hit with a post, handle it with a post.
//   .post()
//   .get(articlesController.index)

// apiRouter.route('/article/:article_id')
//   .get(function (req, res) {
//     var id = req.params.article_id
//     Article.findById(id, function (err, article) {
//       if(err) console.error("Could not find article", err);
//       res.json(article)
//     })
//   })

//   .patch(function (req, res) {
//     var id = req.params.article_id
//     var data = req.body
//     Article.findById(id, function (err, article) {
//       if(err) console.error("Could not update article", err);

//       Object.keys(data).forEach(function (key) {
//         article.set(key, data[key])
//       })
//       article.save(function (err) {
//         if(err) console.error("could not patch");
//         res.json({ message: "article successfully updated" })
//       })
//     })
//   })
// app.listen(3000)
// app.use(apiRouter)



// console.log("listening on 3000");

//KATE code actually..

var express = require('express'); // express module
var app = express(); // defining our app as an instance of express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./app/config/config');
var environmentSettings = config();

mongoose.connect(environmentSettings.db)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var apiRouter = require('./app/config/routes')
app.use(apiRouter);

app.listen(7000);

console.log('Server is running on port 7000');