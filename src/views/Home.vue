<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
			<div class="container">
				<a class="navbar-brand text-primary font-weight-bold" href="#">In Detail</a>
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<router-link class="nav-link" :to="{ name: 'login'}">Application</router-link>
						</li>
					</ul>
			</div>
		</nav>

		<!-- Full Page Image Header with Vertically Centered Content -->
		<header class="masthead vh-100">
			<div class="container h-100">
				<div class="row h-100 align-items-center">
					<div class="col-12 text-center">
						<h1 class="font-weight-light">Vertically Centered Masthead Content</h1>
						<p class="lead">A great starter layout for a landing page</p>
						<p class="lead">Test 3</p>
					</div>
				</div>
			</div>
		</header>

		<!-- Page Content -->
		<section class="py-5">
			<div class="container">
				<h2 class="font-weight-light">Page Content</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem nisi officiis blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione cumque magnam enim fugiat reprehenderit expedita.</p>
			</div>
		</section>
	</div>
</template>

<style scoped>
.masthead {
  height: 100vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>