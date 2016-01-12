var Hello = React.createClass({
	handleClick: function(e) {
		console.log(e  );
	},
	render: function() {
		return (
			<h1 onClick={this.handleClick}>Hello, React!</h1>
		)
	}
})

var ExampleList = React.createClass({
	clickHandler: function() {
		console.log( "ExampleList!" );
	},
	render: function() {
		return (
			<div className="starter-kit" onClick={this.clickHandler}>
				<h2>starter kit from React official</h2>
				<ul>
					<li><a target="_blank" href="/react-0.14.6/examples/basic">basic</a></li>
					<li><a target="_blank" href="/react-0.14.6/examples/basic-click-counter">basic-click-counter</a></li>
					<li><a target="_blank" href="/react-0.14.6/examples/basic-commonjs">basic-commonjs</a></li>
					<li><a target="_blank" href="/react-0.14.6/examples/basic-jsx">basic-jsx</a></li>
					<li><a target="_blank" href="/react-0.14.6/examples/basic-jsx-external">basic-jsx-external</a></li>
					<li><a target="_blank" href="/react-0.14.6/examples/basic-jsx-harmony">basic-jsx-harmony</a></li>
					<li><a target="_blank" href="/react-0.14.6/examples/basic-jsx-precompile">basic-jsx-precompile</a></li>
					<li><a target="_blank" href="/react-0.14.6/examples/jquery-bootstrap">jquery-bootstrap</a></li>
					<li><a target="_blank" href="/react-0.14.6/examples/jquery-mobile">jquery-mobile</a></li>
				</ul>
			</div>
		)
	}
})

var YutaReactSample = React.createClass({
	render: function() {
		return (
			<div className="yuta-react-sample">
				<h2>Yuta Demo</h2>
				<ul>
					<li><a href="/demo01.php">demo01(layout)</a></li>
				</ul>
			</div>
		)
	},
})

var IndexContent = React.createClass({
	render: function() {
		return (
			<div className="index-content">
				<Hello />
				<YutaReactSample />
				<ExampleList />
			</div>
		)
	}
})

ReactDOM.render(
	<IndexContent />,
	document.getElementById('example')
)
