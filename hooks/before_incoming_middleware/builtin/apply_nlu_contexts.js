//CHECKSUM:ba46aecef81625952b56040628ec67a59f3cb6cc727543dabfbd3a331bd25920
if (event.state && event.state.session && event.state.session.nluContexts && event.state.session.nluContexts.length) {
  event.nlu = event.nlu || {}

  Object.assign(event.nlu, {
    includedContexts: event.state.session.nluContexts.map(x => x.context)
  })
}
