import Layout from '../components/Layout'
import implementations from '../data/implementations.json'
import Implementation from '../components/Implementation'

export default () => {
  return (
    <Layout>
      {implementations.map(impl => <Implementation key={impl.name} impl={impl} />)}
    </Layout>
  )
}