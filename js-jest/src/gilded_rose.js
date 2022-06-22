
const SPECIAL_PRODUCTS = Object.freeze({
  agedBrie: 'Aged Brie',
  sulfuras: 'Sulfuras, Hand of Ragnaros',
  backstagePasses: 'Backstage passes to a TAFKAL80ETC concert',
  conjured: 'Conjured Mana Cake'
})

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  
  constructor(items=[]){
    this.items = items;
  }

  addItemQualityBy(currentValue, requiredToAdd) {
    const MAX = 50
    const SUM = currentValue + requiredToAdd
    return SUM > MAX ? MAX : SUM
  }

  reduceItemQualityBy(currentValue, requiredToReduce) {
    const MIN = 0
    const SUM = currentValue - requiredToReduce
    return SUM < MIN ? MIN : SUM
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      
      if (this.items[i].name != SPECIAL_PRODUCTS.sulfuras) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      
      if (this.items[i].name === SPECIAL_PRODUCTS.agedBrie) {
        this.items[i].quality = this.addItemQualityBy(this.items[i].quality, 1);
      } else if (this.items[i].name === SPECIAL_PRODUCTS.sulfuras) {
        // to correct if someone enters value other than 80
        if (this.items[i].quality !== 80) {
          this.items[i].quality = 80
        }
      } else if (this.items[i].name === SPECIAL_PRODUCTS.backstagePasses) {
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = 0;
        } else if (this.items[i].sellIn <= 4) {
          this.items[i].quality = this.addItemQualityBy(this.items[i].quality, 3);
        } else if (this.items[i].sellIn <= 9) {
          this.items[i].quality = this.addItemQualityBy(this.items[i].quality, 2);
        } else if (this.items[i].sellIn >= 10) {
          this.items[i].quality = this.addItemQualityBy(this.items[i].quality, 1);
        }
      } else if (this.items[i].name === SPECIAL_PRODUCTS.conjured) {
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = this.reduceItemQualityBy(this.items[i].quality, 4);
        } else {
          this.items[i].quality = this.reduceItemQualityBy(this.items[i].quality, 2);
        }
      } else {
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = this.reduceItemQualityBy(this.items[i].quality, 2);
        } else {
          this.items[i].quality = this.reduceItemQualityBy(this.items[i].quality, 1);
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
