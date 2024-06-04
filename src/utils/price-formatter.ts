export function formatProductPrice(cents: number) {
  return formatCurrency(cents / 100);
}

export function formatCurrency(price: number) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
