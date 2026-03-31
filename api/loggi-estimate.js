export default async function handler(req, res) {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, Origin");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {

    const { cep } = req.body || {};

    if (!cep) {
      return res.status(400).json({ error: "CEP não informado" });
    }

    const cepLimpo = String(cep).replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      return res.status(400).json({ error: "CEP inválido" });
    }

    // aqui entrará depois sua lógica real da Loggi
    return res.status(200).json({ days: 2 });

  } catch (error) {

    console.error("Erro interno:", error);

    return res.status(500).json({
      error: "Erro interno ao calcular prazo"
    });

  }

}
