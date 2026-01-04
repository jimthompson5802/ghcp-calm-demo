module.exports = {
    docs: [
        {
            type: 'doc',
            id: 'index',
            label: 'Home',
        },
        {
            type: 'category',
            label: 'Nodes',
            items: [
                'nodes/ghcp-user',
                'nodes/the-application',
                'nodes/the-database'
            ],
        },
        {
            type: 'category',
            label: 'Relationships',
            items: [
                'relationships/user-to-app',
                'relationships/app-to-database'
            ],
        },
    ]
};
