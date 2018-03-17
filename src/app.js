console.log('App.js is running!');

//create app object
const app = {
	'title': 'Titulo',
	'subtitle': 'Subtitulo',
	'options': ["One", "Two"]
};

// JSX - Javascript XML
const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
		<ol>
			<li>Item One</li>
			<li>Item Two</li>
		</ol>
	</div>
);

const user = {
	name: 'Ricardo',
	age: '27',
	location: 'Lima'
};

function getLocation(location) {
	if(location) {
		return <p>Location: {location}</p>;
	}
}

const templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
//ReactDOM.render(templateTwo, appRoot);