<template>
    <q-page class="page-container">

          <q-btn
           class="boton-volver"
           icon="arrow_back"
           label="Volver"
           flat
           rounded
           color="primary"
           @click="volverAtras()"
          />

    <q-card class="tarjeta-sintomas">
      <q-card-section class="contenido-sintomas">

        <div class="titulo-sintomas">
          Si tenés:
        </div>

        <div class="lista-sintomas">

          <div class="sintoma-item">
            <q-icon name="circle" size="8px" color="deep-orange" />
            <span>Mucha sed y ganas de orinar.</span>
          </div>

          <div class="sintoma-item">
            <q-icon name="circle" size="8px" color="deep-orange" />
            <span>Mucha hambre.</span>
          </div>

          <div class="sintoma-item">
            <q-icon name="circle" size="8px" color="deep-orange" />
            <span>Cansancio.</span>
          </div>

          <div class="sintoma-item">
            <q-icon name="circle" size="8px" color="deep-orange" />
            <span>Vista borrosa.</span>
          </div>

          <div class="sintoma-item">
            <q-icon name="circle" size="8px" color="deep-orange" />
            <span>Llagas o heridas que no sanan.</span>
          </div>

          <div class="sintoma-item">
            <q-icon name="circle" size="8px" color="deep-orange" />
            <span>Pérdida de peso.</span>
          </div>

        </div>

        <div class="alerta-simple">
          <q-icon name="warning" size="24px" color="red-8" />

          <div>
            Si te pasa algo de esto, es importante que
            <strong>vayas al médico.</strong>
          </div>
        </div>

      </q-card-section>
    </q-card>
    </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function volverAtras() {
  router.push('/sintomas')
}
</script>




<style scoped>
.page-container {
  min-height: calc(100vh - 50px);
  padding: 28px 16px;
  background-color: #fefffd;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
}
.tarjeta-sintomas {
  width: 90%;
  max-width: 430px;
  border-radius: 26px;
  background-color: #ffffff;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.10);
  overflow: hidden;
}

.contenido-sintomas {
  padding: 26px 24px 0 24px;
}

.titulo-sintomas {
  font-size: 27px;
  font-weight: 800;
  color: #9b2500;
  text-align: center;
  margin-bottom: 22px;
}

.lista-sintomas {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sintoma-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;

  background-color: #faf7f2;
  border-radius: 16px;
  padding: 12px 14px;

  font-size: 17px;
  color: #222;
  line-height: 1.35;
}

.sintoma-item span {
  flex: 1;
}

/* ALERTA */

.alerta-simple {
  margin: 24px -24px 0 -24px;
  padding: 18px 22px;
  background-color: #ffecec;
  color: #8a0000;

  display: flex;
  align-items: center;
  gap: 14px;

  font-size: 17px;
  line-height: 1.35;
  text-align: left;
}

.alerta-simple strong {
  font-weight: 800;
}


</style>