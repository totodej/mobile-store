const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/products", (req, res, next) => {
  const products = [
    {
      id: 1,
      title: "iPhone 14 Pro Max",
      price: 1479,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2FiPhone_14_Pro_Max_Space_Black_PDP_Image_Position-1a__FRFR_631a158df4b8e157944a886a.jpg?crop=2826,3999,490,0&format=504x504&saveas=jpg&saveasquality=85",
      brand: "Apple",
    },
    {
      id: 2,
      title: "iPhone 14 Pro",
      price: 1329,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2FiPhone_14_Pro_Space_Black_PDP_Image_Position-1a__FRFR_6329868f1894b02633be87a0.jpg?format=504x504&saveas=jpg&saveasquality=85",
      brand: "Apple",
    },
    {
      id: 3,
      title: "iPhone 14 Plus",
      price: 1119,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900_633ed9e642fd7216ac251b53.png?format=504x504&saveas=png&saveasquality=85",
      brand: "Apple",
    },
    {
      id: 4,
      title: "iPhone 14",
      price: 969,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2FiPhone_14_Midnight_PDP_Image_Position-1A__FRFR_632984d4187f52493ab42228.jpg?format=504x504&saveas=jpg&saveasquality=85",
      brand: "Apple",
    },
    {
      id: 5,
      title: "iPhone 13",
      price: 869,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-NOIR1_61f8df5230ee0236ac664bdd_61437903e26fe34852099ea6.png?format=504x504&saveas=png&saveasquality=85",
      brand: "Apple",
    },
    {
      id: 6,
      title: "iPhone 12",
      price: 809,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-vue-1-blanc_ORANGE_61f0319f825b0b6dc10e38eb%255B1%255D_61fa533b33b8a35c2a07e0fa_606b2c6a125370680d3c0911.jpg?format=504x504&saveas=jpg&saveasquality=85",
      brand: "Apple",
    },
    {
      id: 7,
      title: "iPhone 13 mini",
      price: 769,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900_NOIR1_61f95ba133b8a35c2a07e0dd_614376ffe26fe34852099e94.png?format=504x504&saveas=png&saveasquality=85",
      brand: "Apple",
    },
    {
      id: 8,
      title: "iPhone 12 mini",
      price: 569,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-vue-1-191733_61f8df5230ee0236ac664e23_606b2c6a125370680d3c0917.png?format=504x504&saveas=png&saveasquality=85",
      brand: "Apple",
    },
    {
      id: 9,
      title: "iPhone 11",
      price: 539,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-vue-sc-197048_ORANGE_61eea7efa084e643ca7e2c6f_61f939cf33b8a35c2a07deff_606b2c6a125370680d3c0926.png?format=504x504&saveas=png&saveasquality=85",
      brand: "Apple",
    },
    {
      id: 10,
      title: "Galaxy S23",
      price: 1019,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2FDM1_Vert_01_Carrousel_Asset_Diamond_BackFront_63d0f8869c6aa962b5c27a28.png?format=504x504&saveas=png&saveasquality=85",
      brand: "Samsung",
    },
    {
      id: 11,
      title: "Galaxy Z Fold4",
      price: 1799,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-mobile-img-2_638090ad0144293633f4dd4e.jpg?format=504x504&saveas=jpg&saveasquality=85",
      brand: "Samsung",
    },
    {
      id: 12,
      title: "Galaxy Z Flip4",
      price: 1109,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-mobile-img-5_6380918e0144293633f4dd51.jpg?format=504x504&saveas=jpg&saveasquality=85",
      brand: "Samsung",
    },
    {
      id: 13,
      title: "Galaxy S22+",
      price: 1059,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-S22plus-front-white_620536ec2473e36aee9d6041_6200ecdd3ec8bd4f98f2c6d9.jpg?format=504x504&saveas=jpg&saveasquality=85",
      brand: "Samsung",
    },
    {
      id: 14,
      title: "Galaxy S22",
      price: 859,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-lavande-img-1_635a4c6e59dd705ff08f44d2.jpg?format=504x504&saveas=jpg&saveasquality=85",
      brand: "Samsung",
    },
    {
      id: 15,
      title: " Galaxy Z Flip3 5G",
      price: 969,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-samsung-galaxy-Z-flip3-noir-img1_61f8df5230ee0236ac664b10_6113ea6403d8176a395d7892.png?format=504x504&saveas=png&saveasquality=85",
      brand: "Samsung",
    },
    {
      id: 16,
      title: "Galaxy S21 FE 5G",
      price: 759,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-mobile-1_637b8257f0527a37028c212e.jpg?format=504x504&saveas=jpg&saveasquality=85",
      brand: "Samsung",
    },
    {
      id: 17,
      title: "Galaxy A13",
      price: 199,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-Car_1_Galaxy_A13_Noir_Front_Back-img1_62c2be674572f4720c2e2c14.jpg?format=504x504&saveas=jpg&saveasquality=85",
      brand: "Samsung",
    },
    {
      id: 18,
      title: "Galaxy S20 FE 5G",
      price: 499,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-mobile-6_637b8355f0527a37028c2130.jpg?format=504x504&saveas=jpg&saveasquality=85",
      brand: "Samsung",
    },
    {
      id: 19,
      title: "12 Pro 5G",
      price: 949,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2Fxiaomi_12_pro_5g_bleu_02_621f98823ed5890f45263c7a_621f982e80be3c25504c2f9d.png?format=504x504&saveas=png&saveasquality=85",
      brand: "Xiaomi",
    },
    {
      id: 20,
      title: "12 5G",
      price: 899,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2Fxiaomi_12_5g_bleu_02_621f926e80be3c25504c2f99_621f8d42e58d76540b50bd8d.png?format=504x504&saveas=png&saveasquality=85",
      brand: "Xiaomi",
    },
    {
      id: 21,
      title: "11T Pro 5G",
      price: 599,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-1-213651_61f8df5230ee0236ac664ed1_6152d5f8b7ab041f72946d89.png?format=504x504&saveas=png&saveasquality=85",
      brand: "Xiaomi",
    },
    {
      id: 22,
      title: "Mi 11i 5G",
      price: 699,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-vue-1-208269_61f8df5230ee0236ac66454b_609a312b29a549674ea6a219.png?format=504x504&saveas=png&saveasquality=85",
      brand: "Xiaomi",
    },
    {
      id: 23,
      title: "12T Pro",
      price: 199,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-Xiaomi_12T_Pro_Visuel_Noir_01-img1_6329dd45c1efcf4cd72227d5.jpg?format=504x504&saveas=jpg&saveasquality=85",
      brand: "Xiaomi",
    },
    {
      id: 24,
      title: "Redmi 10C",
      price: 169,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-Redmi_10C_Visuels_Gris_01-img1_62a85d0d39389f1594eb8ba2.jpg?format=504x504&saveas=jpg&saveasquality=85",
      brand: "Xiaomi",
    },
    {
      id: 25,
      title: "Redmi Note 11 Pro 5G",
      price: 369,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-Redmi_Note_11_Pro_5G_Render_Bleu_01-img1_6238a436fe6b214baac9195f.jpg?format=504x504&saveas=jpg&saveasquality=85",
      brand: "Xiaomi",
    },
    {
      id: 26,
      title: "Redmi Note 11S 5G",
      price: 269,
      description: "",
      type: "Téléphone",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-Redmi_Note_11S_5G_Visuels_Noir-img1_627a1c187fc66106ede5664f.jpg?format=504x504&saveas=jpg&saveasquality=85",
      brand: "Xiaomi",
    },
    {
      id: 27,
      title: "12T",
      price: 649,
      description: "",
      type: "Ecouteurs",
      image:
        "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-Xiaomi_12T_Visuel_Noir_01-img1_6329b56a1894b02633be87ab.jpg?format=504x504&saveas=jpg&saveasquality=85",
      brand: "Xiaomi",
    },
  ];
  res.status(200).json(products);
});

module.exports = app;
