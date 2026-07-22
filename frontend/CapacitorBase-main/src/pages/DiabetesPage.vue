<template>
  <q-page class="diabetes-page">
    <section class="hero">
      <button class="back-btn" @click="goBack">
        ← Volver
      </button>

      <div class="tag">Información importante</div>

      <h1>¿Qué es la diabetes tipo 2?</h1>

      <p>
        Una explicación simple para entender qué pasa en el cuerpo y por qué es importante cuidarse.
      </p>
    </section>

    <section class="content">
      <div class="intro-card">
        <span class="mini-label">En pocas palabras</span>

        <h2>
          La diabetes tipo 2 ocurre cuando el azúcar queda más alta de lo normal en la sangre.
        </h2>
      </div>

      

      <div class="explain-list">
        <div class="explain-card">
          <div class="number-badge">1</div>

          <h3>Cuando comemos</h3>

          <p>
            Parte de la comida se transforma en azúcar dentro del cuerpo.
          </p>

          <div class="note-card">
            No solo los dulces tienen azúcar. También puede venir del pan, arroz,
            papa, fideos, frutas y otras comidas.
          </div>
        </div>

        <div class="explain-card">
          <div class="number-badge">2</div>

          <h3>El cuerpo usa esa azúcar</h3>

          <p>
            El cuerpo usa esa azúcar como energía para caminar, trabajar, pensar
            y hacer las actividades del día.
          </p>
        </div>

        <div class="explain-card alert-explain-card">
          <div class="number-badge">3</div>

          <h3>En la diabetes tipo 2</h3>

          <p>
            El cuerpo tiene dificultad para usar bien esa azúcar. Por eso puede quedar
            más alta de lo normal en la sangre.
          </p>
        </div>
      </div>

      <div class="green-box">
        <h3>¿Por qué es importante saberlo?</h3>

        <p>
          La diabetes tipo 2 no siempre se nota al principio. Conocer algunas señales,
          hacerse controles y consultar en el centro de salud ayuda a cuidar la salud.
        </p>
      </div>

      <h3 class="section-title">¿Qué ayuda a cuidarse?</h3>

      <div class="care-grid">
        <div class="care-card">
          <div class="care-icon">🥘</div>
          <p>Comer de forma equilibrada</p>
        </div>

        <div class="care-card">
          <div class="care-icon">🚶</div>
          <p>Moverse un poco cada día</p>
        </div>

        <div class="care-card">
          <div class="care-icon">🩺</div>
          <p>Hacerse controles de salud</p>
        </div>

        <div class="care-card">
          <div class="care-icon">💊</div>
          <p>Seguir la indicación médica</p>
        </div>
      </div>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>

        <h3>Esta app no reemplaza la consulta médica.</h3>

        <p>
          Sirve para aprender, reconocer señales y acompañar el cuidado diario.
        </p>
      </div>

      <button class="alert-btn" @click="goToSymptoms">
        Ver señales para prestar atención →
      </button>
    </section>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.back()
}

function goToSymptoms() {
  router.push('/sintomas')
}
</script>

<style scoped>
.diabetes-page {
  min-height: 100vh;
  background: #fbf3e8;
  font-family: 'Trebuchet MS', 'Segoe UI', sans-serif;
  color: #4a2b17;
}

.hero {
  background: linear-gradient(145deg, #5a2d10 0%, #8a491d 55%, #d46228 100%);
  color: white;
  padding: 28px 26px 42px;
}

.back-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 28px;
  cursor: pointer;
  padding: 0;
}

.tag {
  display: inline-block;
  background: rgba(239, 173, 87, 0.35);
  color: #ffd889;
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 24px;
}

.hero h1 {
  font-size: 34px;
  line-height: 1.15;
  margin: 0 0 16px;
  font-weight: 900;
}

.hero p {
  font-size: 19px;
  line-height: 1.45;
  margin: 0;
  color: #fff1e6;
}

.content {
  padding: 28px 24px 42px;
}

.intro-card {
  background: #fff7eb;
  border: 2px solid #edcf9d;
  border-radius: 28px;
  padding: 24px 22px;
  margin-bottom: 28px;
  box-shadow: 0 6px 14px rgba(107, 65, 28, 0.08);
}

.mini-label {
  display: inline-block;
  background: #f3dfbd;
  color: #8b551f;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 900;
  margin-bottom: 14px;
}

.intro-card h2 {
  margin: 0;
  font-size: 23px;
  line-height: 1.28;
  font-weight: 900;
  color: #4a2b17;
}

.section-title {
  font-size: 20px;
  margin: 0 0 16px;
  font-weight: 900;
  color: #6b3f1f;
}

.explain-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 26px;
}

.explain-card {
  background: white;
  border-radius: 24px;
  padding: 22px 20px 20px;
  box-shadow: 0 6px 14px rgba(107, 65, 28, 0.08);
}

.number-badge {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #f4bd4f;
  color: #6b3a12;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 16px;
  margin-bottom: 14px;
}

.explain-card h3 {
  margin: 0 0 10px;
  font-size: 20px;
  line-height: 1.25;
  font-weight: 900;
  color: #7a2f15;
}

.explain-card p {
  margin: 0;
  font-size: 16.5px;
  line-height: 1.5;
  color: #4f2c19;
}

.note-card {
  background: #f8f1e8;
  border-radius: 14px;
  padding: 14px;
  margin-top: 14px;
  font-size: 14.5px;
  line-height: 1.45;
  color: #5c3a26;
}

.alert-explain-card {
  border: 2px solid #efc06d;
  background: #fff8ed;
}

.green-box {
  background: #eaf3df;
  border: 2px solid #b7d29c;
  border-radius: 24px;
  padding: 22px 20px;
  margin-bottom: 26px;
}

.green-box h3 {
  margin: 0 0 8px;
  font-size: 22px;
  font-weight: 900;
  color: #496b35;
}

.green-box p {
  margin: 0;
  font-size: 17px;
  line-height: 1.55;
  color: #4f6d3b;
}

.care-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 24px;
}

.care-card {
  background: white;
  border-radius: 22px;
  padding: 18px 14px;
  text-align: center;
  box-shadow: 0 5px 12px rgba(107, 65, 28, 0.08);
}

.care-icon {
  font-size: 30px;
  margin-bottom: 8px;
}

.care-card p {
  margin: 0;
  font-size: 15.5px;
  line-height: 1.35;
  font-weight: 800;
  color: #5c3923;
}

.warning-box {
  background: #fde8e8;
  border: 2px solid #de6a6a;
  border-radius: 24px;
  padding: 22px 20px;
  text-align: center;
  margin-bottom: 24px;
}

.warning-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.warning-box h3 {
  margin: 0 0 8px;
  font-size: 19px;
  line-height: 1.35;
  font-weight: 900;
  color: #8f1f1f;
}

.warning-box p {
  margin: 0;
  font-size: 16.5px;
  line-height: 1.55;
  color: #9c3a3a;
}

.alert-btn {
  width: 100%;
  border: none;
  border-radius: 24px;
  padding: 20px;
  background: linear-gradient(135deg, #d76227 0%, #ed8152 100%);
  color: white;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 6px 14px rgba(155, 74, 29, 0.18);
}

.alert-btn:active {
  transform: scale(0.98);
}

@media (min-width: 700px) {
  .diabetes-page {
    max-width: 620px;
    margin: 0 auto;
  }
}

</style>