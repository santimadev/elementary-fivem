const LANGUAGE = 'es'

type Translations = {
    [key: string]: string
}

class i18n {
    static translations: Translations
    constructor() {
        (async () => {
            const m = await import(`../assets/i18n/${LANGUAGE}.json`)
            i18n.translations = m.default
        })()
    }
    $t(label: string) {
        return i18n.translations[label] || label
    }
}

const { $t } = new i18n()

export { $t }