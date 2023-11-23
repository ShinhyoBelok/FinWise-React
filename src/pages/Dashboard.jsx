import React from 'react'
import './styles/dashboard.css'
import AccountCard from '../components/AccountCard'
import TotalDashboard from '../components/TotalDashboard'

export default function Dashboard() {
  return (
    <div className='dashboardContainer flexbox'>
      <section id="accountSection" className='flexbox'>
        <AccountCard />
        <AccountCard />
        <AccountCard />
      </section>
      <section className="total">
        <TotalDashboard />
      </section>
    </div>
  )
}
