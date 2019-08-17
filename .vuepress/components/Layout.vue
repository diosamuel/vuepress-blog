<template>
	<div>
		<div class="aboutme">
			<h1>{{$page.frontmatter.title}}</h1>
			<p>Hello all!, my name is <a href="post/about.html">Virdio Samuel</a>, i am {{age}} years old. Suka baca buku + tidur kalo gasalah</p>
		</div>

		<div class="blog" v-for='post in postingan'>
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
						title:'saya siapa',
						description:`
							siapa saya, saya tidak tahu`,
						link:'post/post_1.html'
					},
					'post2':{
						title:'galeri',
						description:`
						 galeri foto apa aja`,
						 link:'/post/galeri.html'
					},
					'post3':{
						title:'Cerpen Mamank Garox',
						description:`
							cerpen mamank garox`,
						link:'/post/mamankgarox.html'
					},
					'post4':{
						title:'#anjay',
						description:`
							anjay mabar`,
						link:'#'
					},
				},
				age:''
			}
		},
		created(){
			axios.get('https://worldtimeapi.org/api/timezone/Asia/Jakarta')
			.then(res=>{
				let time = res.data.datetime.split('-')
				let isUltah = time[1]>=7
				
				if(isUltah){
					this.age=time[0]-2004+1
				}else{
					this.age=time[0]-2004
				}
				
			})
			.catch(e=>console.log(e))
		}
	}

	
</script>

<style>
	.aboutme{
		height: 50%;
		padding: 5em;
	}
</style>
<style scoped>
*{transition: 0.4s}
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
	.blog:hover{
		transform: translateY(-1rem);
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