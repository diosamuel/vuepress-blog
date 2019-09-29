<template>
	<div>
		<h1 class="animated pulse">Aloha!</h1>
		<h3>Virdio Samuel Saragih</h3>
		<h3>usually called dio</h3>
		<h3>interesting in programming, chemistry, and art</h3>
		<h3>nasi goreng</h3>
		<h3>tempe is also delicious</h3>
		<h3>senior high school</h3>
		<h3>love book</h3>

		<div class="logo" @click='flexn=0' @dblclick='flexn=1'>
			<div class="js" @click='flexy(".js")'>.js</div>
			<div class="vue" @click='flexy(".vue")'>.vue</div>
			<div class="ts"  @click='flexy(".ts")'>.ts</div>
		</div>

		<h1>Contact</h1>
		<div class="btn">
			<a class="hub" href="https://github.com/diosamuel">GitHub</a>
			<a class="tele" href="https://t.me/jvxcript">Telegram</a>
			<a class="bl" href="https://diosamuel.github.io">Blog</a>
			<a class='ig' href="instagram.com/dio6.9sam">Instagram</a>
		</div>

 	</div>

</template>

<style scoped>
h3{transition:0.5s;font-weight: normal;}
h3:hover{transition: 0.5s;color: #3385ff}
/**/
.js,.vue,.ts{
	cursor: pointer;
	margin:5px;
	transition: 0.5s;
	padding: 1em;
	border-radius: 5px;
	width:20px;
	height:20px; 
}
.js:hover,.vue:hover,.ts:hover{
	transition: 0.5s;
	color: black;
	background:none;
}
.js{background: #fbff0f;flex: 1}
.js:hover{border:2px solid #fbff0f;}

.vue{background: #42b883;color: white;flex: 1}
.vue:hover{border:2px solid #42b883;}

.ts{background: #3385ff;color: white;flex: 1}
.ts:hover{border:2px solid #3385ff;}

.logo{display: flex;}
</style>

<style>
	.btn{display: flex;}
	.btn a{flex: 1}
	.hub,.tele,.bl,.ig{padding: 1em;border-radius: 5px;margin: 5px}
	.hub{background : #333;color: white}.tele{background: #f5f9fa}.bl{background:#1dd1de;color:white;}
	.ig{background-color:#bf0d5e;color:white;}
</style>
<script>
	export default{
		data(){
			return{
				flexn:0
			}
		},
		methods:{
			flexy(el){
				document.querySelector(el).style.flex=this.flexn
				//el.style.flex=1
			}
		}
	}
</script>