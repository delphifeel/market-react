import $ from "jquery"

class ItemsService {
    getItems() {
        return $.when([
            {
                "id": 1,
                "name": "Apples",
                "quantity": 2,
                "price": 5.00
            },
            {
                "id": 2,
                "name": "Bananas",
                "quantity": 1,
                "price": 10.00
            }
        ]);
    }
}

export default new ItemsService();
