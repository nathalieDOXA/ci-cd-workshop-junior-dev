function registerName(req) {
  return getNameFromParam(req);
}

const getNameFromParam = () => {
  return "Voldemort"
}

module.exports = {
  registerName
}