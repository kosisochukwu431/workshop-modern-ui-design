import { configure, addDecorator } from '@storybook/vue'
import '../src/components/registerAll'
import Router from 'storybook-vue-router'

addDecorator(Router())

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module)
