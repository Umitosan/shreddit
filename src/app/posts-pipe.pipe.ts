import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'postspipe',
  pure: false
})

export class PostsPipe implements PipeTransform {

  transform(input: Post[], selectedCategory) {
    var output: Post[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].category === selectedCategory) {
        output.push(input[i]);
      }
    }
    return output;
  }

}
