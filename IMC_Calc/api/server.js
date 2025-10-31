import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root", // <<-- Verifique se seu usuário está correto
  password: "", // <<-- Verifique se sua senha está correta
  database: "imc_calc_db",
});

const JWT_SECRET = "sua-chave-secreta-pode-ser-qualquer-coisa";

// === ROTAS DA API (Nossos "pedidos") ===

// Rota 1: Cadastro (POST /api/register)
app.post("/api/register", async (req, res) => {
  try {
    // --- MUDANÇA AQUI ---
    // Trocamos "senha" por "password" para bater com o frontend
    const { nome, email, password } = req.body;

    // Criptografa a senha antes de salvar no banco
    // --- MUDANÇA AQUI ---
    const senhaCriptografada = await bcrypt.hash(password, 10);

    // Insere o novo usuário na tabela 'usuarios'
    const [result] = await dbPool.execute(
      "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
      [nome, email, senhaCriptografada] // Aqui o nome da coluna no banco é "senha" (o que está certo)
    );

    const novoUsuarioId = result.insertId;
    const token = jwt.sign({ id: novoUsuarioId }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      message: "Usuário cadastrado com sucesso!",
      token,
      user: { id: novoUsuarioId, nome, email },
    });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res
        .status(409)
        .json({ message: "Este e-mail já está cadastrado." });
    }
    console.error(error); // Adicionado para vermos erros futuros
    res.status(500).json({ message: "Erro no servidor." });
  }
});

// Rota 2: Login (POST /api/login)
app.post("/api/login", async (req, res) => {
  try {
    // --- MUDANÇA AQUI ---
    const { email, password } = req.body;

    const [rows] = await dbPool.execute(
      "SELECT * FROM usuarios WHERE email = ?",
      [email]
    );
    const usuario = rows[0];

    // --- MUDANÇA AQUI ---
    // Compara o "password" vindo do frontend com a "usuario.senha" vinda do banco
    if (!usuario || !(await bcrypt.compare(password, usuario.senha))) {
      return res.status(401).json({ message: "E-mail ou senha inválidos." });
    }

    const token = jwt.sign({ id: usuario.id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({
      message: "Login bem-sucedido!",
      token,
      user: { id: usuario.id, nome: usuario.nome, email: usuario.email },
    });
  } catch (error) {
    console.error(error); // Adicionado para vermos erros futuros
    res.status(500).json({ message: "Erro no servidor." });
  }
});

// Inicia o servidor da API
app.listen(PORT, () => {
  console.log(`🚀 Servidor da API rodando em http://localhost:${PORT}`);
});
