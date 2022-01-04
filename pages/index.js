import Head from 'next/head'
import Script from 'next/script'
import InviteUserModal from '../components/common/Modal/inviteUser'
import WelcomeMessageModal from '../components/common/Modal/welcomeMessageModal'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import SideBar from '../components/SideBar'
import ActivitySidebar from '../components/SideBar/activitySidebar'
import KeyboardShortcutsSidebar from '../components/SideBar/keyboardShortcutsSidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dukaandar</title>
        <meta name="description" content="dukaandar" />
      </Head>
      <MainContent />

    </>
  )
}
