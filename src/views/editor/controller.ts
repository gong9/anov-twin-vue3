import { emitter } from '@/utils'
import shortcutKeyRegister from '@/utils/shortcutKeyController'

const shortKeyInit = () => {
  const currentShortKeyApi = shortcutKeyRegister()
  const saveShortKeyApi = currentShortKeyApi.get('save')

  saveShortKeyApi!(() => {
    console.log('save')
  })
}

export default {
  init: () => {
    shortKeyInit()
  },
  destroy: () => {
    emitter.all.clear()
  },
}
