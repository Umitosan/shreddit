import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'skates',
  pure: false
})

export class SkatesPipe implements PipeTransform {

  transform(input: Post[]) {
    var output: Post[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].category === "skate") {
        output.push(input[i]);
      }
    }
    return output;
  }

}
