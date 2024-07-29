export class CharClass {
  name: string;
  title: string;
  team: string;
  picture: string;
  description: string;

  constructor(name: string, title: string, team: string, picture: string, description: string) {
    this.name = name;
    this.title = title;
    this.team = team;
    this.picture = picture;
    this.description = description;
  }
}