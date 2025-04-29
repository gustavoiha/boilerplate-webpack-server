export default class House {
  constructor (
    public squareMeters: number,
    public price: number
  ) {}

  public pricePerSquareMeter (): number {
    return Math.round(100 * this.price / this.squareMeters) * 100
  }
}
