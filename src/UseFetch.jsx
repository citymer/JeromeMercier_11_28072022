import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (err) {
        console.log('----- Error -----', err)
        setError(true)
      }
    }
    fetchLocations()
  }, [url])

  return { data, error }
}

export default useFetch
