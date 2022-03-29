import React, { useEffect, useState } from 'react'
import MovieRow from './components/MovieRow'
import Tmdb from './Tmdb'
import './App.css'


const App = (props) => {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      // Pegando lista total
      let list = await Tmdb.getHomeList()
      setMovieList(list)
    }

    loadAll()
  }, [])

  return (
    <div className='page'>
      <section className='listas'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div >
  )
}

export default App
