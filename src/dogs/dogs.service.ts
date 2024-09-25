import { Injectable } from '@nestjs/common';
import { Dog } from './interfaces/dogs.interfaces';

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = [];

  findAll(): Dog[] {
    return this.dogs;
  }

  create(dog: Dog) {
    this.dogs.push(dog);
  }
}
