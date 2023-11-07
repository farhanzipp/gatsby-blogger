import * as React from "react"
import PageLayout from "../components/PageLayout"

const Home = () => {
  return (
    <PageLayout> 
      <div className="h-1/2 py-9 text-white ">
        <h1 className=" text-3xl font-mono">Farhan Aji</h1>
        <p className="w-2/3"><span className="block pb-5 italic">Front End Developer</span> I am freelance frontend developer who love build techy 
        fancy things for the sake of the world</p>
      </div>
    </PageLayout>
  )
}

export default Home

