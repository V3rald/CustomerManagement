import { Category } from "../models/category.model";

export const CATEGORIES: Category[] = [
    {
        title: 'Contacts',
        icon: 'location_on',
        value: 'contact',
        color: 'teal',
        url: '/contacts'
    },
    {
        title: 'Plans',
        icon: 'mobile_friendly',
        value: 'plans',
        color: 'cyan',
        url: '/plans'
    },
    {
        title: 'Payments',
        icon: 'attach_money',
        value: 'payments',
        color: '#c2185b',
        url: '/payments'
    },
    {
        title: 'Characteristic',
        icon: 'description',
        value: 'characteristic',
        color: 'green',
        url: '/characteristic'
    }
];