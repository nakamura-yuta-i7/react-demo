require("./demo01.scss")

var Nav = React.createClass({
	render: function() {
		require("./main-nav.scss")
		return (
			<nav className="main-nav">
				<h2>main-nav</h2>
				<ul>
					<li><a href="/home/">Home</a></li>
					<li><a href="/about/">About</a></li>
					<li><a href="/contact/">Contact</a></li>
					<li><a href="/help/">Help</a></li>
				</ul>
			</nav>
		)
	},
})

var Layout = React.createClass({
	render: function() {
		return (
			<div className="layout">
				<header>
					<div className="site-logo" data-yuta="nakamura" style={{color:"red"}}>logo</div>
					<div className="site-name">site name</div>
				</header>
				<Nav />
				<aside>
					side panel
				</aside>
				<article>
					<section>
						<h1>main-content</h1>
						<p>このエリアはこのページの本文が入ります。</p>
					</section>
				</article>
				<footer>
					footer
				</footer>
			</div>
		)
	},
})

ReactDOM.render(
	<Layout />,
	document.getElementById('app')
)
