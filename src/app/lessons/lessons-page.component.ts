import { Component } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons-page.component.html',
  styleUrls: ['./lessons-page.component.scss'],
})
export class LessonsPage {
  public lessons = [
    {
      id: 1,
      title: 'Introduction to Coptic',
      description: 'Learn the basics of the Coptic language.',
    },
    {
      id: 2,
      title: 'Coptic Alphabet',
      description: 'Familiarize yourself with the Coptic alphabet.',
    },
    {
      id: 3,
      title: 'Basic Phrases',
      description: 'Learn some basic Coptic phrases.',
    },
    // Add more lessons as needed
  ];
}
