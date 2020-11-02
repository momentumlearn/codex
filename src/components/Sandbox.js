import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/theme-textmate'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

function Editor (props) {
  return <AceEditor debounceChangePeriod={800} theme='textmate' width='100%' setOptions={{ useWorker: false }} {...props} />
}

export default function Sandbox (props) {
  const {
    style = {},
    horizontalSplitOffset = 50,
    htmlEditor = {},
    cssEditor = {},
    heightInPixels = 700,
    defaultTab = 'html'
  } = props
  style.height = heightInPixels + 'px'

  const [htmlContent, setHtmlContent] = useState('')
  const [cssContent, setCssContent] = useState('')

  useEffect(() => {
    setHtmlContent((htmlEditor.defaultValue || '').trim())
    setCssContent((cssEditor.defaultValue || '').trim())
  }, [htmlEditor, cssEditor])

  const iframeContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      ${cssContent}
    </style>
  </head>
  <body>
    ${htmlContent}
  </body>
  </html>
  `

  const editorHeight = (heightInPixels * horizontalSplitOffset / 100 - 55) + 'px'

  return (
    <div className='Sandbox' style={style}>
      <div class='Sandbox__editor' style={{ height: `${horizontalSplitOffset}%` }}>
        <Tabs defaultValue={defaultTab} values={[{ label: 'HTML', value: 'html' }, { label: 'CSS', value: 'css' }]}>
          <TabItem value='html'>
            <Editor
              onChange={value => setHtmlContent(value)}
              mode='html' value={htmlContent}
              readOnly={htmlEditor.readOnly}
              wrapEnabled={htmlEditor.wrapLines}
              height={editorHeight}
            />
          </TabItem>
          <TabItem value='css'>
            <Editor
              onChange={value => setCssContent(value)}
              mode='css' value={cssContent}
              readOnly={cssEditor.readOnly}
              wrapEnabled={cssEditor.wrapLines}
              height={editorHeight}
            />
          </TabItem>
        </Tabs>
      </div>
      <div style={{ height: `${100 - horizontalSplitOffset}%` }}>
        <iframe srcDoc={iframeContent} style={{ height: '100%', width: '100%', border: 0 }} />
      </div>
    </div>
  )
}

Sandbox.propTypes = {
  style: PropTypes.object,
  heightInPixels: PropTypes.number,
  horizontalSplitOffset: PropTypes.number,
  defaultTab: PropTypes.string,
  htmlEditor: PropTypes.shape({
    defaultValue: PropTypes.string,
    readOnly: PropTypes.bool,
    wrapLines: PropTypes.bool
  }),
  cssEditor: PropTypes.shape({
    defaultValue: PropTypes.string,
    readOnly: PropTypes.bool,
    wrapLines: PropTypes.bool
  })
}
