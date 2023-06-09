import { useState, useEffect } from "react"
import getTheme from "../lib/get-theme"
import ThemeToggle from "../lib/theme-toggle"
import ThemeButton from "../Components/ui/theme-button"
import Navbar from "../Components/nav-bar"
import PostCard from "../Components/post-card"
import { getPosts } from "../lib/db"
import { Post } from "../lib/models"
import data from '../../datasets/PostsSet.json'

export default function BlogPage() {
  const usrTheme = getTheme()
  const [darkMode, setDarkMode] = useState<boolean>(usrTheme)
  const [feed, setFeed] = useState<any[]>()

  // async function getFeed(getPosts: Function) {
  //   // const feed = await getPosts()
  //   return setFeed(feed)
  // }
  // getFeed(getPosts)

  function themeToggleHandler() {
    ThemeToggle(usrTheme, setDarkMode)
  }

  useEffect(() => {
    const sortedPosts = [...data].sort(
      (a: Post, b: Post) => new Date(b.CreatedAt).getTime() - new Date(a.CreatedAt).getTime()
    );
    setFeed(sortedPosts);
  }, []);

  return (
    <main className={`flex flex-col w-screen h-screen max-h-none overflow-auto transition ease-in-out delay-400 ${darkMode ? "dark" : ""}`}>
      <Navbar />
      <section className="mx-auto sm:w-[30rem] h-full max-h-none">
        <article className="flex flex-col h-44 items-center sm:items-start justify-center gap-2">
          <p className="font-semibold text-2xl sm:text-4xl mt-2">Welcome to my blog! &#128640;</p>
          <span className="text-sm sm:text-xl">Posts about interesting topics</span>
        </article >
        <article className="flex flex-col mt-6 p-3 sm:p-0">
          <p className="font-semibold text-2xl">Posts</p>
          <div className="flex flex-col w-full py-5 space-y-5">
            {feed?.map((post: Post) => (
              <PostCard darkMode={darkMode} title={post.Title}acontent={post.Content} id={post.id} topics={post.Topics} key={post.id} synopsis={post.Synopsis}/>
            ))}
          </div>
        </article>
      </section>
      <div className="bottom-0 right-0 fixed">
        <ThemeButton darkMode={darkMode} themeToggleHandler={themeToggleHandler} />
      </div>
    </main>
  )
}