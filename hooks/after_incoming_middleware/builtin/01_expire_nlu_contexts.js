//CHECKSUM:6f4f5d8638d1b7802da999600786bf982179446bc36d8374ef7ef5e279125638
if (event.state && event.state.session && event.state.session.nluContexts) {
  if (event.nlu && !event.nlu.errored) {
    event.state.session.nluContexts.forEach(x => --x.ttl)
    // Remove contexts that have expired
    event.state.session.nluContexts = event.state.session.nluContexts.filter(x => x.ttl > 0)
  }
}
