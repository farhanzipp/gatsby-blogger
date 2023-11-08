import * as React from "react"
import PageLayout from "../components/PageLayout"
import FeaturedProjectCard from "../components/FeaturedProjectCard"

const Home = () => {
  return (
    <PageLayout> 
      <section className="mb-32">
        <div className=" pt-32 pt dark:text-white ">
          <h2 className=" text-7xl font-mono">Farhan Aji<span className="text-sm  dark:text-gray-400">(he/him)</span></h2>
          <p className="pt-11 text-2xl dark:text-gray-400"> I am regular human being focusing on frontend web development and love build cool things for better life <span className="italic">(or whatever)</span></p>
        </div>
      </section>
      <section className=" mb-16">
        <h2 className="font-mono text-2xl font-bold dark:text-white">About</h2>
        <div className="text-xl dark:text-gray-400">
          <p className="py-2">My first journey as frontend developer started when <span className="font-semibold dark:text-white">"having my own blogger theme style"</span> idea appear on my head 2019 ago. </p>
          <p className="py-2">And now I am confident to help people bring their ideas into life with my knowledges and experiences. </p>
          <p className="py-2">Here some technologies lately i have been work with:</p>
          <ul className="py-2 px-4 w-full grid grid-cols-2 font-mono text-sm text-white list-disc">
            <li>JavaScript (ES6)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Wordpress</li>
            <li>Gatsby.js</li>
            <li>Tailwind</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="font-mono text-2xl font-bold dark:text-white">Projects</h2>
        <div className="py-2 ">
          <FeaturedProjectCard />
        </div>
      </section>
    </PageLayout>
  )
}

export default Home

