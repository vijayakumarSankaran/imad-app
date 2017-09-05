var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    
   'article-one':{
    title: 'Article-one | Vijay First Article' ,
    heading: 'Article one',
    content: `
             <p>
                This is my first article This is my first article This is my first article
                This is my first article This is my first article This is my first article
            </p>
            <p>
                This is my first article This is my first article This is my first article
                This is my first article This is my first article This is my first article
            </p>
            <p>
                This is my first article This is my first article This is my first article
                This is my first article This is my first article This is my first article
            </p> `
            
   },
   'article-two':{
    title: 'Article-two | Vijay Second Article' ,
    heading: ' Article two',
    content: `
              <p>
                This is my Second article!!!
            </p>
            `
   },
   'article-three':{
    title: 'Article-three | Vijay Third Article' ,
    heading: ' Article three',
    content: `
              <p>
                This is my Third article!!!
            </p>
          `  
   }
};
function createTemplate(data)
{
    
var title= data.title;
var heading= data.heading;
var content= data.content;
var htmlTemplate = `
<html>

<head>
    <title>
        ${title}
    </title>
    <meta name="viewport" content="width=device=width , initial-scale=1">
   <link href="/ui/style.css" rel="stylesheet" />
    </head>  

    <body>
    <div class ="container">   
        <div>
            <a href="/">Home</a>
        </div>
        <h3>
            ${heading}
        </h3>
        <div>
        ${content}
        </div>
    </div>    
    </body>
</html>

`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter= 0;
app.get('/counter', function (req, res) {
    counter= counter+1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
    //articleName=articel-one,article-two,article-three
    //
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var names = [];
app.get('/submit-name',function(req,res) {
    var name = req.params.name;
    names.push(name);
    //JSoN JavaScript oBject Notification (JavaScript object converted into String)
    res.send(JSON.stringify(names));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
