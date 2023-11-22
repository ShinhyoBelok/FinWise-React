import React from 'react'
import './styles/dashboard.css'
import AccountCard from '../components/AccountCard'

export default function Dashboard() {
  return (
    <div className='dashboardContainer flexbox'>
      <section id="accountSection" className='flexbox'>
        <AccountCard />
        <AccountCard />
        <AccountCard />
      </section>
    </div>
  )
}
