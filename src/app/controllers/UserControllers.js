
import {v4} from 'uuid';
import * as Yup from 'yup';
import User from '../models/user';


class UserController{
    async store (request, response) {  
        const schema = Yup.object({
            nome:Yup.string().required(),
            email:Yup.string().email().required(),
            password_hash:Yup.string().min(6).required(),
            admin:Yup.boolean(),

        });
        const validation  =await schema.isValid(request.body);
        console.log(validation);


           // schema.validateSync(request.body);

     // const isValid = await schema.isValid (request.body);
       //if (!isValid){
       // return response.status(488).json ({error:'Make sure thea data is'})
      //}

        const {name, email, password_hash, admin} = request.body;
        const user = await User.create ({
            id:v4 (),
            name,
            email,
            password_hash,
         });

        return response.status (201).json({
            id: user.id,
            name,
            email,
            admin,
        });
    }
}


export default new UserController ();

/**
 *store => Cadastrar/ adicionar
 *index => Listar vários usuários
 *show => Lista apenas um usuário
 *update => Atualizar
 *delete => Deletar
 */