import {
  useEffect,
  useState,
} from 'react';

let localCache = {}
export const useFetch = (url) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    hasError: false,
    error: null
  })

  const { loading, data, hasError, error } = state


  //funcion para estados
  const setLoadingState = () => {
    setState({
      loading: true,
      data: null,
      hasError: false,
      error: null
    })
  }
  const setErrorState = (mensaje) => {
    setState({
      loading: false,
      data: null,
      hasError: true,
      error: mensaje
    })
  }

  const fetchApi = async () => {
    if (localCache[url]) {
      setState({
        loading: false,
        data: localCache[url],
        hasError: false,
        error: null
      })
      return
    }

    try {
      setLoadingState()
      const res = await fetch(url);
      await new Promise(resolve => setTimeout(resolve, 1500))
      if (!res.ok) {
        setErrorState('Something went wrong with fetch')
      }
      const data = await res.json()
      setState({
        loading: false,
        data,
        hasError: false,
        error: null
      })
      localCache[url] = data
    } catch (error) {
      setErrorState(error)
    }
  };
  useEffect(() => {
    fetchApi()
  }, [url])

  return {
    data,
    loading,
    hasError,
    error,
    localCache
  }
}