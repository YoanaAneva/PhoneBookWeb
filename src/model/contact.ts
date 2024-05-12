export interface Contact {
    id: string;
    name: string;
    surname?: string;
    picture?: string;
    phoneNumbers: PhoneNumber[];
    metadata: Metadata;
    user_username: string;
}

interface PhoneNumber {
    type: string;
    number: string;
}

interface Metadata {
    email?: string;
    address?: string;
    website?: string;
    birthdate?: string;
    notes?: string;
}

export const contacts: Contact[] = [{
    id: "1234",
    name: "John",
    surname: "Doe",
    phoneNumbers: [
        {
            type: "mobile",
            number: "+359 872 646239",
        },
        {
            type: "home",
            number: "+359 772 642229",
        }
    ],
    metadata: {
        email: "john@example.com",
        address: "blvd. Example 15, Sofia, Bulgaria",
        birthdate: "1999-06-23",
        notes: "My dentist's brother"
    },
    user_username: "ivan40",
},
{    
    id: "eijf222",
    name: "Dohn",
    surname: "Joe",
    phoneNumbers: [
        {
            type: "mobile",
            number: "+359 342 87654",
        },
    ],
    metadata: {
        email: "dohn@example.com",
        address: "blvd. Example 23, Varna, Bulgaria",
        website: "https://example/dohn.com",
        birthdate: "1984-12-10",
    },
    user_username: "ivan40"
},
{    
    id: "12345bvg",
    name: "Ivan",
    surname: "Ivanov",
    phoneNumbers: [
        {
            type: "mobile",
            number: "+974 663 829070",
        },
        {
            type: "bussines",
            number: "+221 675 778432",
        },
    ],
    metadata: {
        email: "ivan@example.com",
        address: "blvd. Example 9, Sofia, Bulgaria",
        website: "https://example/dohn.com",
        birthdate: "2002-09-16",
        notes: "Call every Monday"
    },
    user_username: "petar40"
}];