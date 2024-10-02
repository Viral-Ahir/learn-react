// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Profile from "./components/profile";
import Profile2 from "./qcomps/profile_mistake";
import MyComp from "./qcomps/firstcomp";
import Bio from "./qcomps/bios";
import Todos from "./qcomps/todos";
import Profile3 from "./components/profile_props";
import Gallery from "./qcomps/gallery_props";
import PackingList from "./components/props_item";
import PackingList2 from "./qcomps/props_item";

export default function Home() {
  return (
    <>
      <Profile />
      <Profile2 />
      <MyComp />
      <Bio />
      <Todos />
      <Profile3 />
      <Gallery />
      <PackingList />
      <PackingList2 />
    </>
  );
}
