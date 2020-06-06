import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        //Transforma os dados pra um outro formato o qual vai ser mais acessícel para quem está requisitando as infos
        const serializedItems = items.map( item => {
            return {
                id: item.id,
                title: item.title,
                //para rodar na web: `http://localhost:3333/uploads/${item.image}`
                //para rodar no mobile: `http://192.168.100.6:3333/uploads/${item.image}`
                image_url: `http://192.168.100.6:3333/uploads/${item.image}`,
            };
        });
    
        return response.json(serializedItems);
    }
}

export default ItemsController;