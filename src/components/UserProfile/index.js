import './index.css'

const UserProfile = props => {
  const {eachUser} = props
  const {imageUrl, name, Role} = eachUser

  return (
    <li className="user-card-container">
      <img src={imageUrl} alt={name} className="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{Role}</p>
      </div>
    </li>
  )
}

export default UserProfile
