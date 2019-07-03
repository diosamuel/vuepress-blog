<template>
	<div>
		<div class="jumbotron">
			{{$page.frontmatter.title}}
		</div>
		<p>Hello all!, my name is <a href="post/about.html">Virdio Samuel</a>, i am {{age}} years old. i like ngoding with NodeJS, TypeScript, Vue and Python</p>

		<hr>
		<div :href='link' v-for='(link, title) in list' class="post">
			<h1>{{title}}</h1>
			<p><em>lorem ipsum ipsum lorem</em></p>
			<a  :href='link' class="button">read</a>
			<br>
			<hr>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				list:{
					'Title':'post/post_1.html',
					'Title 2':'post/post_2.html',
					'Title 3':'#',
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
	.button{
		background-color: #ffffff;
		color:  #3385ff;
		border:none;
		padding: 10px;
		border: #3385ff 1px solid;
		display: block;
		border-radius: 5px;
		cursor: pointer;
		transition: 0.5s;
		width: 10rem
	}
	.button:hover{
		background-color:  #3385ff;
		color: white
	}
	.post{
		width: 100%
	}
	.jumbotron{
		width: 100%;
		font-size: 50px
	}
</style>