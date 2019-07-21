<template>
	<div>
		<h1>Galeri</h1>
		<p>Galeri foto</p>
		<div class="foto">
			<img src="../file/img1.jpg">
			<p class="desc">Adek</p>
		</div>
		<div class="foto">
			<img src="../file/yc.jpg">
			<p class="desc">Yellow Claw</p>
		</div>
		<div class="foto">
			<img src="../file/nyancat.gif">
			<p class="desc">Nyan Nyan Cat</p>
		</div>
		<div class="foto">
			<img src="https://services.lampungpro.id//fileload/1e1b6ea0-9af6-439e-8e8c-504174e9de26jpeg_XT8AQ.jpeg">
			<div class="desc">
				<p>Khoceng Oren</p>
				<em>" ora barbar ora oren "</em>
			</div>
		</div>
		<div class="foto">
			<img src="../file/teman.jpg">
			<p class="desc">Temen SMP yang bikin ane Sengsara</p>
		</div>
		
	</div>
</template>

<style scoped>
	.foto:hover{
		transition: 0.5s;
		transform: translateY(-1em);
	}
	.foto{
		transition: 0.5s;
		padding: 10px;
		border-radius: 10px;
		box-shadow: 1px 10px 2rem gray;
		margin-top:3rem;
	}
	.foto .desc{
		padding-bottom: 10px;
		text-align: center;
	}
	.foto img{
		width:50rem;
		height: 25%
	}
</style>
<script>

</script>