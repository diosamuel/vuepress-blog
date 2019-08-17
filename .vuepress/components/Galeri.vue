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
			<img src="../file/teman.jpg">
			<p class="desc">Temen SMP yang bikin ane Sengsara :v</p>
		</div>
		<div class="foto">
			<img src="../file/sip.jpg">
			<p class="desc">luv</p>
		</div>
		<div class="foto">
			<img src="https://media.tenor.com/images/a9adda18a785b1cb85eec04517d99178/tenor.gif"/>
			<p class="desc">Lu siapa asw</p>
		</div>
		<br>
		<hr>
		<p style="text-align: center;">Virdio Samuel - {{new Date().getFullYear()}}</p>
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