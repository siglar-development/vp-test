import home from '@/assets/icons/home.svg?raw'

const icon = URL.createObjectURL(new Blob([home], {
    type: 'image/svg+xml'
}))

export default [{
        label: 'Home',
        route: '/',
        icon
    },
    {
        label: 'Templates',
        children: [{
                label: 'Default',
                route: '/default',
            },
            {
                label: 'Home',
                route: '/home',
            },
            {
                label: 'Article',
                route: '/article',
            },
            {
                label: 'Articles',
                route: '/articles',
            },
            {
                label: 'Search',
                route: '/search',
            },
            {
                label: 'Categories',
                route: '/categories',
            },
            {
                label: 'Product',
                route: '/product',
            },
            {
                label: 'Products',
                route: '/products',
            },
            {
                label: 'Register',
                route: '/register',
            },
            {
                label: 'Login',
                route: '/login',
            },
            {
                label: 'Profile',
                route: '/profile',
            },
            {
                label: '404',
                route: '/404',
            }
        ]
    },
    {
        label: 'Components',
        children: [{
                label: 'Atoms',
                children: [{
                        label: 'Badge',
                        route: '/badge',
                    },
                    {
                        label: 'Button',
                        route: '/button',
                    },
                    {
                        label: 'Checkbox',
                        route: '/checkbox',
                    },
                    {
                        label: 'Divider',
                        route: '/divider',
                    },
                    {
                        label: 'Icon',
                        route: '/icon',
                    },
                    {
                        label: 'Image',
                        route: '/image',
                    },
                    {
                        label: 'Input Field',
                        route: '/input-field',
                    },
                    {
                        label: 'Radio Button',
                        route: '/radio-button',
                    },
                    {
                        label: 'Link',
                        route: '/link',
                    },
                    {
                        label: 'Text',
                        route: '/text',
                    }
                ]
            },
            {
                label: 'Molecules',
                children: [{
                        label: 'Article Preview',
                        route: '/article-preview',
                    },
                    {
                        label: 'Breadcrumb Trail',
                        route: '/breadcrumb-trail'
                    },
                    {
                        label: 'Form Input',
                        route: '/form-input',
                    },
                    {
                        label: 'Login Form',
                        route: '/login-form',
                    },
                    {
                        label: 'Notification Bar',
                        route: '/notification-bar',
                    },
                    {
                        label: 'Product Thumbnail',
                        route: '/product-thumbnail',
                    },
                    {
                        label: 'Rating Stars',
                        route: '/rating-stars',
                    },
                    {
                        label: 'Search Bar',
                        route: '/search-bar',
                    },
                    {
                        label: 'Social Share Buttons',
                        route: '/social-share-buttons',
                    },
                    {
                        label: 'Tag Cloud',
                        route: '/tag-cloud',
                    }
                ]
            },
            {
                label: 'Organisms',
                children: [{
                        label: 'Article Card',
                        route: '/article-card',
                    },
                    {
                        label: 'Comment Section',
                        route: '/comment-section',
                    },
                    {
                        label: 'Contact Form',
                        route: '/contact-form',
                    },
                    {
                        label: 'Feature Section',
                        route: '/feature-section',
                    },
                    {
                        label: 'Footer Section',
                        route: '/footer-section',
                    },
                    {
                        label: 'Header Section',
                        route: '/header-section',
                    },
                    {
                        label: 'Hero Section',
                        route: '/hero-section',
                    },
                    {
                        label: 'Navbar',
                        route: '/navbar',
                    },
                    {
                        label: 'Page Container',
                        route: '/page-container',
                    },
                    {
                        label: 'Product Card',
                        route: '/product-card',
                    },
                    {
                        label: 'Sidebar',
                        route: '/sidebar',
                    },
                ]
            }
        ]
    },
    {
        label: 'What is Vue.js?',
        route: 'https://vuejs.org',
        external: true
    },
]