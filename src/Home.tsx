/* eslint-disable no-undef */
import WelcomPage from './components/WelcomPage'
import Editor from './components/Editor'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Thumbnails from './components/Thumbnails'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import OverlayRight from './components/OverlayRight'
import OverlayLeft from './components/OverlayLeft'
// import useFabric from './hooks/useFabric';
// import { fabric } from 'fabric';
// import { useEffect } from 'react'
// import useApp from './hooks/useContext'

function Home(): JSX.Element {
  // const { setFabContext } = useFabric();
  // const { selectedThumbType } = useApp();

  return (
    <>
      <div className='dark:bg-slate-950 no-scrollbar bg-slate-50 transition-colors'>
        <Navbar />
        <Layout>
          <main
            style={{ overflow: 'hidden' }}
            className='sticky top-0 z-10 md:z-0 md:relative md: bg-slate-950 dark:bg-slate-50 md:bg-transparent'
          >
            <WelcomPage />
            <Editor />
          </main>

          <OverlayLeft />
          <LeftSidebar />
          <div className='md:flex flex-col items-center justify-center md:items-start md:justify-start md:flex-grow-0 md:flex-basis-1/3 md:mt-[65px] md:fixed md:top-0 md:right-0 md:h-screen z-30'>
            <OverlayRight />
            <RightSidebar />
          </div>
        </Layout>
      </div>
      <Thumbnails />
    </>
  )
}

export default Home
