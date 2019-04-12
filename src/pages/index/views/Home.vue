<template>
	<div class="home">
		<p>{{ msg }}</p>
		<svg-icon icon-class="right-circle"/>
		<svg-icon class="red" icon-class="smile"/>
		<svg-icon icon-class="left-circle"/>
		<p>
			<c-button @click.native="sss">submit</c-button>
		</p>
	</div>
</template>

<script>
import CButton from './components/CButtom'
export default {
	name: "home",
	components:{
		CButton
	},
	data() {
		return {
			msg: "home"
		};
	},
	async created() {
		await this.init();
	},
	methods: {
		sss(e){
			console.log(e,111)
		},
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

