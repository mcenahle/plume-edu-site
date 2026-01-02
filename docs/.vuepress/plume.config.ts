/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar'
import collections from './collections'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/favicon.svg',

  navbar: [
    { text: '首页', link: '/', icon: 'carbon:home' },
    {
      text: '文档', icon: 'carbon:document',
      items: [
        { text: '关于', link: '/about/', icon: 'carbon:user-profile' },
        {
          text: '年终总结',
          items: [
            { text: '2025 年终总结', link: '/nzzj/2025.html', icon: 'fluent-mdl2:calendar-year' },
            { text: '2024 年终总结', link: '/nzzj/2024.html', icon: 'fluent-mdl2:calendar-year' }
          ],
        },
      ]
    },
    { text: '现行主页网站', link: 'https://www.mcenahle.org.cn/', icon: 'bx:map' },
  ],

  appearance: true,  // 配置 深色模式

  collections: [
    {
      type: 'doc',
      dir: 'docs',
      title: '文档',
      autoFrontmatter: {
        createTime: true, // 自动生成创建时间
        transform: (data, context, locale) => { // 自定义转换
          return data
        }
      }
    },
    {
      type: 'post',
      dir: 'blog',
      title: '博客',
    }
  ],

  social: [
    { icon: 'github', link: 'https://github.com/mcenahle/plume-edu-site' },
  ],
  navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  aside: true, // 页内侧边栏， 默认显示在右侧
  outline: [2, 4], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  copyright: false,

  prevPage: false,   // 是否启用上一页链接
  nextPage: false,   // 是否启用下一页链接
  createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: '',
    copyright: '© 2025-2026 www.mn.edu.kg。保留所有权利。',
  },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: '/favicon.svg',
    name: 'www.mn.edu.kg',
    description: '',
    circle: true,
    location: '上海市',
    // organization: '',
  },

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true,        // 启用 页面间跳转过渡动画
    postList: true,    // 启用 博客文章列表过渡动画
    appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },

})
