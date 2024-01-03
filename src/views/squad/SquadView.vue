<template>
	<v-container>
		<v-sheet class="pa-4 rounded-lg mb-4">
			<h1 class="mb-8">Editar {{ squadItem.title }}</h1>
			<v-form>
				<div class="d-flex align-items-center ga-8">
					<div>
						<v-avatar
						 size="140"
						>
						 <v-img
							 :src="squadItem.prependAvatar"
							 alt="Foto da squad"
						 ></v-img>
					 </v-avatar>
					</div>
					<div class="w-100">
						<v-text-field v-model="squadItem.title" label="Título"></v-text-field>
						<v-text-field v-model="squadItem.subtitle" label="Descrição"></v-text-field>
					</div>
				</div>
				<div class="mt-8 d-flex align-center ga-4">
					<v-btn
						color="primary"
					>
						Salvar alterações
					</v-btn>
					<v-btn
						color="tertiary"
						@click="cancel"
					>
						Cancelar
					</v-btn>
				</div>
			</v-form>
		</v-sheet>
	</v-container>
</template>

<script setup>
import { useSquadStore } from '../../stores/squad';
import { useRouter } from 'vue-router';

const squadStore = useSquadStore();
const squadItem = squadStore.squadItem;

const router = useRouter();

function cancel() {
	router.back();
}
</script>
