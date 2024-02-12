// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import ProfileMistake from './qcomps/profile_mistake'
import FirstComp from './qcomps/firstcomp';
import Bio from './qcomps/bios';
import TodoList from './qcomps/todos';

export default function Home() {
  return (
    <div className={styles.main}>
      <ProfileMistake />
        <Profile />
        <FirstComp />
        <Bio />
        <TodoList />
    </div>
  )
}
