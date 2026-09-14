<div align="center">

# 🌿 Raíz Comunitaria Mixteca
### *Infraestructura Pública Abierta de Trazabilidad Descentralizada, IA Multimodal y Comercio Justo en Stellar para Productores Indígenas*

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](https://opensource.org/licenses/MIT)
[![Drips: Verified Public Good](https://img.shields.io/badge/Drips-Funded%20Public%20Good-blueviolet.svg)](https://www.drips.network/)
[![Stellar: Built on Horizon & Soroban](https://img.shields.io/badge/Stellar-Soroban%20%7C%20Horizon-black.svg?logo=stellar)](https://stellar.org)
[![Institution: TecNM Campus Tlaxiaco](https://img.shields.io/badge/Desarrollo-TecNM%20Tlaxiaco-b45309.svg)](http://tlaxiaco.tecnm.mx/)
[![Status: MVP Pilot Ready](https://img.shields.io/badge/Estado-Piloto%20Activo%20v1.0-success.svg)]()

<p align="center">
  <b>Desarrollado por un equipo de estudiantes e investigadores del Instituto Tecnológico de Tlaxiaco (Oaxaca, México)</b>
  <br>
  <i>Candidato a financiamiento en <b>Drips Protocol</b> y en el <b>Stellar Community Fund (SCF)</b></i>
</p>

[Visión General](#-visión-general) • [Impacto Social](#-impacto-social-y-justificación) • [Arquitectura Técnica](#-arquitectura-técnica) • [Integración Stellar & Soroban](#-integración-con-stellar--soroban) • [Ruta de Desarrollo & Hitos](#-ruta-de-desarrollo--hitos-scf--drips) • [Instalación](#-instalación-y-despliegue) • [Equipo](#-equipo-y-gobernanza)

---

</div>

## 📌 Visión General

**Raíz Comunitaria Mixteca** es una plataforma de bien público digital (*Public Good*) diseñada para conectar a pequeños productores indígenas y adultos mayores de la región Mixteca de Oaxaca (México) con mercados de comercio justo directo, eliminando el intermediarismo abusivo (*coyotaje*).

Combinando **Inteligencia Artificial Multimodal (Visión por Computadora)** para la evaluación instantánea de calidad y la **red descentralizada Stellar (Horizon y Soroban)** para la certificación inmutable mediante el **Pasaporte Digital de Origen**, Raíz permite que cosechas de **Café Pergamino**, **Pulque Tradicional de Maguey**, **Miel Virgen**, **Maíz Nativo** y **Textiles en Telar de Cintura** cuenten con un historial transparente, verificable y con pagos directos.

### ¿Por qué es un Bien Público Digital financiable en Drips y Stellar SCF?

1. **Inclusión Financiera y Tecnológica Radical**: Desarrollada pensando en productores de 60+ años y hablantes de lenguas originarias (Tu'un Savi / Mixteco), con una interfaz conversacional asistida por voz (Text-to-Speech), notas de audio y cero fricción burocrática.
2. **Código Abierto y Neutralidad**: Software 100% de código abierto bajo licencia MIT, sin comisiones extractivas ni custodia forzada de fondos.
3. **Casos de Uso Real en Stellar (RWA y Trazabilidad)**: Registra cada lote como un activo digital respaldado por hashes criptográficos inmutables en Stellar Horizon Testnet / Soroban.
4. **Impulso al Talento Universitario Local**: Proyecto incubado y programado por estudiantes de ingeniería del **TecNM Campus Tlaxiaco**, generando soberanía tecnológica en una de las zonas con mayor rezago económico del país.

---

## 🎯 Impacto Social y Justificación

### La Problemática
En la Mixteca Alta oaxaqueña, el 80% de los productores agrícolas y artesanos son personas mayores que enfrentan:
- **Intermediarios especulativos:** Compran el kilo de café o el litro de pulque a un 25% de su valor real de mercado.
- **Barrera de digitalización:** Las apps bancarias y de comercio electrónico tradicionales son inaccesibles para personas no alfabetizadas digitalmente.
- **Falta de certificación accesible:** Los laboratorios de calidad cobran costos prohibitivos y tardan semanas en emitir dictámenes.

### La Solución de Raíz
- **Evaluación Visual con IA en el Terreno**: Una sola foto del grano de café o del tinacal de pulque es analizada por el modelo de visión computacional para detectar porcentaje de humedad, plagas (broca), defectos o pureza al instante.
- **Pasaporte Digital de Origen**: Cada lote aprobado genera un código QR y un sello criptográfico inmutable en la red Stellar que el consumidor final puede escanear en cualquier parte del mundo.
- **Liquidación Justa y Directa**: Los compradores pagan directamente al productor mediante micropagos instantáneos y transparentes.

---

## 🏗️ Arquitectura Técnica

El sistema está construido como una aplicación full-stack modular y reactiva:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          CLIENTE WEB / PWA                              │
│  React 19 + TypeScript + Tailwind CSS + Lucide Icons + Motion Engine   │
│  - Interfaz accesible para adultos mayores (Alto contraste, modo fácil)│
│  - Grabación y reproducción de notas de voz comunitaria                 │
│  - Síntesis de voz (Web Speech API TTS a 0.92x para dicción clara)     │
│  - Cámara web y móvil nativa para captura de muestras                  │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ API REST / JSON
┌────────────────────────────────────▼────────────────────────────────────┐
│                       SERVIDOR / BACKEND (Node.js)                      │
│  Express + tsx + esbuild                                                │
│  - Endpoint /api/analyze-image (Proxy seguro a Gemini 2.5 Vision)      │
│  - Motor de validación según normas mexicanas (NMX-F-083, etc.)         │
│  - Orquestador de transacciones para la red Stellar                     │
└──────────────────┬──────────────────────────────────┬───────────────────┘
                   │                                  │
┌──────────────────▼──────────────────┐   ┌───────────▼───────────────────┐
│     INTELIGENCIA ARTIFICIAL         │   │         RED STELLAR           │
│  Google Gemini 2.5 Flash            │   │  Stellar Horizon Testnet      │
│  - Clasificación de producto        │   │  + Soroban Smart Contracts    │
│  - Estimación de humedad y broca    │   │  - Sellado inmutable de hash  │
│  - Detección de adulterantes        │   │  - Pasaporte Digital de Origen│
│  - Prevención de falsos positivos   │   │  - Folios públicos auditables │
└─────────────────────────────────────┘   └───────────────────────────────┘
```

---

## 🌌 Integración con Stellar & Soroban

Raíz aprovecha la infraestructura de **Stellar Network** para garantizar transparencia radical, costos de transacción de fracciones de centavo ($0.00001 USD) y liquidación casi instantánea (3-5 segundos):

### 1. Sellado de Pasaporte de Origen (Horizon / Soroban)
Cuando un productor registra un lote validado por IA, se genera un objeto canónico de metadatos:
```json
{
  "producer": "Don Pedro Hernández Bautista",
  "community": "San Cristóbal Amoltepec, Mixteca Alta",
  "product": "Pulque Tradicional de Maguey Manso",
  "volume": "120 Litros",
  "qualityScore": 96,
  "timestamp": 1726315200,
  "inspectionHash": "sha256:4a8c9b2f1e0d3..."
}
```
Este hash se ancla de forma permanente en la red Stellar mediante:
- **`memo_hash` / `manage_data`** en transacciones estándar de Stellar Horizon.
- **Soroban Smart Contract (`LotRegistry.rs`)**: Almacena el estado, la certificación comunitaria y el historial de transferencias del lote.

### 2. Pasarela de Pagos de Comercio Justo (Fase 2)
Integración con **Stellar Anchors** (SEP-24 / SEP-38) para permitir que compradores en el extranjero depositen stablecoins (USDC) y el productor reciba pesos mexicanos (MXN) en cooperativas de ahorro locales (Cajas Populares) sin comisiones bancarias predatorias.

---

## 💧 Participación en Drips Network (Public Goods Funding)

**Raíz Comunitaria Mixteca** califica para el ecosistema de financiamiento continuo de **Drips**:

- **Modelo de Splits Abiertos**: Las donaciones y *streams* de Drips recibidos se distribuyen transparentemente entre:
  - **70%**: Fondo de becas y equipamiento para el equipo de estudiantes desarrolladores del TecNM Campus Tlaxiaco.
  - **20%**: Fondo de hardware comunitario (dispositivos móviles y básculas digitales para tinacales y parcelas piloto).
  - **10%**: Fondo de transacciones y despliegue de contratos en Stellar Mainnet.
- **Reputación Open Source**: Todo el desarrollo es público, verificable y auditable en GitHub.

---

## 🚀 Ruta de Desarrollo & Hitos (Roadmap Drips / Stellar SCF)

### 📍 Hito 1: MVP Funcional y Validación Local *(Completado)*
- [x] Interfaz web accesible estilo mensajería comunitaria para personas mayores.
- [x] Motor multimodal de IA para café, pulque, miel, maíz y artesanías textiles.
- [x] Soporte de voz completo (Lectura TTS pausada y notas de voz comunitarias).
- [x] Simulación de sellado inmutable en Stellar Horizon Testnet.
- [x] Código abierto bajo licencia MIT.

### 📍 Hito 2: Despliegue de Soroban & Drips Streams *(En Curso - Meta: Drips & SCF Kickoff)*
- [ ] Implementación de contrato inteligente en Rust (`Soroban LotRegistry v1.0`).
- [ ] Creación del visualizador público en tiempo real para verificar folios en el explorador Stellar (Stellar Expert).
- [ ] Piloto en campo con 15 productores de la Unión Comunal de Tlaxiaco.
- [ ] Integración del split de Drips para el equipo de estudiantes universitarios.

### 📍 Hito 3: Integración de Pagos y Certificados Físicos NFC/QR *(Meta: SCF Build)*
- [ ] Generación automática de etiquetas QR y etiquetas NFC imprimibles para bultos y botellas.
- [ ] Pasarela de micropagos en Stellar (XLM / USDC) conectada a billeteras comunitarias no custodiales.
- [ ] Soporte de audio en lengua indígena Mixteca (Tu'un Savi) grabado con hablantes nativos.

### 📍 Hito 4: Expansión Regional *(Escalamiento)*
- [ ] Adopción en 5 cooperativas de Oaxaca y Puebla.
- [ ] Registro de Denominación de Origen Comunitaria en blockchain.

---

## 💻 Instalación y Despliegue

### Requisitos Previos
- Node.js 20.x o superior
- npm 10.x o superior
- Llave de API de Google Gemini (`GEMINI_API_KEY`) para el motor de visión por computadora

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Open-Hub-Tec/Raiz.git
   cd Raiz
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env` basado en `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Agrega tu clave de Gemini:
   ```env
   GEMINI_API_KEY=tu_clave_de_gemini_aqui
   ```

4. **Ejecutar en entorno de desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación se abrirá en `http://localhost:3000`.

5. **Compilar para producción:**
   ```bash
   npm run build
   npm start
   ```

---

## 👥 Equipo y Gobernanza

Este proyecto es una iniciativa de desarrollo tecnológico social impulsada por el **Instituto Tecnológico de Tlaxiaco (TecNM Campus Tlaxiaco)**:

- **Institución:** Instituto Tecnológico de Tlaxiaco, Oaxaca, México.
- **Línea de Investigación:** Redes Descentralizadas, Inteligencia Artificial Aplicada a la Agricultura y Soberanía Tecnológica Indígena.
- **Contacto Oficial:** `tecnologicotlaxiaco@gmail.com`
- **Comunidades Aliadas:** Tlaxiaco, San Cristóbal Amoltepec, Santa María Cuquila y San Juan Mixtepec.

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT** - consulta el archivo [LICENSE](LICENSE) para más detalles. Se permite y fomenta su uso, modificación, réplica y distribución con fines educativos, sociales y comerciales justos.

<div align="center">
  <sub>Construido con orgullo comunitario en la Heroica Ciudad de Tlaxiaco, Oaxaca 🇲🇽</sub>
</div>
