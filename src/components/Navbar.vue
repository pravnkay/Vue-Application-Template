<template>
	<section>
		<section class="sidebar z-30 position-fixed vh-100 d-flex flex-column top-0 bottom-0 bg-white" v-bind:class="{ 'is-open': isOpen }">
			<div class="sidebar-brand z-30 d-flex align-items-center justify-content-center flex-shrink-0 box-shadow text-primary">
				<a class="">
					<span class="hidden-folded inline">In Detail</span>
				</a>
			</div>
			<div class="sidebar-scroll flex-grow-1 overflow-y-auto">
				<div class="sidebar-menu">
					<ul class="list-unstyled">
						<router-link :to="{ name: 'indetail' }" tag="li" exact>
							<a><unicon class="pr-3 font-light align-middle" name="home-alt" fill="#000" />Home</a>
						</router-link>
						<router-link :to="{ name: 'dashboard' }" tag="li">
							<a><unicon class="pr-3 font-light align-middle" name="home-alt" fill="#000" />Dashboard</a>
						</router-link>
						<router-link :to="{ name: 'appAbout' }" tag="li">
							<a><unicon class="pr-3 font-light align-middle" name="home-alt" fill="#000" />About</a>
						</router-link>
						<li class="">
							<a class="dropdown-link" href="javascript:;" @click='isDown = !isDown' v-bind:class="{ open: isDown }">
								<unicon class="pr-3 font-light align-middle" name="search" fill="#000" />Dropdown
								<unicon class="pl-3 font-light align-middle" name="angle-left" fill="#000" v-if='!isDown'/>
								<unicon class="pl-3 font-light align-middle" name="angle-down" fill="#000" v-if='isDown'/>
							</a>
							<ul id="dropdown-list" class="p-0" v-bind:class="{ open: isDown }">
								<li>
									<a href="javascript:;">
										<unicon class="pr-3 font-light align-middle" name="link" fill="#464646" width="18px" />Page</a>
								</li>
								<li>
									<a href="javascript:;">
										<unicon class="pr-3 font-light align-middle" name="link" fill="#464646" width="18px" />Page</a>
								</li>
								<li>
									<a href="javascript:;">
										<unicon class="pr-3 font-light align-middle" name="link" fill="#464646" width="18px" />Page</a>
								</li>
							</ul>
						</li>
					</ul>
					<span class="menu-heading">Dummy Menu</span>
					<ul class="list-unstyled">
						<li>
							<a href="javascript:;">
								<i class="fal fa-flask"></i>Demo
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<i class="fal fa-desktop"></i>Demo
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<i class="fal fa-envelope"></i>Demo
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<i class="fal fa-image"></i>Demo
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<i class="fal fa-image"></i>Demo
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<i class="fal fa-image"></i>Demo
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<i class="fal fa-image"></i>Demo
							</a>
						</li>
					</ul>
				</div>
			</div>
			<b-row class="box-shadow-top bottom-0 d-flex align-items-center justify-content-center font-weight-bold bg-white sidebar-footer">
				<b-col cols="4" class="pr-0">
					<span class="flex justify-center">
						<b-img src="@/assets/img/user-icon.png" alt="..." class="w-100"> </b-img>
					</span>
				</b-col>
				<b-col cols="8" class="">
					<div class="username overflow-hidden" >
						usernamefdgdfgdfdfd
					</div>
					<div class="w-full overflow-hidden text-xs">
						<unicon class="pr-2 font-light align-middle" name="check-circle" fill="#057509" width="18px" />Online
					</div>
				</b-col>
			</b-row>
			<div>
				<i class="overlay-close fal fa-times-circle"></i>
			</div>
		</section>

		<section class="top-bar box-shadow d-flex align-items-center justify-content-center bg-white z-20">
			<div class="top-bar-content container-fluid">
				<b-row>
					<div id="sidebar_trigger" class="col-auto d-flex align-items-center d-lg-none" @click='isOpen = !isOpen'>
						<unicon class="mx-auto" name="bars" fill="#000" />
					</div>
					<b-col>
						<b-row>
							<div class="page-heading d-flex">
								<h3 class="my-auto">Dashboard</h3>
							</div>
							<!-- <b-col cols="col-auto ml-auto">
								<div class="w-full text-xs">
									
								</div>
							</b-col> -->
							<div class="col-auto ml-auto mr-3">
								<ul class="nav-menu list-unstyled d-flex flex-md-row h-100 align-items-center">
									<li class="nav-item">
										<!-- <a class="cursor-pointer" @click=logout v-if="isLoggedIn"> </a> -->
										<a @click=logout v-if="isLoggedIn" class="cursor-pointer" >
											<unicon class="pr-0 font-light" name="sign-out-alt" fill="#d32f2f" width="28px" />
											Sign Out
										</a>
									</li>
								</ul>
							</div>
						</b-row>
					</b-col>
				</b-row>
			</div>
		</section>

		<section class="sidebar-overlay z-50 bg-dark position-fixed top-0 bottom-0 right-0" @click='isOpen = !isOpen' v-bind:class="{'visible': isOpen}"></section>

	</section>
</template>

<script>
import firebase from 'firebase'
// import Swal from 'sweetalert2'

export default {
  name: "Navigation",
  data() {
    return{
      isDown : false,
			isOpen : false,
			isLoggedIn: false,
      currentUser: false,
			arrow : 'angle-left'
    }
  },
  watch: {
    isOpen: function () {
      document.body.style.overflow = this.isOpen ? 'hidden' : ''
    }
	},
	created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
			this.currentUser = firebase.auth().currentUser.email;
		}
		
		firebase.auth().onAuthStateChanged(function(user) { 
			if(user){
				window.console.log('newsigning'); 
			}
		});

  },
	methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script>

<style>

@import '../assets/css/dashboard-skeleton.css';
@import '../assets/css/dashboard-skeleton-responsive.css';

</style>