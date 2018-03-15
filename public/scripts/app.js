'use strict';

console.log('App.js is running!');

//create app object
var app = {
	'title': 'Titulo',
	'subtitle': 'Subtitulo'
};

// JSX - Javascript XML
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	React.createElement(
		'p',
		null,
		app.subtitle
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item One'
		),
		React.createElement(
			'li',
			null,
			'Item Two'
		),
		React.createElement(
			'li',
			null,
			'Item Three'
		)
	)
);

var user = {
	name: 'Ricardo',
	age: '27',
	location: 'Lima'
};

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name
	),
	React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		user.location
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
//ReactDOM.render(templateTwo, appRoot);
