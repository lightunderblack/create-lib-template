export default class HelloWorld {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public sayHello(): void {
    console.log(`${this.name} say Hello World`);
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
