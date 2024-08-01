export function formatDate(date: string): string {
  if (!date) return "Nenhuma data disponível";
  return new Date(date)
    .toLocaleString("pt-BR", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(",", "");
}
