function normalizeValue(str) {
  return Number(str.replace(/[^0-9-]/g, ''));
}

export { normalizeValue };
