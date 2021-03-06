import Image from '../models/Image';

export default{
    render(image:Image){
        return {
            id:image.id,
            url:`http://192.168.0.15:3334/uploads/${image.path}`,
            //variaveis ambiente postagem
        };
    },
    renderMany(images:Image[]){
        return images.map(image=>this.render(image));
    }
}