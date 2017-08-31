<template>
  	<div id="login">
		<div class="container">
		  	<div class="form-signin">
				<h2 class="form-signin-heading">{{ $t("Please_sign_in") }}</h2>
				<input 
				  type="checkbox"
				  v-model="lang"
				  :true-value="'tw'"
				  :false-value="'en'"
				  @change="setLanguage( lang )"
				  id="slideThree" />
				<label for="slideThree"></label>
				<label for="email" class="sr-only">Email address
					<input
					  v-model="email"
					  type="email"
					  id="email"
					  class="form-control"
					  :placeholder="$t('Email_address')" 
					  required autofocus />
			  	</label>
				<label for="inputPassword" class="sr-only">Password
					<!-- 
					  2. 在 password input 上面使用 v-toggle-password 帶入 checkbox 的 value
					-->
					<input
					  v-model="password"
					  v-toggle-password="togglePassword"
					  @keyup.enter="login"
					  type="password"
					  id="inputPassword"
					  class="form-control"
					  placeholder="Password" required />
					<!-- 1. check box 雙向綁定[布林] -->
				</label>
				<div class="squaredFour" style="margin: 20px 10px;">
				  	<input
					type="checkbox"
					v-model="togglePassword"
					id="togglePassword" />
				  	<label for="togglePassword" class="checkbox-icon"></label>
				  	<label for="togglePassword">顯示密碼</label>
				</div>
				<button 
				  	class="btn btn-lg btn-primary btn-block"
				  	type="submit"
				  	@click="login">
				  	Sign in
				</button>
				<br/>
		  	</div>
		</div>
  	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	data () {
		return {
		  lang: this.$store.state.lang, // get lang 預設值 `en`
		  togglePassword: false,
		  email: '',
		  password: '',
		}
	},
	methods: {
		...mapActions({
			setLanguage: 'setLanguage'
		}),
		login () {
			this.$store.dispatch('account/login', {
                    email: this.email,
                    password: this.password
                })
                .then((data) => { // 接收 resolve
                    alert('get Promise resolve', data);
                })
                .catch((error) => { // 接收 reject
                    alert('error get Promise reject!');
                });
		}
	}
}
</script>