import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../passwordslist'

import './index.css'

class Passwordmaneger extends Component {
  state = {
    passwordListItems: [],
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    showPassword: false,
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeInput = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangePasswordValue = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteInput, userNameInput, passwordInput} = this.state

    const newAddPasword = {
      id: v4(),
      websiteName: websiteInput,
      userName: userNameInput,
      userpassword: passwordInput,
    }
    this.setState(prevState => ({
      passwordListItems: [prevState.passwordListItems, newAddPasword],
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
    }))
  }

  noPasswordImage = () => {
    const {passwordListItems} = this.state
    const passwordLength = passwordListItems.length

    return (
      <div className="no-password-continer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="no-password-img"
        />
        <p className="no-passwords-text">{`Your Password ${passwordLength}`}</p>
      </div>
    )
  }

  render() {
    const {
      passwordListItems,
      websiteInput,
      userNameInput,
      passwordInput,
    } = this.state

    return (
      <div className="page-container">
        <div className="bg-container">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="add-password-container">
            <form className="form-container" onSubmit={this.onAddPassword}>
              <h1 className="password-heading">Add New Password</h1>
              <div className="input-container">
                <img
                  className="web-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  type="text"
                  className="input-ele"
                  value={websiteInput}
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="input-container">
                <img
                  className="web-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  type="text"
                  className="input-ele"
                  value={userNameInput}
                  placeholder="Enter Username"
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="input-container">
                <img
                  className="web-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  type="password"
                  className="input-ele"
                  placeholder="Enter Password"
                  value={passwordInput}
                  onChange={this.onChangePasswordValue}
                />
              </div>
              <button className="button" type="submit">
                Add
              </button>
            </form>
            <div className="image-container">
              <img
                className="password-maneger-image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
              />
            </div>
          </div>
          <div className="your-passwords-container">
            <div className="search-container">
              <p className="your-password-heading">{`Your Password ${passwordListItems.length}`}</p>
              <div className="input-container">
                <img
                  className="web-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="website"
                />
                <input
                  type="search"
                  className="input-ele"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="show-password-container">
              <input type="checkBox" id="showPassword" />
              <label className="show-password-text" htmlFor="showPassword">
                Show Password
              </label>
            </div>
            {passwordListItems.length < 1 ? this.noPasswordImage() : ''}
            {passwordListItems.map(eachPasswordCard => (
              <PasswordItem
                key={eachPasswordCard.id}
                eachPasswordCard={eachPasswordCard}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Passwordmaneger
