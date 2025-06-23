import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsAction } from '../redux/actions/post'
import HomeCard from '../components/HomeCard'

const Home = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPostsAction())
  }, [dispatch])

  console.log("Posts:", posts)

  return (
    <div className='flex items-center m-5 flex-wrap gap-6 pl-16'>
      {
        posts?.map((post, i) => (
          <HomeCard key={i} post={post} />
        ))
      }
    </div>
  )
}

export default Home
