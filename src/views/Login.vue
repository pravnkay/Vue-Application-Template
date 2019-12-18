<template>	
	<b-container class="vh-100">
		<b-row class="h-100">
			<b-col class="my-auto">			
				<b-row class="mt-auto">
					<b-col class="text-center">
						<h2>Sign in</h2>
						<p>to continue with application</p>
					</b-col>
				</b-row>
				<b-form>
					<b-row align-h="center">
						<b-col cols="8" lg="4">
							<b-form-group	id="input-group-1" label-for="input-1" description="Your data is safely stored with Google">
								<b-form-input	id="input-1" v-model="email" type="email" required placeholder="Enter email" />
							</b-form-group>
							<b-form-group	id="input-group-2" label-for="input-2">
								<b-form-input	id="input-2" v-model="password" type="password" required placeholder="Enter password" />
							</b-form-group>
						</b-col>
					</b-row>
					<b-row align-h="around">
						<b-col cols="8" lg="4" class="d-flex justify-content-between align-items-center">
							<b-button v-on:click="login" type="submit" variant="primary">Submit</b-button>
							<!-- <router-link :to="{ name: 'forgotpassword' }" class="text-primary small ml-auto">Forgot password ?</router-link> -->
							<a href="javadcript:;" class="text-primary small ml-auto">Forgot password ?</a>
						</b-col>
					</b-row>
					<b-row align-h="around">
						<b-col cols="8" lg="4" class="d-flex justify-content-between align-items-center pt-3">
							<router-link :to="{ name: 'register' }" class="text-primary small">Create Account</router-link>
						</b-col>
					</b-row>
					<b-row align-h="around">
						<b-col cols="8" lg="4" class="d-flex justify-content-between align-items-center pt-3">
							<router-link :to="{ name: 'home' }" class="text-primary small">Back to Home</router-link>
						</b-col>
					</b-row>
				</b-form>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import firebase from "firebase";
import NProgress from 'nprogress';
import Swal from 'sweetalert2'
export default {
  name: "login",
  components: {
    
  },
  data: function() {
    return {
      email: "",
      password: "",
			formfield_in_focus: 0,
    };
  },
  methods: {
    login: function(e) {
			NProgress.start()
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
						this.displayConfirmation()
						NProgress.done()
            window.console.log(`You are logged in as ${user.email}`)
            this.$router.go({ path: this.$router.path })
          },
          err => {
						NProgress.done()
            alert(err.message);
          }
				);
			e.preventDefault();
			
		},
		displayConfirmation: function(){
			Swal.fire({
				icon: 'success',
				title: 'Signed in successfully',
				toast: true,
				position: 'top-end',
				showConfirmButton: false,
				timer: 3000,
				timerProgressBar: true,
				onOpen: (toast) => {
					toast.addEventListener('mouseenter', Swal.stopTimer)
					toast.addEventListener('mouseleave', Swal.resumeTimer)
				}
			})
		}
  }
};
</script>