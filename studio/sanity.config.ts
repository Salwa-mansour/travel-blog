import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'
import {visionTool} from '@sanity/vision'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

export default defineConfig({
  name: 'default',
  title: 'Sanity Studio',

  projectId: '6q9eveyo', // <-- Paste your ID from Step 1
  dataset: 'production',

  plugins: [structureTool(),
           visionTool(),
           unsplashImageAsset(),
           ],

  schema: {
    types: schemaTypes,
  },
})