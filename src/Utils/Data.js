// Packages
import React from 'react'
// Utils
import config from 'Utils/Config/default'

const useCustomFetch = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const sendFetch = React.useCallback(async (fetchConfig, parseData) => {
    console.log('sendFetch')
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(fetchConfig.url, {
        method: fetchConfig.method,
        headers: fetchConfig.headers,
        body: fetchConfig.body,
      })
      console.debug('response', response)

      if (!response.ok) {
        throw new Error('Fetching error!')
      }

      const data = await response.json()
      console.debug('sendFetch data', data)

      parseData(data)
    } catch (error) {
      setError(error.message || 'Something went wrong!')
    }
    setIsLoading(false)
  }, [])

  return { isLoading, error, sendFetch }
}

export const getConfig = (apiCall, method = 'GET', body = null) => {
  return {
    url: `${config.baseUrl}/${apiCall}.json`,
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  }
}

export default useCustomFetch
