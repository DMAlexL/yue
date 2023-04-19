const express = require('express');
const router = express.Router();

router.get('/list', function (req, res) {
  res.send([
    {
      key: '1',
      title: 'Vite',
      logo: 'https://cn.vitejs.dev/logo-with-shadow.png',
      github: 'https://github.com/vitejs/vite',
      intro: '下一代前端工具。它很快！',
      style: {
        backgroundImage:
          'linear-gradient(319deg, #7aa7fb, #6cc4fc, #53e1fd, #00fefe)',
      },
      wikis: [
        {
          name: 'Vite 官方中文文档',
          address: 'https://cn.vitejs.dev',
          target: '_blank',
        },
        {
          name: 'Vite 官方中文文档',
          address: 'https://cn.vitejs.dev/',
          target: '_blank',
        },
      ],
    },
    {
      key: '2',
      title: 'Lodash',
      logo: 'https://lodash.com/assets/img/lodash.svg',
      github: 'https://github.com/lodash/lodash',
      intro: '提供模块化、性能和附加功能的现代 JavaScript 实用程序库。',
      style: {
        backgroundImage:
          'linear-gradient(319deg, #1a4588, #6779ab, #a5b1cf, #e3eef4)',
      },
      wikis: [
        {
          name: 'Lodash 官方中文文档',
          address: 'https://www.lodashjs.com/',
          target: '_blank',
        },
      ],
    },
    {
      key: '3',
      title: '语雀',
      logo: 'https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*vMxOQIh4KBMAAAAAAAAAAAAADvuFAQ/original',
      github: 'https://github.com/yuque',
      intro: '优雅高效的在线文档编辑与协同工具。',
      style: {
        backgroundImage:
          'linear-gradient(65deg, #008583, #01a59c, #01c7b6, #00e9d1)',
      },
      wikis: [
        {
          name: '语雀',
          address: 'yuque://',
          target: '',
        },
      ],
    },
  ]);
});

export default router;
