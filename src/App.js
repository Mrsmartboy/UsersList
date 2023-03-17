import UserProfile from './components/UserProfile'

import './App.css'

const UserDetails = [
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Joseph',
    Role: 'Software Developer',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Mounika',
    Role: 'Software Developer',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Elizabeth',
    Role: 'Software Developer',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Rahul',
    Role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {UserDetails.map(eachUser => (
        <UserProfile eachUser={eachUser} key={eachUser.id} />
      ))}
    </ul>
  </div>
)

export default App
