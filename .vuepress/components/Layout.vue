<template>
	<div>
		<div id="header">
			<h1>Virdio's Blog</h1>
			<p>Hello all!, my name is <a href="post/about.html">Virdio Samuel</a>, i am 15 years old. Suka baca buku + tidur kalo gasalah</p>
		</div>

		<div class="blog" v-for='post in postingan' style="width: 100%">
			<a :href="post.link">
				<div class="post">
					<img :src="post.img" v-if='post.img' class="img">
					<div class="desc">
						<h1>{{post.title}}</h1>
						<p class="text-desc" v-html='post.description'></p>
						<br>
						<p style="color:gray;width:25%;letter-spacing: 5px;background: #fafafa;padding: 1em;border-radius: 8px;">{{post.category}}</p>
					</div>
				</div>
			</a>
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
						img:'https://i1.wp.com/wp.laravel-news.com/wp-content/uploads/2018/04/vuepress.png?resize=2200%2C1125',
						title:'Membuat Simple Blog dengan Vuepress ',
						description:`
							Halo!, Kali ini kita akan membuat simple blog menggunakan Vuepress Static Site Generator..`,
						category:'TUTORIAL',
						link:'post/underproduction.html'
					},
					'post3':{
						img:'https://cdn.idntimes.com/content-images/community/2017/03/scottish-fold-19f4e95a2d8b356157e6c7714a8add33_600x400.jpg',
						title:'Hikayat Hang Joko',
						description:`
							gw bikin cerita, mana tau bermanfaat`,
						category:'GABUT',
						link:'/post/hikayat.html'
					},
					'post2':{
						img:'https://media.hitekno.com/thumbs/2019/10/24/96431-percakapan-imajiner-dua-kucing-gemas-twitterinuurl/350x230-img-96431-percakapan-imajiner-dua-kucing-gemas-twitterinuurl.jpg',
						title:'Galeri',
						description:`
						 galeri foto apa aja`,
						category:'PERSONAL',
						 link:'/post/galeri.html'
					},
					'post5':{
						img:'https://cdn2.feedme.id/media/post/small/54708-inilah-sosok-asli-nurhadi-aldo-tukang-pijat-dan-politikus-sungguhan.jpg',
						title:'Tentang Saya',
						description:`
							Hi You, I luv luv u`,
						category:'ABOUT',
						link:'post/about.html'
					}
				}
			}
		}
	}

	
</script>

<style scoped>
/**/
*{transition: 0.4s;scroll-behavior: smooth;font-family: Open Sans}
a{text-decoration:none!important;color: #333}
/**/
#header{
	padding: 4em
}

.desc{
	padding: 1.5em;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	margin-top: -1em;
	z-index: 1;
}

.desc .text-desc{
	margin-left: 1em;
	font-family: Google Sans;
	border-left: 3px solid blue;
	padding-left: 1em
}

.img{
	text-align: center;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	width: 100%;
	height:25%;
}

.blog{
	margin-top: 1em;
	transform: scale(0.8);
	border-radius: 8px;
	box-shadow: 0 0 50px #dadada;
}
.blog:hover{
	transform: scale(0.9);
}
</style>
