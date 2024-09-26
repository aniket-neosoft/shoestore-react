export default class Shoe {
    constructor(_id, shoeName, brandName, category, description, price, discount, size, color, image, gender) {
        this._id = _id;
        this.shoeName = shoeName;
        this.brandName = brandName;
        this.category = category;
        this.description = description;
        this.price = price;
        this.discount = discount;
        this.size = size;
        this.color = color;
        this.image = image;
        this.gender = gender;
    }
}