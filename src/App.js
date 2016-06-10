/* =============================================== */
/* Lesson 1: React Router: Router, Route, and Link */

// import React from 'react';
// import { Router, Route, Link, hashHistory } from 'react-router';

// const Home = () => <div><h1>Home</h1><Links /></div>;
// const About = () => <div><h1>About</h1><Links /></div>;
// const Contact = () => <div><h1>Contact</h1><Links /></div>;

// const Links = () => 
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
//     <Link to="/contact">Contact</Link>
//   </nav>

// export default class App extends React.Component {
//   render(){
//     return (
//       <Router history={ hashHistory }>
//         <Route path="/" component={Home}></Route>
//         <Route path="/about" component={About}></Route>
//         <Route path="/contact" component={Contact}></Route>
//       </Router>
//     );
//   }
// };


/* ===================================================== */
/* Lesson 2: React Router: hashHistory vs browserHistory */

// import React from 'react';
// import { Router, Route, Link, browserHistory } from 'react-router';

// const Home = () => <div><h1>Home</h1><Links /></div>;
// const About = () => <div><h1>About</h1><Links /></div>;
// const Contact = () => <div><h1>Contact</h1><Links /></div>;

// const Links = () => 
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
//     <Link to="/contact">Contact</Link>
//   </nav>

// export default class App extends React.Component {
//   render(){
//     return (
//       <Router history={ browserHistory }>
//         <Route path="/" component={Home}></Route>
//         <Route path="/about" component={About}></Route>
//         <Route path="/contact" component={Contact}></Route>
//       </Router>
//     );
//   }
// };


/* ===================================================== */
/* Lesson 3: React Router: activeStyle vs activeClassName */

// import React from 'react';
// import { Router, Route, Link, hashHistory } from 'react-router';

// const Home = () => <div><h1>Home</h1><Links /></div>;
// const About = () => <div><h1>About</h1><Links /></div>;
// const Contact = () => <div><h1>Contact</h1><Links /></div>;

// const Links = () => 
//   <nav>
//     <Link activeStyle={{color: 'green'}} to="/">Home</Link>
//     <Link activeStyle={{color: 'green'}} to="/about">About</Link>
//     <Link activeClassName="active" to="/contact">Contact</Link>
//   </nav>  

// export default class App extends React.Component {
//   render() {
//     return (
//       <Router history={ hashHistory }>
//         <Route path="/" component={Home}></Route>
//         <Route path="/about" component={About}></Route>
//         <Route path="/contact" component={Contact}></Route>
//       </Router>
//     );
//   }
// };


/* ===================================================== */
/* Lesson 4: React Router: Nested Routes */

// import React from 'react';
// import { Router, Route, Link, hashHistory } from 'react-router';

// const Home = (props) => <div><h1>Home</h1><Links />{props.children}</div>;
// const About = (props) => <div><h1>About</h1>{props.children}</div>;
// const Contact = () => <div><h1>Contact</h1></div>;

// const Links = () => 
//   <nav>
//     <Link activeStyle={{color: 'green'}} to="/">Home</Link>
//     <Link activeStyle={{color: 'green'}} to="/about">About</Link>
//     <Link activeClassName="active" to="/about/contact">Contact</Link>
//   </nav>  

// export default class App extends React.Component {
//   render() {
//     return (
//       <Router history={ hashHistory }>
//         <Route path="/" component={Home}>
//         	<Route path="about" component={About}>
// 		        <Route path="contact" component={Contact}></Route>
//         	</Route>
//         </Route>
//       </Router>
//     );
//   }
// };


/* ===================================================== */
/* Lesson 5: React Router: IndexRoute */

// import React from 'react';
// import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

// const Home = (props) => <div><h1>Home</h1><Links />{props.children}</div>;
// const About = () => <div><h1>About</h1></div>;
// const Contact = () => <div><h1>Contact</h1></div>;

// const Links = () => 
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
//     <Link to="/contact">Contact</Link>
//   </nav>  

// export default class App extends React.Component {
//   render() {
//     return (
//       <Router history={ hashHistory }>
//         <Route path="/" component={Home}>
//         	<IndexRoute component={About}></IndexRoute>
// 		      <Route path="contact" component={Contact}></Route>
//         </Route>
//       </Router>
//     );
//   }
// };


/* ===================================================== */
/* Lesson 6: React Router: Route Parameters */

// import React from 'react';
// import { Router, Route, Link, hashHistory } from 'react-router';

// const Message = (props) => 
// 	<div><h1>{props.params.message || 'Hello World!'}</h1><Links /></div>

// const Links = () =>
// 	<nav>
// 		<Link to="/">A</Link>
// 		<Link to="/B">B</Link>
// 		<Link to="/C">C</Link>
// 	</nav>

// export default class App extends React.Component {
// 	render() {
// 		return (
// 			<Router historty={ hashHistory }>
// 				<Route path="/(:message)" component={Message}></Route>
// 			</Router>
// 		);
// 	}
// }


/* ===================================================== */
/* Lesson 7: React Router: Named Components */

// import React from 'react';
// import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

// const Home = () => <h1>Home</h1>;
// const HomeBody = () => <div>This is the Home Body.</div>;
// const Other = () => <h1>Other</h1>;
// const OtherBody = () => <div>This is the Other Body.</div>;

// const Container = (props) => 
// 	<div>{props.header}{props.body}<Links /></div>

// const Links = () => 
// 	<nav>
// 		<Link to="/">Home</Link>
// 		<Link to="/other">Other</Link>
// 	</nav>

// export default class App extends React.Component {
//   render() {
//     return (
//     	<Router history={ hashHistory }>
//     		<Route path="/" component={Container}>
//     			<IndexRoute components={ { header: Home, body: HomeBody } }></IndexRoute>
//     			<Route path="other" components={ { header: Other, body: OtherBody } }></Route>
//     		</Route>
//     	</Router>
//     );
//   }
// }


/* ===================================================== */
/* Lesson 8: React Router: Querystring Parameters */

// import React from 'react';
// import { Router, Route, Link, hashHistory } from 'react-router';

// // http://localhost:8000/#/?message=hello world?_k=wn9xli
// const Page = (props) =>
// 	<div><h1>{props.location.query.message || 'Hello'}</h1><Links /></div>

// const Links = () => 
// 	<nav>
// 		<Link to={ {pathname: '/', query: {message: 'Yo'}} }>Yo</Link>
// 	</nav>

// export default class App extends React.Component {
//   render() {
//     return (
//     	<Router history={ hashHistory }>
//     		<Route path="/" component={Page}></Route>
//     	</Router>
//     );
//   }
// }


/* ===================================================== */
/* Lesson 9: React Router: Redirect */

// import React from 'react';
// import { Router, Route, Redirect, Link, hashHistory } from 'react-router';

// const Home = () => <div><h1>Home</h1><Links /></div>;
// const About = () => <div><h1>About</h1><Links /></div>;
// const Contact = () => <div><h1>Contact</h1><Links /></div>;

// const Links = () => 
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/about-us">About Us</Link>
//     <Link to="/about">About(Redirect to about-us)</Link>
//     <Link to="/contact">Contact</Link>
//   </nav>  

// export default class App extends React.Component {
//   render() {
//     return (
//     	<Router history={ hashHistory }>
//     		<Route path="/" component={Home}></Route>
//     		<Route path="/about-us" component={About}></Route>
//     		<Route path="/contact" component={Contact}></Route>
//     		<Redirect from='/about' to='/about-us'></Redirect>
//     	</Router>
//     );
//   }
// }


/* ===================================================== */
/* Lesson 10: React Router: setRouteWillLeaveHook */

// import React from 'react';
// import { Router, Route, Link, hashHistory } from 'react-router';

// class Home extends React.Component {
//   componentWillMount(){
//     this.context.router.setRouteLeaveHook(
//       this.props.route,
//       this.routerWillLeave
//     )
//   }

//   routerWillLeave( nextLocation ){
//     return `leaving home for ${nextLocation.pathname}`
//   }

//   render(){
//     return <div><h1>Home</h1><Links /></div>;
//   }
// }

// Home.contextTypes = { router: React.PropTypes.object.isRequired }

// const About = () => <div><h1>About</h1><Links /></div>;
// const Links = () => {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="about">About</Link>
//     </nav>
//   )
// };

// const App = () => {
//   return (
//     <Router history={ hashHistory }>
//       <Route path="/" component={Home}></Route>
//       <Route path="/about" component={About}></Route>
//     </Router>
//   )
// };

// export default App;



/* ===================================================== */
/* Lesson 11: React Router: Animation */

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

const Page1 = () => {
	return (
		<div className="page page1">
			<Link to="/page2">Go to Page 2</Link>
		</div>
	)
};

const Page2 = () => {
	return (
		<div className="page page2">
			<Link to="/page1">Go to Page 1</Link>
		</div>
	)
};


class Container extends React.Component {
  render() {
  	var child = React.cloneElement( React.Children.only( this.props.children ), {
  		key: Math.random()
  	});

    return (
      <ReactCSSTransitionGroup
          transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 500 }
          transitionName="animation" component="div" className="holder">
          { child }
      </ReactCSSTransitionGroup>
    );
  }
}

const App = () => {
	return (
		<Router history={ hashHistory }>
			<Route path="/" component={ Container }>
				<IndexRoute componen={ Page1 } />
				<Route path="/page1" component={ Page1 } />
				<Route path="/page2" component={ Page2 } />
			</Route>
		</Router>
	)
};

export default App;