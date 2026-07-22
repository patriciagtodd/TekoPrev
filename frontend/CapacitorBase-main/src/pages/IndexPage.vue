<template>
  <q-page class="home-page">
    <section class="hero">
      <div class="hero-circle hero-circle-top"></div>
      <div class="hero-circle hero-circle-bottom"></div>

      <div class="hero-content">
        <div class="tag">Salud familiar</div>
        <h1>Cuidarnos entre todos</h1>
        <p>"Sentirse mal no tiene por qué ser algo normal"</p>
      </div>
    </section>

    <section class="content">
      <h2>¿Qué aprenderemos hoy?</h2>

      <div class="cards-list">

        <!-- CARD SÍNTOMAS CON CARRUSEL -->
        <q-card class="menu-card card-orange" flat @click="goTo('/sintomas')">
          <div class="card-arrow">→</div>

          <div class="card-icon">🤔</div>

          <div class="card-text">
            <h3>¿Te pasó alguna vez que...</h3>
          </div>

          <!-- Mini carrusel de síntomas -->
          <div class="sintoma-strip" @click.stop="nextSintoma">
            <span class="sintoma-emoji">{{ sintomaActual.emoji }}</span>
            <span class="sintoma-texto">{{ sintomaActual.title }}</span>
            <span class="sintoma-nav">›</span>
          </div>

          <!-- Puntitos -->
          <div class="sintoma-dots">
            <span
              v-for="(_, i) in sintomas"
              :key="i"
              class="sintoma-dot"
              :class="{ active: i === sintomaIndex }"
            ></span>
          </div>
        </q-card>

        <!-- RESTO DE CARDS -->
        <q-card
          v-for="card in otrasCards"
          :key="card.title"
          class="menu-card"
          :class="card.class"
          flat
          @click="goTo(card.route)"
        >
          <div class="card-icon">{{ card.icon }}</div>
          <div class="card-arrow">→</div>
          <div class="card-text">
            <h3>{{ card.title }}</h3>
            <p>{{ card.subtitle }}</p>
          </div>
        </q-card>

      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const sintomas = [
  { emoji: '🥵', title: '¿Tenés mucha sed todo el tiempo?' },
  { emoji: '🚽', title: '¿Vas al baño muchas veces al día?' },
  { emoji: '😴', title: '¿Te sentís cansado/a sin razón clara?' },
  { emoji: '🍽️', title: '¿Tenés más hambre de lo habitual?' },
  { emoji: '👀', title: '¿Notás visión borrosa por momentos?' },
  { emoji: '⚖️', title: '¿Bajaste de peso sin proponértelo?' },
]

const sintomaIndex = ref(0)
const sintomaActual = computed(() => sintomas[sintomaIndex.value])

function nextSintoma() {
  sintomaIndex.value = (sintomaIndex.value + 1) % sintomas.length
}

// Rotación automática cada 3 segundos
let intervalo = null
onMounted(() => {
  intervalo = setInterval(nextSintoma, 3000)
})
onUnmounted(() => {
  clearInterval(intervalo)
})

const otrasCards = [
  {
    title: 'Comida',
    subtitle: '¿No sabés qué comer? Acá te mostramos opciones.',
    icon: '🥄',
    route: '/alimentacion',
    class: 'card-green'
  },
  {
    title: 'Consejos útiles',
    subtitle: 'Pequeñas acciones que ayudan mucho.',
    icon: '✨',
    route: '/higiene',
    class: 'card-sand'
  },
]

function goTo(route) {
  router.push(route)
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: #fbf3e8;
  color: #ffffff;
  font-family: 'Trebuchet MS', 'Segoe UI', sans-serif;
}

.hero {
  position: relative;
  overflow: hidden;
  min-height: 420px;
  padding: 62px 30px 38px;
  background: linear-gradient(145deg, #52280f 0%, #8d4a1e 55%, #d46228 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 520px;
}

.tag {
  display: inline-block;
  background: rgba(239, 173, 87, 0.35);
  color: #ffd889;
  padding: 11px 24px;
  border-radius: 999px;
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 28px;
}

.hero h1 {
  font-size: 38px;
  line-height: 1.15;
  font-weight: 900;
  margin: 0 0 18px;
  max-width: 440px;
}

.hero p {
  font-size: 22px;
  line-height: 1.45;
  margin: 0;
  color: #fff5eb;
  max-width: 440px;
}

.hero-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 224, 177, 0.12);
}

.hero-circle-top {
  width: 210px;
  height: 210px;
  top: -35px;
  right: -45px;
}

.hero-circle-bottom {
  width: 150px;
  height: 150px;
  bottom: -70px;
  left: -35px;
}

.content {
  padding: 34px 28px 46px;
  color: #7a4925;
}

.content h2 {
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0 0 18px;
  font-weight: 900;
}

.cards-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.menu-card {
  position: relative;
  min-height: 205px;
  border-radius: 30px;
  padding: 30px;
  overflow: hidden;
  cursor: pointer;
  color: white;
  box-shadow: 0 8px 18px rgba(99, 55, 25, 0.16);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.menu-card:active {
  transform: scale(0.98);
  box-shadow: 0 4px 10px rgba(99, 55, 25, 0.18);
}

.card-icon {
  width: 74px;
  height: 74px;
  border-radius: 22px;
  background: rgba(255, 235, 214, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  margin-bottom: 14px;
}

.card-arrow {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 232, 214, 0.28);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 900;
}

.card-text h3 {
  margin: 0 0 8px;
  font-size: 27px;
  line-height: 1.1;
  font-weight: 900;
}

.card-text p {
  margin: 0;
  font-size: 19px;
  line-height: 1.35;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.92);
}

/* ── MINI CARRUSEL DE SÍNTOMAS ── */
.sintoma-strip {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
  background: rgba(255, 235, 214, 0.22);
  border-radius: 16px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.sintoma-strip:active {
  background: rgba(255, 235, 214, 0.38);
}

.sintoma-emoji {
  font-size: 26px;
  flex-shrink: 0;
}

.sintoma-texto {
  font-size: 15px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  flex: 1;
  line-height: 1.3;
}

.sintoma-nav {
  font-size: 22px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.7);
  flex-shrink: 0;
}

.sintoma-dots {
  display: flex;
  gap: 6px;
  margin-top: 10px;
  justify-content: center;
}

.sintoma-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  transition: all 0.3s;
}

.sintoma-dot.active {
  width: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.9);
}

/* ── COLORES DE CARDS ── */
.card-orange {
  background: linear-gradient(135deg, #d76227 0%, #ed8152 100%);
}

.card-green {
  background: linear-gradient(135deg, #729b70 0%, #5f947f 100%);
}

.card-sand {
  background: linear-gradient(135deg, #dfa653 0%, #ef7f52 100%);
}

@media (min-width: 700px) {
  .home-page {
    max-width: 100%;
    margin: 0;
  }

  .hero {
    min-height: 45vh;
    padding: 80px 60px 50px;
  }

  .hero h1 { font-size: 48px; }
  .hero p  { font-size: 24px; }

  .content {
    padding: 40px 60px 60px;
  }

  .cards-list {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .menu-card {
    flex: 1 1 calc(50% - 10px);
    min-width: 280px;
  }
}

</style>