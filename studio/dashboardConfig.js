export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d7bb9a4f54fdb460b748b9c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-wtehsqqe',
                  apiId: 'ba290534-e9f6-454c-9b50-3538dbb2fbd0'
                },
                {
                  buildHookId: '5d7bb9a5b91bbcede63ac2a0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2vjonqub',
                  apiId: '41f81995-28d1-400d-b937-7e45f8927289'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/henok/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2vjonqub.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
