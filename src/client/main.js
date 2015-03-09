import React from 'react'
import Router from 'react-router'
import routes from './routes'

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler />, document.body)
})

if ('production' != process.env.NODE_ENV) {
  // Dev only code.
  // TODO: Report app errors.
}
