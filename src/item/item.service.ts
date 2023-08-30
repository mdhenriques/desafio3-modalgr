import { Injectable } from "@nestjs/common";
import { CreateItemDTO } from "./dto/createItem.dto";
import { Item } from "./item.entity";

@Injectable()
export class ItemService {

    async createItem(createItemDTO: CreateItemDTO): Promise<Item> {
        const newItem = await Item.create({...createItemDTO});
        return newItem;
    }

    async getAllItems(): Promise<Item[]> {
        return Item.findAll({
            attributes: ['name', 'description']
        });
    }

    async getItemByName(wantedName: string): Promise<Item> {
        return Item.findOne({
            where: {
                name: wantedName
            },
            attributes: ['name', 'description']
        });
    }

    async deleteItemById(idToBeDeleted: number): Promise<any> {
        const itemToBeDeleted = Item.findOne({
            where: {
                id: idToBeDeleted
            }
        });
        (await itemToBeDeleted).destroy();
        //return 'oi';
    }
}