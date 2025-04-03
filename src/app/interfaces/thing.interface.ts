export default interface Thing {
  id: number;
  areaId: number;
  joinedWith: number | null;
  sku: string;
  defaultSku: string;
  status: 'open' | 'closed';
  countActive: number;
}
