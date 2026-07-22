
<template>
  <q-page class="page-container">

      <!-- TARJETA 1 -->
      <q-card class="tarjeta">
        <q-card-section class="contenido-tarjeta">

            <div class="icono-tarjeta  text-center">🩸</div>

            <div class="titulo-tarjeta">
              ¿Qué es la diabetes tipo 2?
            </div>

            <div class="texto-tarjeta">
              <p>
                Cuando comemos, parte de la comida se transforma en azúcar.
              </p>

              <p>
                El cuerpo usa esa azúcar como energía para caminar, trabajar y hacer las actividades del día.
              </p>

              <p class="texto-importante">
                En la diabetes tipo 2, el azúcar queda alta en la sangre porque el cuerpo no puede usarla bien.
              </p>
            </div>

        </q-card-section>
      </q-card>
    
  
        <q-card class="tarjeta">
          <q-card-section class="contenido-tarjeta">

            <div class="icono-tarjeta text-center">⚠️</div>

            <div class="titulo-tarjeta">
              Señales de alerta
            </div>

            <div class="texto-tarjeta">
              <p>
                La diabetes a veces no se siente al principio.
              </p>

              <p>
                Algunas señales pueden ser mucha sed, cansancio,pérdida de peso, visión borrosa o heridas que tardan en cerrar.
              </p>

              <p class="texto-importante">
                Por eso es importante hacerse controles, aunque uno se sienta bien.
              </p>
            </div>

          </q-card-section>
        </q-card>

  </q-page>
</template>



<script setup>


</script>





<style scoped>
.page-container {
  min-height: calc(100vh - 50px);
  padding: 20px;
  background-color: #fefffd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.tarjeta {
  width: 100%;
  max-width: 320px;
  margin: 10px auto;
  border-radius: 24px;
  padding: 10px;
}

.icono-tarjeta {
  font-size: 32px;
  margin-bottom: 12px;
}

.titulo-tarjeta {
  font-size: 28px;
  font-weight: 800;
  color: #962000;
  text-align: center;
  line-height: 1.1;
  margin-bottom: 16px;
}

.texto-tarjeta {
  font-size: 18px;
  font-weight: 300;
  color: #333;
  text-align: center;
  line-height: 1.4;
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