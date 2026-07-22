<template>
  <q-page class="symptoms-page">
    <section class="hero">
      <button class="back-btn" @click="goBack">
        ← Volver
      </button>

      <div class="hero-emoji">🤔</div>

      <h1>¿Reconocés alguna de estas señales?</h1>

      <p>
        Deslizá las tarjetas y fijate si alguna de estas situaciones te resulta familiar.
      </p>
    </section>

    <section class="carousel-section">
      <div class="dots">
        <span
          v-for="(item, index) in sintomas"
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
        ></span>
      </div>

      <q-card class="symptom-card" :class="sintomas[currentIndex].cardClass" flat>
        <div class="symptom-emoji">{{ sintomas[currentIndex].emoji }}</div>

        <h2>{{ sintomas[currentIndex].title }}</h2>

        <p>
          {{ sintomas[currentIndex].description }}
        </p>
      </q-card>

      <div class="navigation-row">
        <button
          class="nav-btn nav-btn-light"
          @click="prevCard"
          :disabled="currentIndex === 0"
        >
          ‹
        </button>

        <div class="counter">
          {{ currentIndex + 1 }} de {{ sintomas.length }}
        </div>

        <button
          class="nav-btn nav-btn-main"
          @click="nextCard"
          :disabled="currentIndex === sintomas.length - 1"
        >
          ›
        </button>
      </div>

        <div class="info-box warning-box">
        <div class="warning-icon">⚠️</div>

        <h3>Estas señales no confirman un diagnóstico.</h3>

        <p>
          Pero si varias de estas situaciones te pasan seguido, es importante
          consultar en el centro de salud o con un profesional.
        </p>
        </div>

      <div class="info-link" @click="router.push('/diabetes')">
  <div class="info-link-content">
    <span class="info-link-icon">🩺</span>
    <div>
      <p class="info-link-title">¿Querés saber qué está pasando en tu cuerpo?</p>
      <p class="info-link-sub">Conocé más sobre la diabetes tipo 2 →</p>
    </div>
  </div>
</div>

    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentIndex = ref(0)

const sintomas = [
  {
    emoji: '🥵',
    title: '¿Tenés mucha sed todo el tiempo?',
    description: 'Tomás agua y agua y sentís que nunca alcanza.',
    cardClass: 'cream-card'
  },
  {
    emoji: '🚽',
    title: '¿Vas al baño muchas veces al día?',
    description: 'Más de lo normal, incluso de noche.',
    cardClass: 'blue-card'
  },
  {
    emoji: '😴',
    title: '¿Te sentís cansado/a sin razón clara?',
    description: 'Aunque descanses, te falta energía para las tareas de todos los días.',
    cardClass: 'soft-yellow-card'
  },
  {
    emoji: '🍽️',
    title: '¿Tenés más hambre de lo habitual?',
    description: 'Comés, pero igual sentís hambre o necesidad de volver a comer.',
    cardClass: 'green-card'
  },
  {
    emoji: '👀',
    title: '¿Notás visión borrosa por momentos?',
    description: 'A veces cuesta enfocar o sentís la vista más cansada.',
    cardClass: 'pink-card'
  },
  {
    emoji: '⚖️',
    title: '¿Bajaste de peso sin proponértelo?',
    description: 'Sin hacer dieta ni cambios importantes, tu cuerpo se ve distinto.',
    cardClass: 'sand-card'
  }
]

function nextCard() {
  if (currentIndex.value < sintomas.length - 1) {
    currentIndex.value++
  }
}

function prevCard() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

function goBack() {
  router.back()
}


</script>

<style scoped>
.symptoms-page {
  min-height: 100vh;
  background: #f8f1e8;
  font-family: 'Trebuchet MS', 'Segoe UI', sans-serif;
  color: #4a2b17;
}

.hero {
  background: linear-gradient(145deg, #5a2d10 0%, #8a491d 50%, #c35f26 100%);
  color: white;
  padding: 26px 24px 34px;
}

.back-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  margin-bottom: 28px;
  cursor: pointer;
}

.hero-emoji {
  font-size: 52px;
  margin-bottom: 20px;
}

.hero h1 {
  font-size: 28px;
  line-height: 1.15;
  margin: 0 0 14px;
  font-weight: 900;
}

.hero p {
  margin: 0;
  font-size: 17px;
  line-height: 1.5;
  color: #fdf1e7;
}

.carousel-section {
  padding: 26px 24px 40px;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 22px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e8d6b7;
}

.dot.active {
  width: 34px;
  border-radius: 20px;
  background: #c86421;
}

.symptom-card {
  border-radius: 28px;
  padding: 36px 26px;
  text-align: center;
  min-height: 350px;
  border: 2px solid rgba(201, 128, 53, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.symptom-emoji {
  font-size: 62px;
  margin-bottom: 22px;
}

.symptom-card h2 {
  font-size: 27px;
  line-height: 1.2;
  margin: 0 0 20px;
  font-weight: 900;
  color: #3f2415;
}

.symptom-card p {
  font-size: 18px;
  line-height: 1.6;
  margin: 0;
  color: #6a442a;
}

.navigation-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 26px 0 28px;
}

.nav-btn {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: none;
  font-size: 38px;
  cursor: pointer;
}

.nav-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.nav-btn-light {
  background: #efe6d8;
  color: #d4bfa2;
}

.nav-btn-main {
  background: #c86421;
  color: white;
}

.counter {
  font-size: 18px;
  font-weight: 800;
  color: #8c5a31;
}

.info-box {
  border-radius: 22px;
  padding: 24px 20px;
  text-align: center;
  margin-bottom: 24px;
}

.warning-box {
  background: #fde8e8;
  border: 2px solid #de6a6a;
  box-shadow: 0 4px 12px rgba(160, 50, 50, 0.08);
}

.warning-icon {
  font-size: 34px;
  margin-bottom: 12px;
}

.warning-box h3 {
  font-size: 18px;
  line-height: 1.4;
  margin: 0 0 10px;
  font-weight: 900;
  color: #8f1f1f;
}

.warning-box p {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: #9c3a3a;
}

.more-btn {
  width: 100%;
  border: none;
  border-radius: 22px;
  padding: 20px;
  background: linear-gradient(135deg, #d46827 0%, #e88759 100%);
  color: white;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
}

.cream-card {
  background: #f6ecd8;
  border-color: #efc06d;
}

.blue-card {
  background: #dfeaf7;
  border-color: #8bbcf3;
}

.soft-yellow-card {
  background: #f8efc7;
  border-color: #e4ca68;
}

.green-card {
  background: #e0efdc;
  border-color: #9ec28e;
}

.pink-card {
  background: #f9e1df;
  border-color: #e4a4a0;
}

.sand-card {
  background: #f2e2ce;
  border-color: #d8b082;
}

.info-link {
  margin-top: 10px;
  border-radius: 22px;
  padding: 20px;
  background: linear-gradient(135deg, #d46827 0%, #e88759 100%);
  cursor: pointer;
  transition: transform 0.15s;
}

.info-link:active {
  transform: scale(0.98);
}

.info-link-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.info-link-icon {
  font-size: 36px;
  flex-shrink: 0;
}

.info-link-title {
  margin: 0 0 4px;
  font-size: 17px;
  font-weight: 900;
  color: white;
  line-height: 1.3;
}

.info-link-sub {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: rgba(255,255,255,0.85);
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