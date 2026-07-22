<template>
  <q-page class="food-page">
    <section class="hero">
      <button class="back-btn" @click="goBack">
        ← Volver
      </button>

      <div class="hero-icon">🌽</div>

      <h1>Alimentación familiar</h1>

      <p>
        Comer rico, rendidor y cuidarse es posible.
      </p>

      <div class="tabs">
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'recetas' }"
          @click="activeTab = 'recetas'"
        >
          🍲 Comidas
        </button>

        <button
          class="tab-btn"
          :class="{ active: activeTab === 'plato' }"
          @click="activeTab = 'plato'"
        >
          🥗 Ideas
        </button>

        <button
          class="tab-btn"
          :class="{ active: activeTab === 'consejos' }"
          @click="activeTab = 'consejos'"
        >
          💡 Consejos
        </button>
      </div>
    </section>

    <section class="content">
      <div v-if="activeTab === 'recetas'">
        <h2>Recetas sencillas para toda la familia 👨‍👩‍👧</h2>

        <p class="section-intro">
          Ideas de comidas compartidas, rendidoras y fáciles de adaptar para cuidarse mejor.
        </p>

        <div class="recipe-list">
          <div
            v-for="recipe in recetas"
            :key="recipe.nombre"
            class="recipe-card"
            :class="recipe.class"
            @click="toggleRecipe(recipe.nombre)"
          >
            <div class="recipe-header">
              <div class="recipe-emoji">{{ recipe.icono }}</div>

              <div class="recipe-main">
                <h3>{{ recipe.nombre }}</h3>

                <div class="recipe-meta">
                  <span>⏱️ {{ recipe.tiempo }}</span>
                  <span>👥 {{ recipe.personas }}</span>
                </div>
              </div>

              <div class="arrow">
                {{ openedRecipe === recipe.nombre ? '▲' : '▼' }}
              </div>
            </div>

            <div
              v-if="openedRecipe === recipe.nombre"
              class="recipe-detail"
            >
              <h4>Ingredientes</h4>
              <ul>
                <li v-for="item in recipe.ingredientes" :key="item">
                  {{ item }}
                </li>
              </ul>

              <h4>Cómo hacerlo</h4>
              <p>{{ recipe.preparacion }}</p>

              <div class="tip">
                <strong>Consejo:</strong> {{ recipe.consejo }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'plato'">
        <h2>Cómo mejorar la comida familiar 🎯</h2>

        <p class="section-intro">
          No hace falta cocinar aparte. Podés mejorar la olla o el plato agregando alimentos de cada grupo.
        </p>

        <div class="group-card green">
          <h3>🥬 Vegetales</h3>

          <div class="food-grid">
            <div
              v-for="item in vegetales"
              :key="item.nombre"
              class="food-item"
            >
              <div class="food-emoji">{{ item.icono }}</div>
              <p>{{ item.nombre }}</p>
            </div>
          </div>
        </div>

        <div class="group-card pink">
          <h3>🍗 Proteínas</h3>

          <div class="food-grid">
            <div
              v-for="item in proteinas"
              :key="item.nombre"
              class="food-item"
            >
              <div class="food-emoji">{{ item.icono }}</div>
              <p>{{ item.nombre }}</p>
            </div>
          </div>
        </div>

        <div class="group-card orange">
          <h3>🌽 Almidones y harinas</h3>

          <p class="group-note">
            Dan energía, pero conviene cuidar la cantidad y acompañarlos con verduras y proteínas.
          </p>

          <div class="food-grid">
            <div
              v-for="item in almidones"
              :key="item.nombre"
              class="food-item"
            >
              <div class="food-emoji">{{ item.icono }}</div>
              <p>{{ item.nombre }}</p>
            </div>
          </div>
        </div>

        <div class="family-box">
          <h3>Para guisos, sopas y comidas de olla</h3>

          <p>
            Una buena idea es que haya muchas verduras, algo de proteína y una cantidad moderada de arroz,
            fideos, papa, maíz o pan.
          </p>
        </div>
      </div>

      <div v-if="activeTab === 'consejos'">
        <h2>Consejos simples para todos los días 💡</h2>

        <p class="section-intro">
          Pequeños cambios pueden ayudar a cuidar la salud sin dejar de compartir la comida familiar.
        </p>

        <div class="tips-list">
          <div
            v-for="tip in consejos"
            :key="tip.titulo"
            class="tip-card"
            :class="tip.class"
          >
            <div class="tip-icon">{{ tip.icono }}</div>

            <h3>{{ tip.titulo }}</h3>

            <p>{{ tip.texto }}</p>
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

const activeTab = ref('recetas')
const openedRecipe = ref(null)

function goBack() {
  router.back()
}

function toggleRecipe(nombre) {
  openedRecipe.value = openedRecipe.value === nombre ? null : nombre
}

const recetas = [
  {
    nombre: 'Locro de verduras',
    icono: '🍲',
    tiempo: '45 min',
    personas: '4 personas',
    class: 'recipe-orange',
    ingredientes: [
      'Zapallo',
      'Choclo o maíz',
      'Zanahoria',
      'Cebolla',
      'Porotos o lentejas',
      'Condimentos'
    ],
    preparacion:
      'Cocinar las verduras en una olla con agua y condimentos. Agregar las legumbres y dejar cocinar hasta que todo esté tierno.',
    consejo:
      'Sumar más verduras ayuda a que rinda más y sea más completo.'
  },
  {
    nombre: 'Ensalada colorida',
    icono: '🥗',
    tiempo: '10 min',
    personas: '2 personas',
    class: 'recipe-green',
    ingredientes: [
      'Tomate',
      'Zanahoria',
      'Lechuga o repollo',
      'Huevo',
      'Un poco de arroz o papa si se quiere'
    ],
    preparacion:
      'Lavar y cortar las verduras. Agregar huevo o alguna proteína para que llene más.',
    consejo:
      'La fruta o verdura entera tiene fibra y ayuda a cuidar mejor el azúcar.'
  },
  {
    nombre: 'Guiso de lentejas',
    icono: '🫘',
    tiempo: '40 min',
    personas: '4 personas',
    class: 'recipe-purple',
    ingredientes: [
      'Lentejas',
      'Zapallo',
      'Zanahoria',
      'Cebolla',
      'Tomate',
      'Condimentos'
    ],
    preparacion:
      'Cocinar las lentejas con verduras hasta que estén tiernas. Condimentar con ajo, perejil, pimentón o laurel.',
    consejo:
      'Las lentejas ayudan a que la comida sea rendidora y más completa.'
  },
  {
    nombre: 'Tortilla de verduras',
    icono: '🍳',
    tiempo: '15 min',
    personas: '2 personas',
    class: 'recipe-blue',
    ingredientes: [
      'Huevos',
      'Acelga o espinaca',
      'Cebolla',
      'Zanahoria rallada',
      'Condimentos'
    ],
    preparacion:
      'Mezclar las verduras cocidas o salteadas con huevo. Cocinar en sartén hasta que esté firme.',
    consejo:
      'Es una opción rápida para acompañar con ensalada o verduras.'
  },
  {
    nombre: 'Pollo al horno con verduras',
    icono: '🍗',
    tiempo: '50 min',
    personas: '4 personas',
    class: 'recipe-pink',
    ingredientes: [
      'Pollo',
      'Zapallo',
      'Zanahoria',
      'Cebolla',
      'Papa en poca cantidad',
      'Condimentos'
    ],
    preparacion:
      'Colocar el pollo y las verduras en una fuente. Cocinar al horno hasta que esté listo.',
    consejo:
      'Conviene que haya más verduras que papa para que el plato sea más equilibrado.'
  }
]

const vegetales = [
  { nombre: 'Espinaca', icono: '🥬' },
  { nombre: 'Tomate', icono: '🍅' },
  { nombre: 'Zanahoria', icono: '🥕' },
  { nombre: 'Zapallo', icono: '🎃' },
  { nombre: 'Brócoli', icono: '🥦' }
]

const proteinas = [
  { nombre: 'Huevo', icono: '🥚' },
  { nombre: 'Pescado', icono: '🐟' },
  { nombre: 'Pollo', icono: '🍗' },
  { nombre: 'Lentejas', icono: '🫘' },
  { nombre: 'Queso', icono: '🧀' }
]

const almidones = [
  { nombre: 'Maíz', icono: '🌽' },
  { nombre: 'Arroz', icono: '🍚' },
  { nombre: 'Batata', icono: '🍠' },
  { nombre: 'Papa', icono: '🥔' },
  { nombre: 'Porotos', icono: '🫘' }
]

const consejos = [
  {
    titulo: 'No hace falta cocinar aparte',
    texto:
      'La misma comida puede servir para todos si tiene más verduras, algo de proteína y menos exceso de harina.',
    icono: '🍲',
    class: 'tip-yellow'
  },
  {
    titulo: 'Más verduras en la olla',
    texto:
      'Agregar zapallo, zanahoria, acelga, cebolla o repollo ayuda a que la comida rinda más y llene mejor.',
    icono: '🥬',
    class: 'tip-green'
  },
  {
    titulo: 'Cuidá la cantidad de arroz, papa o fideos',
    texto:
      'No hace falta sacarlos, pero conviene que no sean lo único de la comida.',
    icono: '🌽',
    class: 'tip-orange'
  },
  {
    titulo: 'Comé despacio y sin apuro',
    texto:
      'Masticar bien ayuda al cuerpo a saber cuándo ya tiene suficiente.',
    icono: '🍽️',
    class: 'tip-yellow'
  },
  {
    titulo: 'Usá poca sal',
    texto:
      'Condimentá con ajo, perejil, pimentón o limón. El sabor no le falta y el corazón lo agradece.',
    icono: '🧂',
    class: 'tip-pink'
  },
  {
    titulo: 'Frutas enteras, no en jugo',
    texto:
      'La fruta entera tiene fibra, que ayuda a que el azúcar suba más despacio que con el jugo.',
    icono: '🍎',
    class: 'tip-green'
  },
  {
    titulo: 'Tomá más agua',
    texto:
      'Las gaseosas, jugos y bebidas azucaradas pueden subir mucho el azúcar en sangre.',
    icono: '💧',
    class: 'tip-blue'
  }
]
</script>

<style scoped>
.food-page {
  min-height: 100vh;
  background: #fbf3e8;
  font-family: 'Trebuchet MS', 'Segoe UI', sans-serif;
  color: #3d1d0d;
}

.hero {
  background: linear-gradient(145deg, #7da477 0%, #5f967d 100%);
  color: white;
  padding: 28px 26px 34px;
}

.back-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 32px;
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
  margin: 0 0 26px;
  color: #f7fff4;
}

.tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.tab-btn {
  border: none;
  border-radius: 999px;
  padding: 12px 6px;
  background: rgba(255, 255, 255, 0.22);
  color: white;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  min-height: 46px;
}

.tab-btn.active {
  background: white;
  color: #5c8c73;
}

.content {
  padding: 30px 24px 44px;
}

.content h2 {
  margin: 0 0 12px;
  font-size: 22px;
  line-height: 1.25;
  font-weight: 900;
  color: #3d1d0d;
}

.section-intro {
  margin: 0 0 24px;
  font-size: 17px;
  line-height: 1.55;
  color: #7b4a29;
}

.recipe-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.recipe-card {
  border-radius: 24px;
  padding: 22px 18px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: transform 0.15s ease;
}

.recipe-card:active {
  transform: scale(0.98);
}

.recipe-header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.recipe-emoji {
  width: 54px;
  font-size: 34px;
  text-align: center;
}

.recipe-main {
  flex: 1;
}

.recipe-main h3 {
  margin: 0 0 8px;
  font-size: 21px;
  line-height: 1.2;
  font-weight: 900;
  color: #2d160a;
}

.recipe-meta {
  display: flex;
  gap: 16px;
  font-size: 15.5px;
  color: #6d4328;
}

.arrow {
  font-size: 22px;
  color: #7b4a29;
}

.recipe-detail {
  margin-top: 22px;
  padding-top: 18px;
  border-top: 1px solid rgba(90, 55, 29, 0.15);
}

.recipe-detail h4 {
  margin: 0 0 8px;
  font-size: 17px;
  color: #5b3018;
  font-weight: 900;
}

.recipe-detail ul {
  margin: 0 0 14px;
  padding-left: 20px;
  color: #5b3018;
  line-height: 1.5;
}

.recipe-detail p {
  margin: 0 0 14px;
  color: #5b3018;
  line-height: 1.5;
}

.tip {
  background: rgba(255, 255, 255, 0.65);
  border-radius: 16px;
  padding: 14px;
  line-height: 1.45;
  color: #5b3018;
}

.recipe-orange {
  background: #fff3dc;
  border-color: #ffbd63;
}

.recipe-green {
  background: #e8f5e8;
  border-color: #8fcf9a;
}

.recipe-purple {
  background: #eee5f7;
  border-color: #d58ee7;
}

.recipe-blue {
  background: #e5f4ff;
  border-color: #83c8ff;
}

.recipe-pink {
  background: #fde7ef;
  border-color: #ff86ae;
}

.group-card {
  border-radius: 24px;
  padding: 22px 18px;
  margin-bottom: 24px;
  border: 2px solid;
}

.group-card h3 {
  margin: 0 0 16px;
  font-size: 21px;
  font-weight: 900;
}

.green {
  background: #e8f5e8;
  border-color: #8fcf9a;
}

.green h3 {
  color: #147c27;
}

.pink {
  background: #fde7ef;
  border-color: #ff86ae;
}

.pink h3 {
  color: #c3135a;
}

.orange {
  background: #fff3dc;
  border-color: #ffbd63;
}

.orange h3 {
  color: #e85d00;
}

.group-note {
  margin: -6px 0 16px;
  font-size: 15.5px;
  line-height: 1.45;
  color: #744623;
}

.food-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.food-item {
  width: 86px;
  min-height: 96px;
  background: rgba(255, 255, 255, 0.72);
  border: 2px solid currentColor;
  border-radius: 16px;
  padding: 12px 8px;
  text-align: center;
  color: inherit;
}

.food-emoji {
  font-size: 30px;
  margin-bottom: 8px;
}

.food-item p {
  margin: 0;
  font-size: 14.5px;
  font-weight: 900;
  color: #3d1d0d;
}

.family-box {
  background: #f4e5c8;
  border: 2px dashed #dfc38e;
  border-radius: 22px;
  padding: 22px 18px;
  margin-top: 8px;
}

.family-box h3 {
  margin: 0 0 10px;
  font-size: 20px;
  font-weight: 900;
  color: #7a4b20;
}

.family-box p {
  margin: 0;
  font-size: 16.5px;
  line-height: 1.5;
  color: #7a4b20;
}

.tips-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.tip-card {
  border-radius: 24px;
  padding: 24px 22px;
  border: 2px solid;
}

.tip-icon {
  font-size: 34px;
  margin-bottom: 18px;
}

.tip-card h3 {
  margin: 0 0 12px;
  font-size: 21px;
  font-weight: 900;
  color: #2d160a;
}

.tip-card p {
  margin: 0;
  font-size: 17px;
  line-height: 1.55;
  color: #6d3c1f;
}

.tip-yellow {
  background: #fff8df;
  border-color: #f3c75f;
}

.tip-green {
  background: #e8f5e8;
  border-color: #8fcf9a;
}

.tip-pink {
  background: #fde7ef;
  border-color: #ff86ae;
}

.tip-blue {
  background: #e5f4ff;
  border-color: #83c8ff;
}

.tip-orange {
  background: #fff0df;
  border-color: #ffb36b;
}

@media (min-width: 700px) {
  .food-page {
    max-width: 620px;
    margin: 0 auto;
  }
}
</style>