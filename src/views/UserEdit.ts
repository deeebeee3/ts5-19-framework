import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserEdit extends View<User, UserProps>{

  //override regionsMap from the View parent Class
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form'
    };
  }

  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}