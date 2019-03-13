import Button from 'react-bootstrap/Button'
import {FaCogs, FaGithub, FaTag} from 'react-icons/fa'

export default ({ impl }) => {
  return (
    <div>
      <h3>{impl.name}
        <span className="implementation-buttons">
          <Button href={impl.github} className="implementation-button" target="_blank">
            <FaGithub /> Code
		    	</Button>
          <Button disabled={true}>
            <FaCogs /> Run
			    </Button>
        </span>
      </h3>
      <div>{impl.description}</div>

      <ul className="tags">
        {impl.tags.map(tag => (<li key={tag}><FaTag /> {tag}</li>))}
      </ul>
    </div>
  )
}