// nomor 1
// buat program order goFood
// food => { name : "capcay" , price : 50000, qty : 2 }
// pada saat menambahkan makanan yang sama , maka qty akan diupdate
// apabila makanan yg ditambah belum ada di cart maka push
// restoran => { name : "kwetiaw 99", jarak : 5 }
// 1km harga ongkir adalah 2000
// berapa total pricenya ?

// buat 4 function
// 1. hitung total biaya (qty(food)*price(food)+jarak(resto)*2000)
// 2. addFood menambahkan makanan ke cart (+qty > totalqty)
// 3. menghapus makanan di cart (-qty > totalqty)
// 4. mengedit qty makanan tertentu di dalam cart (totalqty)

// CRUD = > CREATE , READ (GET=>) , UPDATE ,DELETE

//PROGRAM ORDER GO FOOD

class Food {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
class Resto {
  constructor(name, jarak) {
    super(name, price);
    this.name = name;
    this.jarak = jarak;
  }
}
class Order {
  #total = 0;
  #food = [];
  #ongkir = [];

  addToCart(resto, food, qty) {
    if (resto instanceof Resto && food instanceof Food && qty > 0) {
      food.qty = qty;
      this.#food.push(food);
      this.#ongkir.push(resto.jarak * 2000);
    } else {
      console.log("invalid");
    }
  }
  addFood(food, qty) {
    if (food instanceof Food && qty > 0) {
      food.qty = qty;
      this.#food.push(food);
    } else {
      console.log("invalid");
    }
  }
  deleteFood(food) {
    let index = this.#food.findIndex((x) => x.name === `${food}`);
    if (this.#food[index].name == food) {
      this.#food.splice(index, 1);
    } else {
      console.log("invalid");
    }
  }
  deleteQty(food, qty) {
    let index = this.#food.findIndex((x) => x.name === `${food}`);
    if (this.#food[index].name == food && qty > 0) {
      this.#food[index].qty = this.#food[index].qty - qty;
    } else {
      ("invalid");
    }
  }
  addQty(food, qty) {
    let index = this.#food.findIndex((x) => x.name === `${food}`);
    if (this.#food[index].name == food && qty > 0) {
      this.#food[index].qty = this.#food[index].qty + qty;
    } else {
      ("invalid");
    }
  }
  showTotal() {
    this.#total =
      this.#food.reduce(
        (sum, current) => sum + current?.price * current?.qty,
        0
      ) + this.#ongkir[0];
    return this.#total;
  }
}

// nomor 2 => buat lah 5 function dengan parameter tinggi untuk menciptakan segitia bintang dengan menggunakan looping

// expected output :
// *
// **
// ***
// ****
let segitiga1 = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i) + " ".repeat(n - i));
  }
};
segitiga1(4);
console.log("--------------------");
//  ****
//   ***
//    **
//     *
let segitiga2 = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(i) + "*".repeat(n - i));
  }
};
segitiga2(4);
console.log("--------------------");
//     *
//    **
//   ***
//  ****
let segitiga3 = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
  }
};
segitiga3(4);
console.log("--------------------");
//  ****
//  ***
//  **
//  *
let segitiga4 = (n) => {
  for (let i = 0; i < n; i++) {
    console.log("*".repeat(n - i) + " ".repeat(i));
  }
};
segitiga4(4);
console.log("--------------------");
//      *
//     * *
//    * * *
//   * * * *
let segitiga5 = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "* ".repeat(i));
  }
};
segitiga5(4);
