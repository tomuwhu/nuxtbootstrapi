export default ({ store, error }) => {
  if (!store.state.authUser) {
    error({
      message: 'Nincs bejelentkezve!',
      statusCode: 403
    })
  }
}
