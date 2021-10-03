import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { ITodo } from './entities/todo.interface';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>
) {}
  create(todo: ITodo) {
    return from(this.todoRepository.save(todo));
  }

  findAll() {
    return from(this.todoRepository.find());
  }

  findOne(id: number) {
    return from(this.todoRepository.findOneOrFail(id));
  }

  remove(id: number) {
    return from(this.todoRepository.delete(id));
  }
}
