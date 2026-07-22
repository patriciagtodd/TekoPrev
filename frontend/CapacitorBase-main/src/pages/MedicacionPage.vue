<template>
  <q-page class="page-container">
    <q-btn
      class="boton-volver"
      icon="arrow_back"
      label="Volver"
      flat
      rounded
      color="primary"
      to="/"
    />
      <q-card class="tarjeta">
        <q-card-section class="contenido-tarjeta">
 
    <div class="icono-tarjeta">
      💊
    </div>

    <div class="titulo-tarjeta">
      Medicación
    </div>

    <div class="texto-tarjeta">
      <p>
        Es importante que tomes todos los medicamentos que te recetaron.
      </p>

      <p>
        Tomalos todos los días y en la cantidad que indicó el médico.
      </p>

      <p class="texto-importante">
        Si tenés dudas, no los suspendas por tu cuenta. Consultá con un médico.
      </p>
    </div>

  </q-card-section>
</q-card>
      
  </q-page>
</template>


<style scoped> 
.page-container {
  min-height: calc(100vh - 50px);
  padding: 20px  24px;
  background-color: #fefffd;
  gap: 16px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.tarjeta {
  width: 100%;
  max-width: 320px;
  border-radius: 28px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.12);
  margin: 35px; 
  position: relative;
  overflow: hidden;
}

.contenido-tarjeta {
  padding: 30px 26px;
  position: relative;
}

.numero-tarjeta {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-color: #c6ccdf;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 18px;
}

.icono-tarjeta {
  font-size: 38px;
  text-align: center;
  margin-bottom: 12px;
}

.titulo-tarjeta {
  font-size: 26px;
  font-weight: 800;
  color: #9b2500;
  text-align: center;
  line-height: 1.15;
  margin-bottom: 20px;
}

.texto-tarjeta {
  font-size: 18px;
  color: #333;
  line-height: 1.45;
  text-align: center;
}

.texto-tarjeta p {
  margin: 0 0 16px 0;
}

.texto-importante {
  background-color: #f2f4fb;
  border-left: 5px solid #9fa8c9;
  padding: 12px 14px;
  border-radius: 12px;
  font-weight: 600;
}
</style>