import { useAuth } from '../utils/auth'


export default function Index() {
  const auth = useAuth()

  return auth.user ? (
    <div>
      <p>Welcome User: {auth.user.email}</p>
      <button onClick={(e) => auth.signout()}>Sign Out</button>
    </div>
  ) : (
    <button onClick={(e) => auth.signinWithGitHub()}>Sign In</button>
  )
}