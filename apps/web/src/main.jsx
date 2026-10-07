import React from 'react'
import { createRoot } from 'react-dom/client'
import { Banner } from '@fixture/ui'

/* Imports from a sibling workspace package. A preview that renders proves the
   importer resolved the workspace link, not just the app directory. */
createRoot(document.getElementById('root')).render(
  <main style={{ fontFamily: 'system-ui, sans-serif', padding: 40 }}>
    <Banner />
  </main>,
)
