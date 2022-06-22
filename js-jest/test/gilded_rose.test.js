const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose simple product", function() {
  it("should foo and reduced quality and sellIn", function() {
    const gildedRose = new Shop([new Item("foo", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(9);
  });

  it("should degrade twice the quality", function() {
    const gildedRose = new Shop([new Item("foo", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it("should not be negative quality", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  
  
});

describe("Gilded Rose Aged Brie product", function() {
  it("should increases in quality the older it gets", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(11);
  });
  
  it("should be never more than 50 in quality", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
  });
});

describe("Gilded Rose Sulfuras product", function() {
  it("should never has to be sold or decreases in quality and quality should b 80", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(80);
  });

});

describe("Gilded Rose Backstage passes product", function() {
  it("should increases in quality the older it gets", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 20, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(19);
    expect(items[0].quality).toBe(11);
  });
  
  it("should increases in quality by 2 when there are 10 days or less", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(12);
  });

  it("should increases in quality by 3 when there are 5 days or less", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(13);
  });

  it("should increases in quality by 3 when there are 5 days or less but not more than 50", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(50);
  });

  it("should increases in quality drops to 0 after the concert", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("should be never more than 50 in quality", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});

describe("Gilded Rose conjured product", function() {
  it("should reduced quality twice as compare simple product", function() {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(8);
  });

  it("should degrade twice the quality as compare simple product", function() {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });

  it("should not be negative quality", function() {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  
  
});
