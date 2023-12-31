import BlogsContainer from '@/sections/BlogsContainer'
import Header from '@/sections/BlogHeader'
import PageController from '@/sections/PageController'
export default function Home() {
  return (
    <>
      <div className="max-w-[1450px] mx-auto">
        <Header />
        <BlogsContainer/>
        <PageController/>
      </div>
    </>
  )
}
