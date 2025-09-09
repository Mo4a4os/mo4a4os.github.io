
import { Link } from 'react-router-dom'

type ProjectLinkProps = {
  t: string
  label: string
}

const ProjectLink = ({ t, label }: ProjectLinkProps) => {
  return (
    <div className="mx-10 my-3">
      <Link
        to={t}
        className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg"
      >
        {label}
      </Link>
    </div>
  )
}

export default ProjectLink
