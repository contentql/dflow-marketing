export const signOut = async () => {
  try {
    const response = await fetch('/api/users/logout', { method: 'POST' })
    if (response.ok) {
      window.location.reload()
    }
    return response.json()
  } catch (error) {
    console.log(error)
  }

  // window.location.reload()
}
