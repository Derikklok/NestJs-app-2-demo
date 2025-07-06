import { Controller  , Get} from '@nestjs/common';

@Controller('dog')
export class DogController {
    @Get()
    findAll():string{
        return "This is dogs";
    }
}
