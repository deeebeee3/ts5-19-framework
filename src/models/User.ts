import axios, { AxiosResponse } from 'axios';
interface UserProps {
  //make properties optional
  id?: number,
  name?: string,
  age?: number
}

export class User {
  //an interface is a type - using an interface to describe an object
  constructor(private data: UserProps) { }

  get(propName: string): (number | string) {
    return this.data[propName];
  }

  //argument can be an object that can contain a name as a string or an age as a number
  //set(update: { name: string; age: number }): void {
  //but we'll use an interface instead
  set(update: UserProps): void {
    //overwrite data with all the properties and values of update
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      //put
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      //post
      axios.post('http://localhost:3000/users/', this.data);
    }
  }


}