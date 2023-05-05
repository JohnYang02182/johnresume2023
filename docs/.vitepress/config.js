export default {
    title: "John's workplace",
    description: "My history records about my works and jobs",
    themeConfig: {
        sidebar: [
            {
                text: "My code's Learning Map",
                items: [
                    { text: 'JavaScript', link: '/components/JSLearnMap' },
                    { text: 'Vue3', link: '/components/VueLearnMap' }
                ]
            },
            {
                text: 'My interview',
                items: [
                    { text: 'English', link: '/item-c' },
                    { text: 'Japanese', link: '/item-d' }
                ]
            }
        ]
    }
}