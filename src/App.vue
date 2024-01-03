<template>
  <v-app>
		<v-app-bar color="#06d7a0" app>
			<div class="w-100 d-flex align-center justify-space-between container">
				<v-btn variant="plain" height="46" :to="{ name: 'home' }" style="opacity: 1">
					<v-img height="46" width="46" :src="imgUrl" alt="Logo SouJunior" />
					<h1 class="title ml-3">Salvando o Labs</h1>
				</v-btn>
				<div class="d-flex align-center ga-2">
					<v-btn text :to="{ name: 'home' }">Home</v-btn>
					<v-btn v-if="!user.getName" text :to="{ name: 'registry' }">Registro</v-btn>
					<v-btn v-if="!user.getName" text :to="{ name: 'login' }">Login</v-btn>
					<v-btn v-if="user.getName" text :to="{ name: 'products' }">Produtos</v-btn>
					<v-btn v-if="user.getName" text :to="{ name: 'squads' }">Squads</v-btn>
					<!-- Custom Dropdown -->
					<v-menu v-if="user.getName" open-on-hover>
						<template v-slot:activator="{ props }">
							<v-btn text v-bind="props">
								{{ user.getName }}
								<v-icon icon="$vuetify"></v-icon>
								<v-icon right>mdi-chevron-down</v-icon>
							</v-btn>
						</template>
						
						<v-list>
							<v-list-item link :to="{ name: 'profile' }">
								<v-list-item-title>Profile</v-list-item-title>
							</v-list-item>
							<v-list-item link :to="{ name: 'home' }">
								<v-list-item-title>Logout</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</div>
			</div>
		</v-app-bar>

		<transition name="fade" mode="out-in">
			<v-main class="d-flex flex-grow-1 my-6 container">
				<RouterView />
			</v-main>
		</transition>

		<v-footer class="d-flex flex-grow-0" color="#06d7a0" padless>
			<v-row class="d-flex justify-center gc-16 container" no-gutters>
				<v-col cols sm="6" md="3" class="text-center">
					<h3>Navegação</h3>
					<v-list bg-color="#06d7a0" dense>
						<v-list-item :to="{ name: 'home' }" link>
							<v-list-item-content color="#06d7a0">Home</v-list-item-content>
						</v-list-item>
						<!-- More links -->
					</v-list>
				</v-col>
				<v-col cols="12" sm="6" md="3" class="text-center">
					<h3>Midias Sociais</h3>
					<v-list bg-color="#06d7a0" dense>
						<v-list-item href="https://www.linkedin.com/company/soujunior-labs/" link>
							<v-list-item-content>Linkedin</v-list-item-content>
						</v-list-item>
					</v-list>
				</v-col>
				<!-- Additional columns for more content -->
			</v-row>
		</v-footer>
  </v-app>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

import imgUrl from '@/assets/logo-min.png'
const isLoggedIn = ref(false) // Use ref for reactive primitives
const userName = ref('Alice')
const { user } = useUserStore()
</script>

<style scoped lang="scss">
.title {
	font-size: 24px;
  font-weight: 600;
  color: white;
  text-shadow: rgb(0, 146, 107) 1px 0 10px;
}

.container {
	margin-left: 120px;
	margin-right: 120px;
}
</style>
