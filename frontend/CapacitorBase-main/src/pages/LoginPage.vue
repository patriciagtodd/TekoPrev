<template>
  <q-page class="flex flex-center">
   <q-card style="width:350px">
    <q-card-section class="text-center">
     <div class="text-h6 text teal">Iniciar sesión</div>
    </q-card-section>

    <q-card-section>
      <q-input v-model="usuario" label="Usuario" />
      <q-input v-model="contrasena" label="Contraseña" type="password" class="q-mt-md" /> 
    </q-card-section>
   
    <q-card-actions aling="center">
      <q-btn label="Ingresar" color="teal" @click="login"/>
    </q-card-actions>
  </q-card>
  </q-page>
</template>

<script setup>

import {ref} from 'vue';
import {useRouter} from 'vue-router';
import axios from 'axios';
import {Notify} from 'quasar';


const usuario= ref('');
const contrasena= ref('');
const router= useRouter();

const loading= ref(false)


const login= async () => {
  loading.value=true 
  try{
    const response = await axios.post('http://localhost:3001/api/login', {username: usuario.value, password: contrasena.value})
    const data = response.data
    localStorage.setItem('username', usuario.value)
    localStorage.setItem( 'token', data.token)

    Notify.create({
      type: 'positive',
      message: `Bienvenido ${usuario.value}`
    })

    router.push('/')
  }catch(error) {
    const errorMessage = error.response?.data?.message || ' Credenciales inválidas'
    Notify.create ({
      type: 'negative',
      message: errorMessage
    })

  }finally {
   loading.value = false 
  }

}
</script>
