import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserRound } from 'lucide-react'

export default function Auth() {
  const [mode, setMode] = useState('login')
  const [submitted, setSubmitted] = useState(false)
  const submit = e => { e.preventDefault(); setSubmitted(true) }
  return <main className="container auth-shell"><div className="auth-card"><div className="auth-icon"><UserRound/></div><span className="eyebrow">WELCOME TO SHOPSPHERE</span><h1>{mode === 'login' ? 'Good to see you.' : 'Come on in.'}</h1><p>{mode === 'login' ? 'Sign in to keep your good finds close.' : 'Create an account for a more personal shopping experience.'}</p>{submitted ? <div className="success-message">Thanks! This is a frontend demonstration. Authentication is not connected to a backend.</div> : <form onSubmit={submit} className="auth-form">{mode === 'register' && <label>Full name<input required placeholder="Your name"/></label>}<label>Email address<input required type="email" placeholder="you@example.com"/></label><label>Password<input required type="password" minLength="6" placeholder="At least 6 characters"/></label><button className="button button-dark">{mode === 'login' ? 'Sign in' : 'Create account'}</button></form>}<button className="auth-switch" onClick={() => {setMode(mode === 'login' ? 'register' : 'login'); setSubmitted(false)}}>{mode === 'login' ? 'New here? Create an account' : 'Already have an account? Sign in'}</button><Link to="/shop" className="continue-link">Continue browsing</Link></div></main>
}
