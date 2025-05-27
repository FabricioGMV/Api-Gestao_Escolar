# 📚 API Escolar com Flask + SQLAlchemy

asdasdasd

Esta é uma API educacional desenvolvida em Flask, com rotas para Alunos, Professores e Turmas.  
A API usa SQLite localmente e PostgreSQL em produção (Render).

---

## 🚀 Como rodar localmente

### Pré-requisitos

- Python 3.10 ou superior
- `pip`
- Virtualenv (opcional)

### 1. Instalar dependências

```bash
pip install -r requirements.txt
```

### 2. Rodar a aplicação local

```bash
python app.py
```

> A aplicação estará acessível em: http://127.0.0.1:5000

> O banco será salvo no arquivo `school-db.db` (SQLite)

---

## 🐳 Rodando com Docker localmente

### 1. Build da imagem

```bash
docker build -t flask-api .
```

### 2. Rodar o container

```bash
docker run -p 5000:5000 flask-api
```

---

## ☁️ Deploy no Render

### 1. Criar banco PostgreSQL

- No Render, crie um novo banco de dados PostgreSQL.
- Copie a variável `DATABASE_URL` gerada.

### 2. Criar Web Service

- Vá em [https://dashboard.render.com](https://dashboard.render.com)
- Clique em "New Web Service" → "Deploy an existing Dockerfile"
- Aponte para seu repositório GitHub com este projeto
- Configure:

  - **Environment**: `Docker`
  - **Build Command**: _(deixe em branco ou `None`)_
  - **Start Command**: _(Render detecta automaticamente `CMD` do Dockerfile)_
  - **Porta**: Render detecta automaticamente se você usar `0.0.0.0`

### 3. Variáveis de ambiente

Adicione a variável de ambiente:

```
DATABASE_URL=postgresql://usuario:senha@host:porta/nome_do_banco
```

## ✅ Requisitos do Render

- A aplicação **deve rodar em `0.0.0.0`**, não `127.0.0.1`.
- O Render expõe automaticamente a porta definida no `app.run`.

---

## 📄 Licença

Este projeto é livre para uso educacional.
