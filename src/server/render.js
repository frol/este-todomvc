import DocumentTitle from 'react-document-title'
import Html from './html'
import Promise from 'bluebird'
import React from 'react'
import Router from 'react-router'
import routes from '../client/routes'

let render = (Handler, config) => {
  // You can set app state here. Check example in github.com/steida/este.
  let appHtml = React.renderToString(<Handler />)
  let appScriptSrc = config.isProduction
    ? '/build/app.js?v=' + config.version
    : 'http://localhost:8888/build/app.js'
  let scriptsHtml = `
    <script src="${appScriptSrc}"></script>
  `
  let title = DocumentTitle.rewind()
  return '<!DOCTYPE html>' + React.renderToStaticMarkup(
    <Html
      bodyHtml={appHtml + scriptsHtml}
      isProduction={config.isProduction}
      title={title}
      version={config.version}
    />
  )
}

export default (path, config) => {

  return new Promise((resolve, reject) => {
    Router.run(routes, path, (Handler, state) => {
      let html = render(Handler, config)
      let isNotFound = state.routes.some(route => route.name == 'not-found')
      resolve({
        html: html,
        status: isNotFound ? 404: 200
      })
    })
  })

}
