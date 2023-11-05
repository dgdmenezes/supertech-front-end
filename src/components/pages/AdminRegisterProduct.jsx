import React from "react";
import AdminTemplate from "../templates/AdminTemplate";
import styles from "./AdminRegisterProduct.module.css";

export default function AdminRegisterProduct() {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [stock, setStock] = React.useState("");
  const [image, setImage] = React.useState("");
  const [image2, setImage2] = React.useState("");
  const [image3, setImage3] = React.useState("");
  const [image4, setImage4] = React.useState("");

  const CORS = {
    method: "POST",
    body: JSON.stringify({
      name,
      description,
      price,
      category,
      stock,
      image,
      image2,
      image3,
      image4,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    fetch("http://localhost:3001/products/create", CORS).then(() => {
      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
      setStock("");
      setImage("");
      setImage2("");
      setImage3("");
      setImage4("");
    });
  };

  return (
    <AdminTemplate>
      <div className={styles.bodyAdmin}>
        <h1>Cadastro Manual de Produto</h1>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.borderFieldSet}>
            <br />

            <label for="name" className="form-label">
              Nome:
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="name"
              placeholder="Ex.: Smartphone Galaxy S20"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <label for="description" className="form-label">
              Descrição:
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="description"
              placeholder="Ex.: Smartphone Samsung Galaxy S21 FE 5G, 128GB, 6GB RAM, Processador Octa Core última geração, Bateria de 4500mAh, Câmera Tripla Traseira de 12MP + 12MP + 8MP, Selfie de 32MP, Tela Infinita de 6.4 120Hz, Dual Chip, Android"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />

            <label for="price" className="form-label">
              Preço:
            </label>
            <input
              type="number"
              className={`${styles.medium} form-control`}
              id="price"
              placeholder="Ex.: 30,50"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />

            <label for="category" className="form-label">
              Categoria:
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="category"
              placeholder="Smartfone"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />

            <label for="stock" className="form-label">
              Estoque:
            </label>
            <input
              type="number"
              className={`${styles.medium} form-control`}
              id="stock"
              placeholder="Ex.: 30"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
            <br />
          </div>
          <br />

          <div className={styles.borderFieldSet}>
            <fieldset />
            <legend>Imagem</legend>

            <br />
            <label for="imageMain" className="form-label">
              Imagem Principal - <span> obrigatório</span>
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="imageMain"
              placeholder="Endereço da imagem principal - obrigatório"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <br />
            <br />

            <label for="image2" className="form-label">
              Segunda Imagem
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="image2"
              placeholder="Endereço da segunda Imagem"
              value={image2}
              onChange={(e) => setImage2(e.target.value)}
            />
            <br />
            <br />

            <label for="image3" className="form-label py-2">
              Terceira Imagem
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="image3"
              placeholder="Endereço da teceira Imagem"
              value={image3}
              onChange={(e) => setImage3(e.target.value)}
            />
            <br />
            <br />

            <label for="image4" className="form-label">
              Quarta imagem
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="image4"
              placeholder="Endereço da quarta imagem"
              value={image4}
              onChange={(e) => setImage4(e.target.value)}
            />
            <br />

            <fieldset />
          </div>
          <button className="button-primary">Salvar</button>
        </form>
        <br />
        <div className="borderFieldSet">
          <fieldset />

          <div className={styles.borderFieldSet}>
            <legend>Especificações</legend>
            <label for="brand" className="form-label">
              Marca
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="brand"
              placeholder="Marca ex.: Samsung"
            />
            <br />

            <label for="model" className="form-label">
              Modelo
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="model"
              placeholder="Ex.: Galaxy S20"
            />
            <br />
            <label for="processador" className="form-label">
              processador
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="processador"
              placeholder="Ex.: Exynos 1100"
            />
            <br />
            <label for="memoriaRAM" className="form-label">
              Memória Ram
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="memoriaRAM"
              placeholder="Ex.: 16GB de Ram"
            />
            <br />
            <label for="armazenamento" className="form-label">
              Armazenamento
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="armazenamento"
              placeholder="Ex.: 128GB"
            />
            <br />
            <label for="sistemaOperacional" className="form-label">
              Sistema Operacional
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="sistemaOperacional"
              placeholder="ex.: Android"
            />
            <br />
            <label for="tamanhoTela" className="form-label">
              Tamanho da Tela
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="tamanhoTela"
              placeholder="ex.: 8 polegadas"
            />
            <br />
            <label for="resolucaoTela" className="form-label">
              Resolução Da Tela
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="resolucaoTela"
              placeholder="ex.:  QuadHD"
            />
            <br />
            <label for="genero" className="form-label">
              Resolouçãao Da Tela
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="genero"
              placeholder="ex.: Aventura"
            />
            <br />
            <label for="classificacao" className="form-label">
              Classificação
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="classificacao"
              placeholder="ex.: 12 anos"
            />
            <br />
            <label for="idioma" className="form-label">
              Idioma
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="idioma"
              placeholder="ex.: Inglês, Francês, Português do Brasil"
            />
            <br />
            <label for="itensInclusos" className="form-label">
              Itens Inclusos
            </label>
            <input
              type="text"
              className={`${styles.medium} form-control`}
              id="itensInclusos"
              placeholder="ex.: Carregador Fast Charge, Fone de ouvido e OTG"
            />
            <br />
            <fieldset />
          </div>
        </div>
      </div>
    </AdminTemplate>
  );
}
