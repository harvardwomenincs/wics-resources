
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','be3'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','dba'),
  exact: true,
},
{
  path: '/docs/create-a-document',
  component: ComponentCreator('/docs/create-a-document','3f4'),
  exact: true,
},
{
  path: '/docs/create-a-page',
  component: ComponentCreator('/docs/create-a-page','486'),
  exact: true,
},
{
  path: '/docs/markdown-features',
  component: ComponentCreator('/docs/markdown-features','f04'),
  exact: true,
},
{
  path: '/docs/thank-you',
  component: ComponentCreator('/docs/thank-you','3bd'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
