<template>
	<div>
		<div id="title">
			<h1>{{$page.frontmatter.title}}</h1>
			<p>Hello all!, my name is <a href="post/about.html">Virdio Samuel</a>, i am {{age?age:15}} years old. Suka baca buku + tidur kalo gasalah</p>
		</div>

		<div class="blog" v-for='post in postingan'>
			<div class="post">
				<h1>{{post.title}}</h1>
				<p v-html='post.description'></p>
				<a :href='post.link' style="margin: 0 auto"><button>read</button></a>
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
						link:'post/about.html'
					},
					'post2':{
						title:'galeri',
						description:`
						 galeri foto apa aja`,
						 link:'/post/galeri.html'
					},
					'post3':{
						title:'Hikayat Hang Joko',
						description:`
							gw bikin cerita, mana tau bermanfaat`,
						link:'/post/hikayat.html'
					},
					'post4':{
						title:'#weliveinsociety',
						description:`
							we think about society interaction`,
						link:'#title'
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

<style scoped>
	#title{
		height: 50%;
		padding: 5em;
		background: rgb(255,155,247);
		background: linear-gradient(322deg, rgba(255,155,247,1) 0%, rgba(64,127,249,1) 82%);
		border-radius: 8px;
		color: white;
		position: relative;
		animation-name: toRight;
		animation-duration: 1s;
	}
	#title a{color: white!important;}
	@keyframes toRight{
		0%{right: 5rem}
		100%{right:0;}
	}
</style>

<!--umum-->
<style scoped>
*{transition: 0.4s;scroll-behavior: smooth;font-family: Google Sans}
	a{color: black;}
	.blog{
		/*border:1px solid #afafaf;*/
		padding: 10px;
		border-radius: 10px;
		box-shadow: 1px 10px 2rem #efefef;
		margin-top: 2rem;
		padding: 2em;
	}
	.blog .post{
		padding: 2rem;
	}
	.blog:hover{
		
	}
	.blog h1{
		/*border-bottom: 1px solid #efefef*/
	}
	.blog button{
		transition: 0.5s;
		border-radius: 8px;
		font-size: 19px;
		background: rgb(100,202,255);
		background: linear-gradient(266deg, rgba(100,202,255,1) 0%, rgba(239,155,255,1) 100%);
		color: white;
		text-decoration: none;
		padding: 10px;
		width: 30%;
		border:none;
		cursor: pointer;
		margin-top: 2em!important;
		box-shadow: 10px 10px #333;
		transform: translateX(200%);
		/*box-shadow: 1px 10px 10px #efefef*/
	}
	.blog button:hover{
		transition: 0.5s;
		box-shadow: -10px 10px #333
	}
	.blog button:active{
		transition: 0.5s;
		box-shadow: -1px 1px #333
	}

	/*coloring*/
	.blog:nth-child(odd){
		background: rgb(255,117,254);
		background: linear-gradient(122deg, rgba(255,117,254,1) 0%, rgba(135,129,240,1) 65%, rgba(19,141,226,1) 100%);
		color: white
	}
	.blog:nth-child(odd) button{
		background: white;
		color: black
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