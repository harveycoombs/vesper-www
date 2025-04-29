export function formatNumber(raw: number): string {
    const formatter = new Intl.NumberFormat("en-US");
    return formatter.format(raw);
}