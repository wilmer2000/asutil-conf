import { Component } from '@angular/core';
import { IMenuItem, MenuItemComponent } from '../shared/menu-item/menu-item.component';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-start',
  imports: [
    MenuItemComponent,
    NgClass,

  ],
  templateUrl: './start.component.html',
})
export class StartComponent {
  menu: IMenuItem[] = [
    {
      theme: 'dark',
      icon: 'mic',
      title: 'Speakers',
      bgUrl: '/img/photos/speaker.jpg',
      url: '/speakers',
    },
    {
      theme: 'light',
      icon: 'globe2',
      title: 'Networking',
      bgUrl: '/img/photos/networking.jpg',
      url: '/networking',
    },
    {
      theme: 'dark',
      icon: 'clock',
      title: 'Agenda',
      bgUrl: '/img/photos/agenda.jpg',
      url: '/agenda',
    },
    {
      theme: 'dark',
      icon: 'info-circle',
      title: 'Info',
      bgUrl: '/img/photos/info-circle.jpg',
      url: '/info',
    },
    {
      theme: 'light',
      icon: 'briefcase',
      title: 'Sponsors',
      bgUrl: '/img/photos/sponsors.jpg',
      url: '/sponsors',
    },
    {
      theme: 'light',
      icon: 'map',
      title: 'Floor Plan',
      bgUrl: '/img/photos/floor-plan.jpg',
      url: '/floor-plan',
    },
    {
      theme: 'dark',
      icon: 'people',
      title: 'Attendees',
      bgUrl: '/img/photos/attendess.jpg',
      url: '/attendees',
    },
    {
      theme: 'dark',
      icon: 'person',
      title: 'My Profile',
      bgUrl: '/img/photos/profile.jpg',
      url: '/profile',
    },
    {
      theme: 'light',
      icon: 'shop-window',
      title: 'Exhibitors',
      bgUrl: '/img/photos/exhibitors.jpg',
      url: '/exhibitors',
    },
  ];
}
