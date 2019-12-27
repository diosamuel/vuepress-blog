module.exports = {
	title:'Blog',
	description:'Virdio Samuel Blog',
	port:3000,
	themeConfig:{
		logo:'https://i.ibb.co/WB8qb49/69823.png',
		nav:[
			{text:"Index", link:"/"},
			{text:"About Me", link:"/post/about.html"},
		]
	},
	plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-145829530-1' // UA-00000000-0
      }
    ]
  ]
}