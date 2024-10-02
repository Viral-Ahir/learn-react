// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Profile from "./components/profile";
import List from "./qcomps/list_keys_id";
import RecipeList from "./qcomps/recipes";
import Gallery2 from "./qcomps/state";
import Form from "./qcomps/stuckForm";
import FeedbackForm from "./qcomps/thankYouCrash";

export default function Home() {
  return (
    <>
      <Profile />;
      <List />
      <RecipeList />
      <Gallery2 />
      <Form />
      <FeedbackForm />
    </>
  );
}
