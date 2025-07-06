import { Controller  , Get, Post} from '@nestjs/common';

@Controller('dog')
export class DogController {
    @Get()
    findAll():string{
        return "This is dogs";
    }

    
}
