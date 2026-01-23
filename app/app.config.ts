export default defineAppConfig({
  title: 'create360.ai -創造智能短網址服務 內部用- ',
  email: 'cto@vip.david888.com',
  github: 'https://github.com/CreateIntelligens/Sink2',
  twitter: 'https://',
  telegram: 'https://',
  mastodon: 'https://',
  blog: 'https://podcast.david888.com',
  description: '創造智能--短網址服務',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
