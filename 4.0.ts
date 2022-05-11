abstract class User {
  constructor(
    protected name: string,
    protected age: number,
    protected sex: string[],
    protected isMarry: boolean,
    protected description?: string
  ) {}

  abstract descriptionPrint(): void;

  test(): void {
    console.log(this.name);
  }
}

class Player extends User {
  descriptionPrint(): void {
    console.log(this.description);
  }
}

const player = new Player("Idooru", 25, ["male"], false, "Hello");
player.descriptionPrint();
player.test();

class Man {
  // private: 클래스 내부에서만 접근 가능, public: 클래스 외부에서도 접근 가능
  constructor(private name: string, private age: number) {}

  public intro(): void {
    console.log(`I'm ${this.name}. and i'm ${this.age} year's old`);
  }
}

const man = new Man("Idooru", 25);
man.intro();

abstract class Mammalia {
  constructor(
    // protected: 상속을 해줄 때 그리고 클래스 외부에서 접근 불가능하게 하기 위해 사용
    protected strain: string,
    protected legs: number,
    protected tail: number,
    protected isWalking: boolean
  ) {}

  abstract intro(): void; // abstract: 자식 클래스가 메서드로 사용하기 위해서 부모 클래스에서 abstract 키워드로 메서드를 선언함
}

class Predator extends Mammalia {
  public intro() {
    console.log(
      ` strain: ${this.strain}\n legs: ${this.legs}\n tail: ${this.tail}\n isWalking: ${this.isWalking}`
    );
  }
}

const lion = new Predator("feline", 4, 1, true);
lion.intro();
