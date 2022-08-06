import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [error, setError] = useState(false)
  const [locationList, setLocationList] = useState([])
  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch(url)
        const { locationList } = await response.json()
        setLocationList(locationList)
      } catch (err) {
        console.log('----- Error -----', err)
        setError(true)
      }
    }
    fetchLocations()
  }, [url])

  return { error, locationList }
}

export default useFetch
