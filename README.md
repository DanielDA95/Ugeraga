# ⚽ SD Ugeraga - Official Web Portal (Legacy Version)

> **Portal web oficial desarrollado para el club deportivo SD Ugeraga (Sopela, Bizkaia).**
> *Proyecto real desarrollado durante el periodo de **Prácticas Profesionales en Empresa** para la obtención del Certificado de Profesionalidad en Confección y Publicación de Páginas Web.*

![Project Type](https://img.shields.io/badge/Project-Professional_Internship-blue)
![Status](https://img.shields.io/badge/Status-Production_Ready_Prototype-success)
![Legacy](https://img.shields.io/badge/Stack-Vanilla_HTML%2FCSS%2FJS-orange)

## 💼 Contexto del Proyecto

Este desarrollo fue realizado en un entorno empresarial real como parte de las prácticas exigidas para la certificación profesional. El objetivo fue responder a una necesidad de negocio real: la digitalización de la presencia del **SD Ugeraga**, centralizando la información de sus equipos, categorías, historia y canales de comunicación.

A diferencia de un ejercicio académico, este proyecto implicó:
* Análisis de requisitos de un cliente real.
* Adaptación a la identidad corporativa del club.
* Desarrollo de una arquitectura escalable sin dependencias externas.

---

## 🛠️ Stack Tecnológico & Arquitectura

El proyecto se construyó sobre un stack "Vanilla" (sin frameworks) para garantizar el máximo rendimiento, control total del código y compatibilidad universal, sentando una base sólida de ingeniería web:

| Tecnología | Uso en el proyecto |
| :--- | :--- |
| **HTML5 Semántico** | Estructura optimizada para SEO (`header`, `nav`, `article`) y Accesibilidad (WAI-ARIA). |
| **CSS3 Moderno** | Arquitectura mantenible con **Variables CSS**, Grid y Flexbox. Diseño 100% **Mobile-First**. |
| **JavaScript (ES6+)** | Lógica de negocio en el cliente, manipulación del DOM y componentes interactivos personalizados. |
| **Integraciones** | Google Maps Embed API para geolocalización de las instalaciones. |

---

## ✨ Soluciones Técnicas Implementadas

Se desarrollaron componentes personalizados para resolver las necesidades del cliente sin recurrir a librerías pesadas:

1.  **Sistema de Carrusel Personalizado:** Lógica JavaScript propia para la visualización de las plantillas de jugadores por categoría.
2.  **Filtrado Dinámico de Categorías:** Interfaz SPA-like (Single Page Application simulada) para cambiar entre categorías (Juvenil, Cadete, etc.) sin recargas innecesarias.
3.  **Higiene de Código (Refactorización):**
    * Centralización de estilos mediante `variables.css`.
    * Separación de responsabilidades (Styles, Scripts, Markup).
    * Optimización de recursos (`loading="lazy"`).

---

## 📂 Estructura del Repositorio

```text
/
├── index.html          # Landing page principal
├── equipos.html        # Módulo de gestión de categorías y plantillas
├── historia.html       # Narrativa corporativa
├── directivos.html     # Organigrama institucional
├── contacto.html       # Ubicación y datos de contacto
├── styles/
│   ├── variables.css   # Tokens de diseño (Colores corporativos/Fuentes)
│   ├── common.css      # Estilos base y reset
│   ├── media-queries.css # Reglas de responsividad
│   └── ...             # Estilos modulares
└── scripts/
    └── scripts.js      # Lógica del carrusel, modal y navegación
