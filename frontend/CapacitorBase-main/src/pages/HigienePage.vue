<template>
  <q-page class="tips-page">
    <section class="hero">
      <button class="back-btn" @click="goBack">
        ← Volver
      </button>

      <div class="hero-icon">✨</div>

      <h1>Consejos útiles</h1>

      <p>
        Pequeños cambios que hacen una gran diferencia.
      </p>
    </section>

    <section class="content">
      <div
        v-for="tip in consejos"
        :key="tip.titulo"
        class="tip-card"
        :class="tip.class"
      >
        <div class="tip-icon">{{ tip.icono }}</div>

        <h2>{{ tip.titulo }}</h2>

        <p>{{ tip.texto }}</p>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.back()
}

const consejos = [
  {
    titulo: 'Moverse un poco cada día',
    texto:
      'No hace falta ir al gimnasio. Caminar 20 o 30 minutos al día ayuda mucho al cuerpo. Con la familia es más divertido.',
    icono: '🚶',
    class: 'green-card'
  },
  {
    titulo: 'Tomar agua durante el día',
    texto:
      'El agua ayuda al cuerpo a funcionar bien. Tratá de tomar varios vasos durante el día, sobre todo en los días de calor.',
    icono: '💧',
    class: 'blue-card'
  },
  {
    titulo: 'Descansar bien de noche',
    texto:
      'Dormir bien ayuda a controlar el azúcar. Intentá acostarte siempre a la misma hora.',
    icono: '😴',
    class: 'purple-card'
  },
  {
    titulo: 'Pedir ayuda cuando la necesitás',
    texto:
      'Cuidarse no es tarea de uno solo. La familia, los vecinos y el centro de salud están para ayudar.',
    icono: '🤝',
    class: 'yellow-card'
  },
  {
    titulo: 'Ir al control médico',
    texto:
      'Aunque te sientas bien, el control periódico ayuda a detectar cambios a tiempo. No esperes a sentirte mal.',
    icono: '🗓️',
    class: 'pink-card'
  },
  {
    titulo: 'Empezar de a poco',
    texto:
      'No hace falta cambiar todo de golpe. Un cambio pequeño cada semana ya es un gran paso. Tu cuerpo lo va a notar.',
    icono: '🌞',
    class: 'violet-card'
  }
]
</script>

<style scoped>
.tips-page {
  min-height: 100vh;
  background: #fbf3e8;
  font-family: 'Trebuchet MS', 'Segoe UI', sans-serif;
  color: #3d1d0d;
}

.hero {
  background: linear-gradient(145deg, #d89a43 0%, #ef8458 100%);
  color: white;
  padding: 30px 26px 36px;
}

.back-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 30px;
  cursor: pointer;
  padding: 0;
}

.hero-icon {
  font-size: 48px;
  margin-bottom: 18px;
}

.hero h1 {
  font-size: 34px;
  line-height: 1.1;
  margin: 0 0 12px;
  font-weight: 900;
}

.hero p {
  font-size: 19px;
  line-height: 1.4;
  margin: 0;
  color: #fff8ef;
}

.content {
  padding: 30px 24px 44px;
}

.tip-card {
  border-radius: 26px;
  padding: 28px 24px;
  margin-bottom: 22px;
  border: 2px solid;
}

.tip-icon {
  font-size: 38px;
  margin-bottom: 22px;
}

.tip-card h2 {
  margin: 0 0 14px;
  font-size: 22px;
  line-height: 1.25;
  font-weight: 900;
  color: #2d160a;
}

.tip-card p {
  margin: 0;
  font-size: 18px;
  line-height: 1.6;
  color: #69391d;
}

.green-card {
  background: #e8f5e8;
  border-color: #8fcf9a;
}

.blue-card {
  background: #e5f4ff;
  border-color: #83c8ff;
}

.purple-card {
  background: #eee5f7;
  border-color: #d58ee7;
}

.yellow-card {
  background: #fff8df;
  border-color: #f3c75f;
}

.pink-card {
  background: #fde7ef;
  border-color: #ff86ae;
}

.violet-card {
  background: #f3e6f7;
  border-color: #cc8bdc;
}

@media (min-width: 700px) {
  .tips-page {
    max-width: 620px;
    margin: 0 auto;
  }
}
</style>