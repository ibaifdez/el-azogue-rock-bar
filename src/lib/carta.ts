import p11 from "@/assets/carta/p11.jpg";
import p12 from "@/assets/carta/p12.jpg";
import p13 from "@/assets/carta/p13.jpg";
import p14 from "@/assets/carta/p14.jpg";
import p15 from "@/assets/carta/p15.jpg";
import p16 from "@/assets/carta/p16.jpg";
import p17 from "@/assets/carta/p17.jpg";
import p18 from "@/assets/carta/p18.jpg";
import p19 from "@/assets/carta/p19.jpg";
import p20 from "@/assets/carta/p20.jpg";
import p21 from "@/assets/carta/p21.jpg";
import p22 from "@/assets/carta/p22.jpg";
import p23 from "@/assets/carta/p23.jpg";
import p24 from "@/assets/carta/p24.jpg";
import p25 from "@/assets/carta/p25.jpg";
import p26 from "@/assets/carta/p26.jpg";
import p27 from "@/assets/carta/p27.jpg";
import p28 from "@/assets/carta/p28.jpg";
import p29 from "@/assets/carta/p29.jpg";
import p30 from "@/assets/carta/p30.jpg";
import p31 from "@/assets/carta/p31.jpg";
import p33 from "@/assets/carta/p33.jpg";

export type Plato = {
  banda: string;
  nombre?: string;
  desc: string;
  precio: string;
  img?: string;
  tag?: string;
};

export type Seccion = { id: string; titulo: string; nota?: string; platos: Plato[] };

export const carta: Seccion[] = [
  {
    id: "burgers",
    titulo: "Burgers",
    nota: "¿Celíaco? Pide la que quieras con nuestro pan SIN GLUTEN.",
    platos: [
      { banda: "Marea", desc: "Burger Wagyu 200 gr. con champis, cebolla krunch, bacon, cheddar y salsa alioli en pan rústico cristal.", precio: "18,50", img: p12, tag: "Recomendación del bar" },
      { banda: "2 Alpargatas", desc: "Burger Wagyu 200 gr. con champis, cebolla caramelizada, queso de cabra y salsa roquefort en pan brioche rojo, coronada con guindillas rebozadas y parmesano.", precio: "18,00", img: p25, tag: "Campeona de Álava 2023" },
      { banda: "Azogue", desc: "Burger de buey 200 gr. con champis, cebolla krunch, bacon, cheddar y salsa alioli en pan rústico cristal.", precio: "16,50", img: p11 },
      { banda: "Black Sabbath", desc: "Burger Wagyu 200 gr. con salsa trufa, huevo frito, tacos de jamón y patatas paja en pan brioche rojo y negro espiral.", precio: "18,00", img: p13 },
      { banda: "Burger Queen", desc: "Burger Wagyu 200 gr., taquitos de torreznos de Soria, cheddar, panceta ibérica y mayonesa en pan brioche rojo y negro espiral.", precio: "18,50", img: p27 },
      { banda: "Marilyn Manson", desc: "Burger Wagyu 200 gr. con cheddar, panceta ibérica, mayonesa y cebolla krunch en pan brioche verde con nugget picante y jeringuilla de salsa Marea Fuego (súper picante).", precio: "18,50", img: p26, tag: "Súper picante" },
      { banda: "RIP", desc: "Burger de buey 200 gr. con setas a la plancha, cheddar, lascas de parmesano y jeringuilla de mayonesa trufada en pan brioche negro.", precio: "18,00", img: p24 },
      { banda: "Rockstar", desc: "Burger de buey 200 gr. con aros de cebolla, bacon, cheddar, salsa tártara y jeringuilla de salsa cheddar en pan brioche negro.", precio: "16,50", img: p20 },
      { banda: "Bruce Springsteen", desc: "Burger Wagyu 200 gr. con salsa roquefort y pimientos rojos asados en pan brioche azul.", precio: "16,00", img: p14 },
      { banda: "Malaputa", desc: "Burger Wagyu 200 gr. con 5 quesos: cabra, cheddar, parmesano, mozzarella y salsa roquefort en pan brioche azul.", precio: "16,00", img: p16 },
      { banda: "Extremoduro", desc: "Burger de buey 200 gr. con guacamole, cheddar, salsa mejicana, salsa roquefort, migas de natxos y jalapeños en pan brioche verde.", precio: "16,00", img: p17 },
      { banda: "Metallica", desc: "Burger de buey 200 gr. con tomate, pimiento verde, jamón serrano y salsa roquefort en pan brioche.", precio: "16,00", img: p18 },
      { banda: "AC/DC", desc: "Burger de buey 200 gr. con lechuga, bacon, cheddar, salsa tártara, salsa picante y jalapeños en pan brioche.", precio: "16,00", img: p21, tag: "Picante" },
      { banda: "Guns N' Roses", desc: "Burger de buey 200 gr. con lechuga, bacon, queso de cabra, salsa miel mostaza y mayonesa en pan brioche.", precio: "15,00", img: p15 },
      { banda: "Kutxi", desc: "Burger de buey 200 gr. con lechuga, aros de cebolla, bacon, cheddar y salsa barbacoa en pan brioche.", precio: "15,00", img: p23 },
      { banda: "Kolibri", desc: "Burger de buey 200 gr. con lechuga, tomate, cebolla, pepinillos, cheddar líquido y mayonesa picante en pan brioche rojo.", precio: "15,00", img: p28 },
      { banda: "The Rolling Stones", desc: "Costilla mechada con patata paja, cebolla krunch, salsas barbacoa y miel mostaza en pan brioche.", precio: "15,00", img: p19 },
      { banda: "Soziedad Alkoholika", desc: "Kebab de ternera con queso de cabra, lechuga, salsa alioli, ketchup y mayonesa.", precio: "15,00", img: p22 },
      { banda: "Slash", desc: "Burger de pollo con salsa barbacoa, cheddar líquido, queso de cabra y bacon en pan brioche.", precio: "14,00", img: p29 },
      { banda: "Iron Maiden", desc: "Burger de pollo crujiente con lechuga, tomate y mayonesa en pan brioche.", precio: "14,00", img: p30 },
      { banda: "U2", desc: "Burger vegana con lechuga, tomate, cebolla y ketchup en pan brioche.", precio: "15,50", img: p31, tag: "Vegana" },
    ],
  },
  {
    id: "entrantes",
    titulo: "Para picar",
    platos: [
      { banda: "Dire Straits", nombre: "Calamares", desc: "", precio: "10,00" },
      { banda: "The Police", nombre: "Alitas de pollo", desc: "", precio: "10,00" },
      { banda: "Def Leppard", nombre: "Secretos de pollo", desc: "", precio: "10,00" },
      { banda: "Aerosmith", nombre: "Alitas de pollo", desc: "Muyyy picantes", precio: "12,00", tag: "Muy picante" },
      { banda: "Los Linaje", nombre: "Alitas de pollo", desc: "Rebozadas picantes", precio: "11,00", tag: "Picante" },
      { banda: "Bon Jovi", nombre: "Secretos de pollo", desc: "Muyyy picantes", precio: "12,00", tag: "Muy picante" },
      { banda: "Scorpions", nombre: "5 Tequeños", desc: "", precio: "8,50" },
      { banda: "Loquillo", nombre: "Nuggets de queso y jalapeños", desc: "", precio: "8,50" },
      { banda: "La Polla Records", nombre: "Aros de cebolla", desc: "", precio: "9,50" },
      { banda: "Coldplay", nombre: "Natxos", desc: "", precio: "11,00" },
      { banda: "Red Hot Chili Peppers", nombre: "Guindillas Ibarra en tempura", desc: "", precio: "12,00" },
      { banda: "ZZ Top", nombre: "Torreznos de Soria", desc: "", precio: "11,00" },
      { banda: "Bonnie Tyler", nombre: "Sepia rebozada", desc: "", precio: "11,00" },
      { banda: "Barricada", nombre: "Quesadilla", desc: "Tortilla de trigo con tomate huerta, bacon, cebolla krunch y cheddar a la plancha.", precio: "8,00" },
      { banda: "Su Ta Gar", nombre: "Wrap", desc: "Tortilla de trigo con pollo rebozado krunch, tomate, cheddar, bacon y mayonesa picante.", precio: "10,00" },
    ],
  },
  {
    id: "patatas",
    titulo: "Patatas",
    platos: [
      { banda: "Ramones", nombre: "Patatas bravioli", desc: "", precio: "10,00" },
      { banda: "Los Suaves", nombre: "Patatas bacon cheese", desc: "", precio: "10,00" },
      { banda: "Dover", nombre: "Patatas trufa bacon cheese", desc: "", precio: "10,00" },
      { banda: "La Fuga", nombre: "Patatas 5 quesos", desc: "", precio: "10,00" },
      { banda: "The Cranberries", nombre: "Patatas papa", desc: "Tacos de jamón, huevo frito y salsa trufa.", precio: "11,00" },
    ],
  },
  {
    id: "ensaladas",
    titulo: "Ensaladas y costilla",
    platos: [
      { banda: "Green Day", nombre: "Ensalada", desc: "Lechuga con pollo krunch, cebolla krunch, bacon, queso, migas de natxos, salsa roquefort y vinagre de Módena.", precio: "11,00" },
      { banda: "The Beatles", nombre: "Ensalada", desc: "Lechuga con calamares, cebolla morada, cebolla krunch, migas de natxos, salsa alioli y vinagre de Módena.", precio: "12,00" },
      { banda: "Nirvana", nombre: "Costilla asada", desc: "Costilla asada muy tierna con salsa barbacoa y patatas.", precio: "16,50", img: p33 },
    ],
  },
  {
    id: "postres",
    titulo: "Postres",
    platos: [
      { banda: "Los Rodríguez", nombre: "Tarta de queso Lotus", desc: "", precio: "5,50" },
      { banda: "Los Rodríguez", nombre: "Tarta de queso frutos rojos", desc: "", precio: "5,50" },
      { banda: "The Who", nombre: "Coulant de chocolate", desc: "", precio: "5,00" },
      { banda: "Los Secretos", nombre: "Valenciano", desc: "Zumo de naranja con helado de vainilla y Cointreau.", precio: "6,00" },
      { banda: "Rosendo", nombre: "Escocés", desc: "Café con helado de vainilla y whisky.", precio: "6,00" },
      { banda: "The Doors", nombre: "Tarrina vainilla", desc: "Helado de vainilla con galleta y chips de chocolate.", precio: "4,50" },
      { banda: "The Doors", nombre: "Tarrina tarta de queso de fresa", desc: "", precio: "4,50" },
    ],
  },
];

export const salsas = ["Alioli", "Mayonesa", "Barbacoa", "Tártara", "Guacamole", "Roquefort", "Sweet chili", "Mexicana", "Miel mostaza", "Azogue Fuego (picante)", "Marea Fuego (muy picante)"];

export const merch = [
  { nombre: "Camisetas", precio: "20" },
  { nombre: "Sudaderas", precio: "30" },
  { nombre: "Totebag", precio: "10" },
];

export const normas = [
  "Las mesas tienen preferencia para comidas y/o cenas.",
  "Los pedidos se realizan al final de la barra, donde está el cartel de \"RECOGIDA PEDIDOS\".",
  "Los pedidos se abonan al momento.",
  "Cuando se encienda y suene el llamador, tu pedido estará listo donde lo pediste.",
  "Tenéis cubiertos y servilletas justo donde se hacen los pedidos.",
  "Tened paciencia, estamos trabajando para que disfrutéis de vuestro tiempo libre.",
  "Ni la comida viene en latas, ni los cocineros vuelan.",
];

export const INSTAGRAM = "https://www.instagram.com/el_azogue_rock";
export const MAPS = "https://maps.app.goo.gl/6ndi6RpyJhZuVYx19";
export const MAP_EMBED = "https://maps.google.com/maps?q=El%20Azogue%20Rock%4042.8634523,-2.7000012&z=17&output=embed";
