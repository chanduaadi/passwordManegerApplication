import './index.css'

const PasswordItem = props => {
  const {eachPasswordCard} = props
  const {websiteName, userName, userpassword} = eachPasswordCard
  return (
    <li className="password-list-continer">
      <div className="initial-container">
        <p className="initial">{userName[0]}</p>
      </div>
      <div className="name-password-continer">
        <p className="user-name">{websiteName}</p>
        <p className="user-password">{userName}</p>
        <p className="user-password">{userpassword}</p>
      </div>
      <button className="delete-btn" type="button">
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
