<template>
  <v-container>
    <v-sheet class="py-4 rounded-lg mb-4">
      <div class="px-4 d-flex align-center justify-space-between">
        <h1>Minha Squad</h1>
        <v-btn  color="#06d7a0" prepend-icon="mdi-account-group" size="large" :to="{ name: 'squad-create' }">
          <template v-slot:prepend>
            <v-icon color="white"></v-icon>
          </template>
          <span class="text-white font-weight-bold">Criar squad</span>
        </v-btn>
      </div>
      <v-list-item
        v-for="(item, index) in mySquad"
        :key="index"
        @click="squadStore.setSquadItem(item), navigateToSquad(item.id)"
        :prepend-avatar="item.prependAvatar"
        lines="three"
      >
        <v-list-item-title v-text="item.title"></v-list-item-title>
        <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
      </v-list-item>
    </v-sheet>
		<v-sheet class="py-4 rounded-lg">
      <h2 class="px-4">Squads da comunidade</h2>
      <v-list-item
        v-for="(item, index) in squad"
        :key="index"
        @click="squadStore.setSquadItem(item), navigateToSquad(item.id)"
        :prepend-avatar="item.prependAvatar"
        lines="three"
      >
        <v-list-item-title v-text="item.title"></v-list-item-title>
        <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
      </v-list-item>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useSquadStore } from '../../stores/squad';
import { useRouter } from 'vue-router';

const squadStore = useSquadStore();
const router = useRouter();

function navigateToSquad(id) {
  router.push(`/squad/${id}`);
}

const mySquad = ref([
  {
    id: 1,
    title: 'Minha Squad',
    prependAvatar: `https://picsum.photos/600?random=${Math.random()}`,
    subtitle: 'Descrição da minha squad',
  },
]);

const squad = ref([
  {
    id: 2,
    title: 'Squad 1',
    prependAvatar: `https://picsum.photos/600?random=${Math.random()}`,
    subtitle: 'Descrição da Squad 1',
  },
  {
    id: 3,
    title: 'Squad 2',
    prependAvatar: `https://picsum.photos/600?random=${Math.random()}`,
    subtitle: 'Descrição da Squad 2',
  },
  {
    id: 4,
    title: 'Squad 3',
    prependAvatar: `https://picsum.photos/600?random=${Math.random()}`,
    subtitle: 'Descrição da Squad 3',
  },
  {
    id: 5,
    title: 'Squad 4',
    prependAvatar: `https://picsum.photos/600?random=${Math.random()}`,
    subtitle: 'Descrição da Squad 4',
  },
  {
    id: 6,
    title: 'Squad 5',
    prependAvatar: `https://picsum.photos/600?random=${Math.random()}`,
    subtitle: 'Descrição da Squad 5',
  },
]);
</script>
