<template>
	<div class="home">
		<img alt="Vue logo" src="../../../assets/logo.png">
		<p>{{ msg }}</p>
		<svg-icon icon-class="right-circle"/>
		<svg-icon class="red" icon-class="left-circle"/>
		<svg-icon icon-class="smile"/>
	</div>
</template>

<script>
export default {
	name: "home",
	data() {
		return {
			msg: "msg"
		};
	},
	async created() {
		await this.init();
	},
	methods: {
		init() {
			return new Promise(resolve => {
				setTimeout(() => {
					this.msg = "111";
					resolve();
				}, 1000);
			});
		}
	}
};
</script>
<style>
.home {
	font-size: 30px;
}
.red {
	color: red;
}
</style>

