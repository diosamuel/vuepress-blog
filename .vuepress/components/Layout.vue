<template>
	<div>
		<div class="jumbotron">
			{{$page.frontmatter.title}}
		</div>
		<p>Hello all!, my name is <a href="post/about.html">Virdio Samuel</a>, i am {{age||15}} years old. i like ngoding with NodeJS, TypeScript, Vue and Python</p>

		<hr>
		<div class="blog" v-for='post in postingan' :class='theme'>
			<div class="post">
				<h1>{{post.title}}</h1>
				<p>{{post.description}}</p>
				<a :href='post.link'><button>read</button></a>
			</div>
		</div>
		
		<div class="footer">
			<p>Virdio Samuel - {{new Date().getFullYear()}}</p>
			<p>Bikinnya Pake <a href="https://vuepress.vuejs.org/">VuePress</a></p>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				postingan:{
					'post1':{
						title:'Title 1',
						description:`
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
						link:'post/post_1.html'
					},
					'post2':{
						title:'Ahsiappp',
						description:`
							dongeng ahsiap`,
						link:'/post/post_2.html'
					},
					'post3':{
						title:'Title 2',
						description:`
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
						link:'#'
					}
				},
				age:''
			}
		},
		created(){
			axios.get('http://worldtimeapi.org/api/timezone/Asia/Jakarta')
			.then(res=>{
				this.age=res.data.datetime.split('-')[0]-2004
			})
			.catch(e=>console.log(e))
		}
	}

	
</script>

<style scoped>
	a{color: black;}
	.blog{
		/*border:1px solid #afafaf;*/
		padding: 10px;
		border-radius: 10px;
		box-shadow: 1px 10px 2rem #efefef
	}
	.blog .post{
		padding: 2rem;
	}
	.blog .post:hover{
		
	}
	.blog h1{
		/*border-bottom: 1px solid #efefef*/
	}
	.blog button{
		transition: 0.5s;
		font-size: 19px;
		background-color: white;
		color: black;
		text-decoration: none;
		padding: 10px;
		width: 100%;
		border:none;
		cursor: pointer;
		margin-top: 2em!important;
		border-top:1px solid #efefef; 
		/*box-shadow: 1px 10px 10px #efefef*/
	}
	.blog button:hover{
		transition: 0.5s;
		opacity: 0.5
	}
	.jumbotron{
		width: 100%;
		font-size: 50px
	}

	.footer{
		margin-top: 2rem;
		text-align: center;
		font-size: 18px!important;
	}
</style>