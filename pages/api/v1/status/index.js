function status(request, response) {
  response.status(200).json({ chave: "testando status" });
}

export default status;
