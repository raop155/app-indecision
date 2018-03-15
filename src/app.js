console.log('App.js is running!');

//create app object
var app = {
	'title': 'Titulo',
	'subtitle': 'Subtitulo'
};

// JSX - Javascript XML
var template = (
	<div>
		<h1>{app.title}</h1>
		<p>{app.subtitle}</p>
	</div>
);

var user = {
	name: 'Ricardo',
	age: '27',
	location: 'Lima'
};

var templateTwo = (
	<div>
		<h1>{user.name}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
//ReactDOM.render(templateTwo, appRoot);