import { apiJsonPlaceholder } from '../jsonPlaceholder'

export async function getData(props) {
    if (!props.endpoint) return false
    const response = await apiJsonPlaceholder.get(props.endpoint)
    if (!response.data) return {  appName, props: errors.contentApiError }
    if (response.data.length === 0) return { appName, props: errors.postNotFound }    
    const posts = response.data

    return await Promise.all(posts.map(async post => {
      try {
        if (!post.userId) return false
        const userData = await apiJsonPlaceholder.get(`users/${post.userId}`)
        if (!userData.data) return false
        return { 
          ...post, 
          userName: userData.data.name ? userData.data.name : null,
          userEmail: userData.data.email ? userData.data.email : null
        }
      } catch (error) {
        return false
      }
    }))
}
