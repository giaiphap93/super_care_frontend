import { createI18n } from 'vue-i18n'
import en from './lang/en.json'
import vn from './lang/vn.json'

function loadLocaleMessages() {
    const locales = [{ en: en }, { vn: vn }]
    const messages = {}
    locales.forEach(lang => {
        const key = Object.keys(lang)
        messages[key] = lang[key]
    })
    return messages
}

export default createI18n({
    locale: 'en',
    fallbackLocale: 'vn',
    messages: loadLocaleMessages()
})