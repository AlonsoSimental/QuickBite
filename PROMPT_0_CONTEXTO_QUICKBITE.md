# Prompt 0 — Contexto Base para Codex (QuickBite)

## Rol de Codex en fases posteriores
Actúa como implementador de una web estática para un pequeño negocio gastronómico.

**Importante:** este Prompt 0 es únicamente de **contexto, alcance y reglas**.  
No desarrolles todavía, no escribas código y no inicies implementación en esta fase.

---

## 1) Identidad del negocio
- **Nombre:** QuickBite
- **Tipo:** Restaurante de comida rápida
- **Especialidad principal:** Hamburguesas (incluyendo Smash Burgers como foco percibido)
- **Idioma principal del negocio:** Alemán

### Ubicación
- Vorstadt 15  
- 5200 Brugg, Aargau  
- Suiza

### Google Maps
- https://www.google.com/maps/search/?api=1&query=QuickBite&query_place_id=ChIJq2gbl4hrkEcRF7y3A23UNHU

### Contacto y presencia actual
- **Teléfono:** 0768165598
- **Website actual:** No tiene

### Enlaces externos oficiales para referencia
- **Uber Eats:** https://www.ubereats.com/ch-de/store/quickbite/x8SkN_P1WW2LfPbHe8i-lA?ps=1
- **Restaurant Guru:** https://de.restaurantguru.com/QuickBite-Brugg

---

## 2) Horarios oficiales
- Montag: 18:30–03:00
- Dienstag: 18:30–03:00
- Mittwoch: Geschlossen
- Donnerstag: 18:30–03:00
- Freitag: 18:30–03:00
- Samstag: 18:30–03:00
- Sonntag: 18:30–03:00

---

## 3) Servicios y atributos (fuente: Google Maps)
### Opciones de servicio
- Entrega sin contacto
- Entrega a domicilio
- Para llevar
- Consumo en el lugar

### Popular por
- Almuerzo
- Cena
- Cena en solitario

### Qué ofrece
- Bocadillos
- Café

### Opciones del local
- Almuerzo
- Cena

### Servicios
- Sanitario

### Ambiente
- Informal

### Pagos
- Pagos móviles mediante NFC
- Tarjetas de crédito
- Tarjetas de débito

---

## 4) Reputación y percepción
- **Puntuación promedio:** 4.8 estrellas (25 reseñas en Google Maps)

### Patrones repetidos en reseñas
- Smash Burgers destacados
- Carne fresca y jugosa
- Ingredientes frescos
- Servicio muy amable y rápido
- Ambiente tranquilo y limpio
- Opciones vegetarianas
- Entrega rápida
- Percepción de alta calidad para comida rápida
- Precio por persona frecuente: CHF 10–30
- Estacionamiento cercano disponible (incluyendo pagado)
- Un reviewer menciona ausencia de cerveza (caso no generalizado)

### Observaciones adicionales
- Algunos clientes mencionan que los productos son halal
- No existe descripción oficial del negocio
- Descripción externa relevante (Restaurant Guru):
  - Servicio considerado excelente
  - Ambiente descrito como exótico
  - Opción de entrega disponible

---

## 5) Estilo y posicionamiento
### Estilo percibido
- Comida rápida con foco en hamburguesas
- Modelo híbrido: fuerte en delivery/take away + consumo en local
- Ambiente informal
- Operación nocturna (hasta las 03:00)

### Patrón de diseño seleccionado
**FAST CASUAL**

### Justificación del patrón
- Especialización clara en hamburguesas
- Ticket medio CHF 10–30
- Servicio rápido
- Enfoque en calidad dentro del segmento fast food
- Ambiente informal, no gourmet
- Fuerte presencia en delivery

---

## 6) Imágenes disponibles y reglas de uso
### Ubicación en repositorio
- `public/images/`

### Subcarpetas
- `dishes`
- `logo`
- `venue`

### Inventario y calidad
- ~4 imágenes principales provistas directamente
- Puede haber más imágenes en enlaces externos, pero **no deben usarse**
- Calidad general: regular
- No hay hero profesional
- No hay logo oficial visible

### Logo
- No existe logo oficial
- Usar como logo provisional la imagen ubicada en `public/images/logo`
- No rediseñar logo
- No generar logo nuevo
- Si es visualmente débil, tratarlo como placeholder

### Propuesta de organización visual (fase futura)
- **Hero:** mejor imagen de hamburguesa disponible en `dishes` (o la más clara/centrada)
- **Galería:** imágenes adicionales de hamburguesas (`dishes`) + imagen del local (`venue`)
- **Fachada:** usar imagen de `venue` en sección “Ubicación” o “Sobre nosotros”

---

## 7) Limitaciones conocidas
- No existe menú estructurado disponible
- No existe logo oficial
- No existe branding formal
- No hay fotografías profesionales
- No hay historia oficial del negocio
- No hay misión, visión ni texto corporativo
- No se conocen colores de marca
- No se conocen tipografías oficiales

---

## 8) Reglas estrictas para Codex (obligatorias)
### Codex NO debe
- Inventar menú
- Inventar precios específicos
- Inventar historia del restaurante
- Inventar fundador o año de fundación
- Inventar colores de marca
- Inventar logotipo
- Inventar testimonios
- Inventar promociones
- Inventar certificaciones
- Inventar redes sociales
- Inventar afirmaciones no verificadas
- Usar imágenes externas fuera del repositorio

### Si falta información
- Usar estructura neutra
- Omitir secciones no sustentadas
- O marcar contenido como placeholder de forma explícita

---

## 9) Alcance del futuro desarrollo web (fases siguientes)
La web a construir posteriormente deberá:
- Ser estática
- Representar correctamente un restaurante **Fast Casual**
- Transmitir:
  - Hamburguesas como producto central
  - Calidad y frescura
  - Servicio rápido
  - Enfoque en delivery y take away
  - Disponibilidad nocturna
- Incluir (sin inventar datos):
  - Hero
  - Sección de productos destacados (sin inventar menú)
  - Información de servicios
  - Horarios
  - Ubicación
  - Contacto
  - Enlaces externos (Uber Eats y Restaurant Guru)

---

## 10) Instrucción de control de fase
Este documento es exclusivamente **contexto y reglas** para guiar el desarrollo posterior.

**No desarrollar todavía.**  
**No escribir código.**  
**No comenzar implementación.**
