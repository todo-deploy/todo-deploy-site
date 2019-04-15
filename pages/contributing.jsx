import Layout from '../components/Layout'

export default () => {
	return (
		<Layout>
			<h2>Contract</h2>
			The contract for an implementation consists of two parts:
			<ul>
				<li><b>Makefile</b> - make file with <code>up</code> and <code>down</code> targets to kick off the provisioning and tear it down</li>
				<li><b>tests</b> - clone the <a href="https://github.com/danielsiwiec/todo-deploy-tests">test</a> repo and run <code>npm install && npm test</code></li>
			</ul>

			<h2>Contributing</h2>
			Once an implementation is ready, it can be added to the list via a pull request on <a href="https://github.com/danielsiwiec/todo-deploy/blob/master/data/implementations.json">this file</a>.
		</Layout>
	)
}
