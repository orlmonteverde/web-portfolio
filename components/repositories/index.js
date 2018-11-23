import styles from './index.css'

const Repositories = ({ repos }) => (
  <div>
    <h2>Repositories works!</h2>
    <ul>
      {repos.map((r, i) => (
        <li key={r.id}>
          {r.name}
        </li>
      ))}
    </ul>
  </div>
)

export default Repositories
